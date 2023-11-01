import "./App.css";
import Header from "./assets/components/Header";
import Paragraph from "./assets/components/Paragraph";
import SquareLogo from "./assets/svg/square.png";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(0);
  const messages: Array<string> = [
    ":D",
    "Magnifique !",
    "Il va trop vite...",
    "J'ai passé 1 heure à coder ce truc",
  ];

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <Header name={"Equitable.net"} />

      <div className="flex flex-col items-center justify-center gap-25">
        <Paragraph
          text="Bonjour et bienvenue sur le site web de l'entreprise Equitable.net."
          marginBot={0}
        />
        <Paragraph
          text="Cliquez sur le bouton ci-dessous pour voir quelque-chose de très drôle : "
          marginBot={25}
        />

        <button
          onClick={() => {
            setNum(randomNumberInRange(0, messages.length - 1));
            setVisible(!visible);
          }}
        >
          Cliquez-moi
        </button>

        <div
          style={{
            display: visible ? "block" : "none",
            padding: 50,
          }}
        >
          <img
            src={SquareLogo}
            height={150}
            width={150}
            className="logo m-14"
            alt="Funny Square"
          />
          <Paragraph text={messages[num]} marginBot={0} />
        </div>
      </div>
    </>
  );
}

export default App;
