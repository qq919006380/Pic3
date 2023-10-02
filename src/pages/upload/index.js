import PropTypes from "prop-types";
import React from "react";
import UploadButton from "../../components/button/UploadButton";
import { ABI } from "../../config/constant";

const MintPage = (props) => {
  return (
    <div id="mainContainer">
      <h1>The Mint Page</h1>
      <UploadButton
        abi={props.abi}
        functionName={"addCID"}
        args={['123']}
        value={"0.01"}
      >
        Mint
      </UploadButton>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      abi: ABI,
    }, // will be passed to the page component as props
  };
}

MintPage.propTypes = {
  abi: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MintPage;
