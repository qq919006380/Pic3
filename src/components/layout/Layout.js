import PropTypes from "prop-types";
import React from "react";
import classes from "../../../styles/Layout.module.css";
import MainNavgation from "./MainNavgation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavgation />
      <main className={`${classes.layout}`}>{children}</main>
      <footer className="tracking-wider py-2 fixed bottom-0 text-center w-full text-gray-500 text-xs">
        <p>
          © 2022 - 2023 Powered by Pic3
          <a className="text-blue-500 cursor-pointer hover:opacity-80  mx-3" href="">
            Github
          </a>
        </p>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
