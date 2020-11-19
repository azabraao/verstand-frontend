import React, { memo } from "react";
import Button from "../../components/Button";
import HomeStyle from "./styles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <HomeStyle>
      <div className="container">
        <h1>Lorem ipsum dolor, sit amet</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sint similique maxime laudantium voluptatum illum consectetur eius,
          aliquid ipsa tempore, explicabo fugit laboriosam eos! Ipsa nostrum
          reiciendis facere error vero?
        </p>

        <h2>lorem ipasum asd:</h2>

        <div className="Home__buttons">
          <Button theme="singer" href="singer.json" download="singer.json">
            <span>Singer</span>
          </Button>
          <Button theme="fighter" href="fighter.json" download="fighter.json">
            <span>Fighter</span>
          </Button>
          <Button
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
            Create your account
          </Button>
        </div>
      </div>
    </HomeStyle>
  );
};

export default memo(Home);
