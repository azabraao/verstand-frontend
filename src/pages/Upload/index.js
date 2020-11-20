import React, { memo } from "react";
import UploadStyle from "./styles";
import DropContainer from "../../components/DropContainer";

const Upload = () => {
  return (
    <UploadStyle>
      <main className="container">
        <header>
          <h1>Verstand</h1>
          <h2>Upload</h2>
        </header>

        <article className="Upload__header-text">
          <p>Insert the .JSON file to start the experiment</p>
        </article>

        <DropContainer />
      </main>
    </UploadStyle>
  );
};

export default memo(Upload);
