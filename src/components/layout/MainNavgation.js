import React from "react";
import Link from "next/link";
import classes from "../../../styles/MainNavgation.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const MainNavgation = () => {
  
  return (
    <nav className={classes.navigateBar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/upload">Upload</Link>
        </li>

        <li>
          <Link href="/picture">Picture</Link>
        </li>
         
      </ul>
      <ConnectButton />
    </nav>
  );
};

export default MainNavgation;
