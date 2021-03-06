import React, { memo, useState, useCallback, useEffect } from "react";
import Button from "../../components/Button";
import HomeStyle from "./styles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [madeDownload, setMadeDownload] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const setDownloadAsMade = useCallback(() => {
    setMadeDownload(true);
  }, []);

  return (
    <HomeStyle>
      <div className="container">
        <article>
          <header>
            <h1>O que é o Verstand</h1>
          </header>
          <p>
            Em Altered Carbon vemos a representação do que poderia ser um novo
            limiar para a humanidade: e se pudessemos viver para sempre?
          </p>
          <p>
            Este projeto se propôe a ser uma simulação do que seria a compra de
            uma nova "capa" (ou como na série, "Sleeve") como em Altered Carbon:
            se você se machucou gravemente, se sente velho ou simplesmente
            cansou de si mesmo, adquira uma nova capa! Sua consciência se
            manterá mas seu corpo será novo.
          </p>
          <p>
            Como dito na serie, "você merece ser por fora como se sente por
            dentro".
          </p>
        </article>

        <hr />
        <main role="main">
          <h2>Pick here your Sleeve</h2>

          {madeDownload && (
            <p className="provocation" role="complementary">
              Ask yourself: Will you really be happier by just getting a new
              body?
            </p>
          )}

          <div className="Home__sleeves">
            <div className="Home__sleeve">
              <article>
                <p>Entrepreneur</p>
              </article>
              <Button
                onMouseOver={setDownloadAsMade}
                href="entrepreneur.json"
                download="entrepreneur.json"
              >
                <span>Download</span>
              </Button>
            </div>
            <div className="Home__sleeve">
              <article>
                <p>Singer</p>
              </article>
              <Button
                onMouseOver={setDownloadAsMade}
                href="singer.json"
                download="singer.json"
              >
                <span>Download</span>
              </Button>
            </div>
            <div className="Home__sleeve">
              <article>
                <p>Fighter</p>
              </article>
              <Button
                onMouseOver={setDownloadAsMade}
                href="fighter.json"
                download="fighter.json"
              >
                <span>Download</span>
              </Button>
            </div>
          </div>
        </main>
        <footer className="Home__cta">
          <Button
            role="link"
            size="md"
            onClick={() => {
              history.push("/register");
            }}
          >
            Start the experience
          </Button>
        </footer>
      </div>
    </HomeStyle>
  );
};

export default memo(Home);
