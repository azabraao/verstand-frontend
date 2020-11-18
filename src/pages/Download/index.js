import React, { memo } from "react";
import DownloadStyle from "./styles";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Download = () => {
  return (
    <>
      <Navbar />
      <DownloadStyle className="singer">
        <div className="container">
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            maiores dicta esse, nisi velit adipisci ea sequi, quo voluptates
            impedit doloribus ex et soluta nam vitae, doloremque in ullam a.
          </article>

          <a href="https://mybinder.org/v2/gh/azabraao/world-happiness-report/master" target="_blank">
            See a full report of what makes you happy{" "}
          </a>
        </div>
      </DownloadStyle>
    </>
  );
};

export default memo(Download);
