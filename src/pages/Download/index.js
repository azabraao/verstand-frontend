import React, { memo, useEffect, useState, useCallback } from "react";
import DownloadStyle from "./styles";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import sleeveService from "../../services/sleeve.service";

const Download = () => {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [second, setSecond] = useState(10);

  useEffect(() => {
    const JSON = sleeveService.getStoredJson();

    if (!JSON) {
      sleeveService.getJson().then(({ data }) => {
        sleeveService.storeJson(data);
        console.log("set", data);
        setDownloadUrl(data.full_report);
      });
    } else {
      setDownloadUrl(JSON.full_report);
    }
  }, []);

  useEffect(() => {
    downloadUrl && countAndDownload();
  }, [downloadUrl]);

  const countAndDownload = useCallback(() => {
    let counter = 10;
    const interval = setInterval(() => {
      setSecond(counter);

      if (counter === 0) {
        window.open(downloadUrl);
        clearInterval(interval);
      }

      counter--;
    }, 1000);
  }, [second, downloadUrl]);

  return (
    <>
      <Navbar />
      <DownloadStyle className="singer">
        <main className="container">
          <article>
            <header>
              <h1>Sleeve Full Report</h1>
            </header>
            {!downloadUrl ? (
              <p>We are preparing your download...</p>
            ) : (
              <>
                {second != 0 && (
                  <p>(Your download will start in a new tab in {second})</p>
                )}
              </>
            )}

            <p>
              Now remember to ask yourself: I'm getting happier by changing my
              body? Is it right to think that much in just me? What about the
              other people?
            </p>
          </article>
          <footer>
            <a
              href="https://mybinder.org/v2/gh/azabraao/world-happiness-report/master"
              target="_blank"
            >
              See a intelligent report of what really makes people (then you) happy
            </a>
          </footer>
        </main>
      </DownloadStyle>
    </>
  );
};

export default memo(Download);
