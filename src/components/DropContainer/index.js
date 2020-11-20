import React, { memo, useRef, useState, useEffect } from "react";
import iconJson from "../../assets/images/icon-json.svg";
import DropContainerStyle from "./styles";
import classNames from "classnames";
import sleeveService from "../../services/sleeve.service";
import { useHistory } from "react-router-dom";

const DropContainer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [hasError, setHasError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState("");
  const [canRedirect, setCanRedirect] = useState(false);
  
  const history = useHistory();

  useEffect(() => {
    if (isUploading) {
      setTimeout(() => {
        isUploading && canRedirect && history.push("sleeve");
      }, 10000);
    }
  }, [isUploading, canRedirect, history]);


  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    }
  }, [hasError]);

  const hiddenInputRef = useRef();

  const dragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const fileIsJSON = (file) => {
    return file?.type === "application/json";
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    const file = files[0];

    if (files.length > 1) {
      setHasError(true);
      setErrorMessage("Please, drop only one file");
      return;
    }

    handleFile(file);
  };

  const handleFile = async (file) => {
    if (!fileIsJSON(file)) {
      setHasError(true);
      setErrorMessage("Please, upload a JSON file");
      return;
    }

    const validFileNames = ["singer.json", "entrepreneur.json", "fighter.json"];

    if (!validFileNames.includes(file.name)) {
      setHasError(true);
      setErrorMessage("Please use one of the json files we gave to you! :P");
      return;
    }

    setIsUploading(true);

    try {
      const data = new FormData();
      data.append("capa", file);

      await sleeveService.uploadJson(data);

      setCanRedirect(true);
    } catch (err) {
      setIsUploading(false);
      setHasError(true);
      setErrorMessage("Something went wrong. Please try again");

      return;
    }

    setFile(file);
  };

  const onContainerClick = () => {
    hiddenInputRef.current.click();
  };

  const onFileInputChange = () => {
    handleFile(hiddenInputRef.current.files[0]);
  };

  return (
    <DropContainerStyle
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={onFileDrop}
      onClick={onContainerClick}
      className={classNames({ isDragging, hasError, isUploading })}
      aria-dropeffect="move"
    >
      <div className="DragContainer__inside">
        <input
          onChange={onFileInputChange}
          hidden
          aria-hidden
          ref={hiddenInputRef}
          type="file"
        />
        {!isUploading && <img src={iconJson} alt="icon" />}
        {isUploading ? (
          <article className="DragContainer__fileName">
            <img src={iconJson} alt="icon" />
            <p>{file.name}</p>
          </article>
        ) : (
          <article className="DropContainer__text">
            {hasError ? (
              <p>{errorMessage}</p>
            ) : (
              <p>Drop your JSON file here, or click to upload</p>
            )}
          </article>
        )}
      </div>
    </DropContainerStyle>
  );
};

export default memo(DropContainer);
