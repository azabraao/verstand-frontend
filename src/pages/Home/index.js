import React, { memo, useState, useCallback } from "react";
import Button from "../../components/Button";
import HomeStyle from "./styles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [madeDownload, setMadeDownload] = useState(false);

  const setDownloadAsMade = useCallback(() => {
      setMadeDownload(true);
  }, []);

  return (
    <HomeStyle>
      <div className="container">
        <h1>O que é o Verstand</h1>
        <article>
          <p>
            Em Altered Carbon vemos a representação do que poderia ser um novo
            limiar para a humanidade: se se pudessemos viver para sempre?
          </p>
          <p>
            Este projeto se propôe a ser uma simulação do que seria a compra de
            uma nova "capa" como em Altered Carbon: se você se machucou
            gravemente, se sente velho ou simplesmente cansou de si mesmo,
            adquira uma nova capa! Sua consciência se manterá mas seu corpo será
            novo.
          </p>
          <p>
            Como dito na serie, "você merece ser por fora como se sente por
            dentro".
          </p>
        </article>

        <hr />
        <h2>Pick here your cover</h2>

        {madeDownload && (
          <p className="provocation">
            Ask yourself: You will really be happier by just getting a new body?
          </p>
        )}

        <div className="Home__buttons">
          <Button
            onMouseOver={setDownloadAsMade}
            theme="singer"
            href="singer.json"
            download="singer.json"
          >
            <span>Singer</span>
          </Button>
          <Button
            onMouseOver={setDownloadAsMade}
            theme="fighter"
            href="fighter.json"
            download="fighter.json"
          >
            <span>Fighter</span>
          </Button>
          <Button
            onMouseOver={setDownloadAsMade}
            theme="entrepreneur"
            href="entrepreneur.json"
            download="entrepreneur.json"
          >
            <span>entrepreneur</span>
          </Button>
        </div>

        <div className="Home__cta">
          <Button
            size="md"
            onClick={() => {
              history.push("/register");
            }}
          >
            Start the experience
          </Button>
        </div>
      </div>
    </HomeStyle>
  );
};

export default memo(Home);
