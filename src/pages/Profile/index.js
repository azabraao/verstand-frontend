import React, { memo } from "react";
import Button from "../../components/Button";
import ProfileStyle from "./styles";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Profile = () => {
 
  return (<>
      <Navbar/>
    <ProfileStyle>
      <div className="container">
        <h1>Profile</h1>
      </div>
    </ProfileStyle>
    </>
  );
};

export default memo(Profile);
