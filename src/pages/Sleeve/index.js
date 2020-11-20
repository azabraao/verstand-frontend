import React, { memo, useState, useEffect } from "react";
import Button from "../../components/Button";
import SleeveStyle from "./styles";
import Navbar from "../../components/Navbar";
import imgSinger from "../../assets/images/singer.png";
import Dashboard from "../../components/Dashboard";
import sleeveService from "../../services/sleeve.service";
import { useHistory } from "react-router-dom";

const Sleeve = () => {
  const [sleeve, setSleeve] = useState({});
  const history = useHistory();

  useEffect(() => {
    const JSON = sleeveService.getStoredJson();

    if (!JSON) {
      sleeveService.getJson().then(({ data }) => {
        sleeveService.storeJson(data);
        setSleeve(data);
      });
    } else {
      setSleeve(JSON);
    }
    console.log(JSON);
  }, []);

  const redirectToDownload = () => {
    history.push("download");
  };

  return (
    <>
      <Navbar />
      <SleeveStyle className={sleeve.profile_kind}>
        <main className="container">
          <header>
            <h1>{sleeve.profile_kind}</h1>
          </header>
          <img
            className="Sleeve__image"
            src={sleeve.image_path}
            alt="Foto da pessoa"
          />
          <h2 className="Sleeve__name">Rene S. Lamontagne</h2>
          <article className="Sleeve__highlights">
            <p>Age: {sleeve.age}</p>
            <p>Height: {sleeve.tall}</p>
            <p>Personality: {sleeve.personality}</p>
            <p>
              Methodical skills:
              <ul>
                {sleeve["methodical_skills"]?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </p>
          </article>
          <article className="Sleeve__overview">
            <h3>Overview</h3>
            <p>{sleeve.description}</p>
          </article>
          <Dashboard
            memory={sleeve.dashboard?.memory}
            happiness={sleeve.dashboard?.happiness}
            reasoning={sleeve.dashboard?.reasoning}
            analysis={sleeve.dashboard?.analysis}
            intelligence={sleeve.dashboard?.intelligence}
          />
          <Button onClick={redirectToDownload} className="Sleeve__btn">
            Full report
          </Button>
        </main>
      </SleeveStyle>
    </>
  );
};

export default memo(Sleeve);
