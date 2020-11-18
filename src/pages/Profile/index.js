import React, { memo } from "react";
import Button from "../../components/Button";
import ProfileStyle from "./styles";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import imgSinger from "../../assets/images/singer.png";
import Dashboard from "../../components/Dashboard";

const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileStyle className="entrepreneur">
        <div className="container">
          <h1>Singer</h1>
          <img className="Profile__image" src={imgSinger} alt="Foto da pessoa" />
          <h2 className="Profile__name">Rene S. Lamontagne</h2>
          <article className="Profile__highlights">
            <p>Age: 21 years</p>
            <p>Height: 1,62</p>
            <p>Personality: Extrovert</p>
            <p>Social skills: Empathy</p>
          </article>
          <article className="Profile__overview">
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              nulla obcaecati possimus? Architecto repudiandae ipsam ut eaque
              aspernatur optio, magni a saepe cumque, aut ad necessitatibus
              quam. Velit, dolore! Nihil?
            </p>
          </article>
          <Dashboard />
          <Button className="Profile__btn">Download</Button>
        </div>
      </ProfileStyle>
    </>
  );
};

export default memo(Profile);
