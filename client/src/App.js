import Background from "./background/Background.js";
import "./background/Background.css";
import Pirate from "./Pirate.js";
import "./Pirate.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
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
import axios from "./Axios";


function App() {

  const ref = useRef(null);
  const [open, setOpen] = useState(true);
  const [diceNum, setDiceNum] = useState('1');
  const [isPlayed, setIsPlayed] = useState(false);
  const [imgSrc, setImgSrc] = useState("./cubes/cube1.jpg");
  const [isBrowsing, setIsBrowsing] = useState(false);
  const [show, setShow] = useState(false)
  const [playedGamesCount, setPlayedGamesCount] = useState(0);
  const [userIP, setUserIP] = useState(null);

  const increasePlayedGamesCounter = () => {
    setPlayedGamesCount(playedGamesCount => playedGamesCount + 1);
  }


  const determineAction = (x) => {

    switch (x){
      case 1:
        return "Player rolled 1";
      case 2:
        return "Player rolled 2";
      case 3:
        return "Player rolled 3";
      case 4:
        return "Player rolled 4";
      case 5:
        return "Player rolled 5";
      case 6:
        return "Player rolled 6";
        default:
          return "error";           
    }

  }

  const logAction = (x) => {

    const date = Date.now()
    const act = determineAction(x)
    const id = playedGamesCount;
    increasePlayedGamesCounter();
    
    const request = JSON.stringify({
      id: id,
      ip: userIP,
      action: act,  //generateAction 
      timestamp: date
    });

    axios
    .post(`/`, request)
    .then((res) => {
        console.log("POST succesfully");
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setUserIP(res.data.IPv4);
  }

  useEffect(()=>{
    getIP();
  },[])

  const rollDice = () => {
    const x = Math.floor(Math.random() * 6) + 1;
    setDiceNum(String(x));
    setDiceNum(x)
    let src = `./cubes/cube${x}.jpg`;
    setImgSrc(src);
    logAction(x);
  };

  return (
    <div className="app">
      <EndScreen
        setImgSrc={setImgSrc}
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
