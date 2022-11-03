import Background from "./background/Background.js";
import "./background/Background.css";
import Pirate from "./Pirate.js";
import "./Pirate.css";
import "./App.css";
import { useRef, useState } from "react";
import OpenedSidebar from "./sidebar/OpenedSidebar.js";
import ClosedSidebar from "./sidebar/ClosedSidebar.js";
import seaImg from "./assets/sea.png";
import islandOneImg from "./assets/island1.png";
import islandTwoImg from "./assets/island2.png";
import islandThreeImg from "./assets/island3.png";
import islandFourImg from "./assets/island4.png";
import islandFiveImg from "./assets/island5.png";
import islandSixImg from "./assets/island6.png";
import pirateImage from "./assets/pirate.png";
import ScrollContainer from "react-indiana-drag-scroll";
import EndScreen from "./endScreen/EndScreen.js";

function App() {
  const ref = useRef(null);
  const [open, setOpen] = useState(true);
  const [diceNum, setDiceNum] = useState('1');
  const [isPlayed, setIsPlayed] = useState(false);
  const [imgSrc, setImgSrc] = useState("./cubes/cube1.jpg");
  const [isBrowsing, setIsBrowsing] = useState(false);
  const [show, setShow] = useState(false)
  const [numPlayedGames, setNumPlayedGames] = useState(0);

  const increseNumOfPlayedGames = () => setNumPlayedGames(numPlayedGames => numPlayedGames + 1);

  const rollDice = () => {
    const x = Math.floor(Math.random() * 6) + 1;
    setDiceNum(String(x));
    console.log(`value of cube in App ${diceNum}`);
    let src = `./cubes/cube${x}.jpg`;
    setImgSrc(src);
  };

  return (
    <div className="app">
      <EndScreen
        setImgSrc={setImgSrc}
        numPlayedGames={numPlayedGames}
        setIsPlayed={setIsPlayed}
        setDiceNum={setDiceNum}
        diceNum={diceNum}
        setShow={setShow}
        show={isPlayed}
      ></EndScreen>
      <ScrollContainer className="scroll-container" id="app">
        <Background
          seaImg={seaImg}
          islandOneImg={islandOneImg}
          islandTwoImg={islandTwoImg}
          islandThreeImg={islandThreeImg}
          islandFourImg={islandFourImg}
          islandFiveImg={islandFiveImg}
          islandSixImg={islandSixImg}
        />
        <Pirate pirateLocation={diceNum} image={pirateImage} />
        {open === true ? (
          <OpenedSidebar
            setOpen={setOpen}
            rollDice={rollDice}
            imgSrc={imgSrc}
            setIsBrowsing={setIsBrowsing}
            isBrowsing={isBrowsing}
            setIsPlayed={setIsPlayed}
          />
        ) : (
          <ClosedSidebar setOpen={setOpen} />
        )}
      </ScrollContainer>
    </div>
  );
}

export default App;
