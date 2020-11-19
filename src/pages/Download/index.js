import React, { memo, useEffect, useState } from "react";
import DownloadStyle from "./styles";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import profileService from "../../services/profile.service";

const Download = () => {
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const JSON = profileService.getStoredJson();

    if (!JSON) {
      profileService.getJson().then(({ data }) => {
        profileService.storeJson(data);
        setDownloadUrl(data.full_report);
      });
    } else {
      setDownloadUrl(JSON.full_report);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      downloadUrl && window.open(downloadUrl);
    }, 5000);
  }, [downloadUrl]);

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

          <a
            href="https://mybinder.org/v2/gh/azabraao/world-happiness-report/master"
            target="_blank"
          >
            See a full report of what makes you happy{" "}
          </a>
        </div>
      </DownloadStyle>
    </>
  );
};

export default memo(Download);
