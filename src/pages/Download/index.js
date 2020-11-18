import React, { memo } from "react";
import DownloadStyle from "./styles";
import Navbar from "../../components/Navbar";

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
        </div>
      </DownloadStyle>
    </>
  );
};

export default memo(Download);
