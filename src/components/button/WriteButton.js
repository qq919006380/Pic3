import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useChainId,
} from "wagmi";
import { parseEther } from "viem";
import {
  CHAIN_MAP,
  GAS_LIMIT_MULTIPLIER,
} from "../../config/constant";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
 
const WriteButton = ({ onClick, children, abi, functionName, value, args }) => {
  const { enqueueSnackbar } = useSnackbar();
  const chainId = useChainId();
  const {
    config,
    isError: prepareIsError,
    error: prepareError,
  } = usePrepareContractWrite({
    address: CHAIN_MAP[chainId].contarctAddress,
    abi,
    functionName,
    // value: parseEther(value),
    args,
  });

  const {
    data,
    error: writeError,
    isError: writeIsError,
    isLoading: writeIsLoading,
    write,
  } = useContractWrite({
    ...config,
    request: {
      ...config.request,
      gasLimit: Math.ceil(config?.request?.gasLimit * GAS_LIMIT_MULTIPLIER),
    },
  });

  const {
    data: txnRes,
    error: txnError,
    isError: txnIsError,
    isLoading: txnIsLoading,
    isSuccess: txnIsSuccess,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (txnIsSuccess) {
      console.log("Transaction success", txnRes);
      enqueueSnackbar("Transaction success", { variant: "success" });
      onClick?.(args);
    }
  }, [txnIsSuccess]);

  useEffect(() => {
    if (txnIsError) {
      enqueueSnackbar(txnError.message, { variant: "error" });
    }
  }, [txnIsError]);

  useEffect(() => {
    if (writeIsError) {
      let message = JSON.parse(JSON.stringify(writeError))?.shortMessage;
      console.log("write error", message);
      enqueueSnackbar(message, { variant: "error" });
    }
  }, [writeIsError]);

  useEffect(() => {
    if (prepareIsError) {
      enqueueSnackbar(prepareError.message, { variant: "error" });
    }
  }, [prepareIsError]);

  const handleClick = () => {
    if (args[0][0] && args[0][0].length > 0) {
      write?.();
    } else {
      enqueueSnackbar("Please select images", { variant: "warning" });
    }
  };
  return (
    <>
      <button
        disabled={!write || writeIsLoading || txnIsLoading}
        onClick={handleClick}
        className=" p-0"
        id="inherit-button"
      >
        {children}
      </button>
      {txnIsLoading && <CircularProgress />}
      {prepareError && (
        <div>
          An error occurred preparing the transaction: {prepareError.message}
        </div>
      )}
    </>
  );
};

WriteButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  abi: PropTypes.any.isRequired,
  functionName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  args: PropTypes.array.isRequired,
};

export default WriteButton;
