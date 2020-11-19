import React, { memo, useState, useEffect } from "react";
import Button from "../../components/Button";
import ProfileStyle from "./styles";
import Navbar from "../../components/Navbar";
import imgSinger from "../../assets/images/singer.png";
import Dashboard from "../../components/Dashboard";
import profileService from "../../services/profile.service";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const JSON = profileService.getStoredJson();

    if (!JSON) {
      profileService.getJson().then(({ data }) => {
        profileService.storeJson(data);
        setProfile(data);
      });
    } else {
      console.log(JSON);
      setProfile(JSON);
    }
  }, []);

  const redirectToDownload = () => {
    history.push("download");
  };

  return (
    <>
      <Navbar />
      <ProfileStyle className="singer">
        <div className="container">
          <h1>Singer</h1>
          <img
            className="Profile__image"
            src={imgSinger}
            alt="Foto da pessoa"
          />
          <h2 className="Profile__name">Rene S. Lamontagne</h2>
          <article className="Profile__highlights">
            <p>Age: {profile.age}</p>
            <p>Height: {profile.tall}</p>
            <p>Personality: {profile.personality}</p>
            <p>
              Methodical skills:
              <ul>
                {profile["methodical_skills"]?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </p>
          </article>
          <article className="Profile__overview">
            <h3>Overview</h3>
            <p>{profile.description}</p>
          </article>
          <Dashboard
            memory={profile.dashboard?.memory}
            happiness={profile.dashboard?.happiness}
            reasoning={profile.dashboard?.reasoning}
            analysis={profile.dashboard?.analysis}
            intelligence={profile.dashboard?.intelligence}
          />
          <Button onClick={redirectToDownload} className="Profile__btn">
            Download
          </Button>
        </div>
      </ProfileStyle>
    </>
  );
};

export default memo(Profile);
