import "./Sidebar.css";
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

function OpenedSidebar({
  setOpen,
  rollDice,
  imgSrc,
  setIsBrowsing,
  isBrowsing,
  setIsPlayed,
}) {

  const [rotate, setRotate] = useState(false)

  const closeSidebar = () => {
    setOpen(false);
  };

  const handleRollDice = () => {
    rollDice();
    setRotate(!rotate);
    setTimeout(() => {
      setIsPlayed(true);
    }, 1000);
  };

  return (
    <div className="opened_sidebar">
      <div className="col" style={{textAlign: "center"}} >
        <div className="row">
          <button className="btn mb-5">
            <i className="fa-solid fa-2x fa-close" onClick={closeSidebar}></i>
          </button>
        </div>
        <div className="row browse_map">
          {isBrowsing ? (
            <button
              className="btn rounded-circle border-danger border-4"
              onClick={() => {
                setIsBrowsing(false);
              }}
            >
              <i
                className="fa-solid fa-2x fa-close"
                style={{ color: "red" }}
              ></i>
              <div className="mt-1 text-danger">Stop Browsing Map</div>
            </button>
          ) : (
            <button
              className="btn rounded-circle border-dark"
              onClick={() => {
                setIsBrowsing(true);
              }}
            >
              <i className="fa-regular fa-2x fa-hand"></i>
              <div className="mt-1">Browse Map</div>
            </button>
          )}
        </div>
        <div className="row roll_dice">
          <button className="btn border-4 border-dark" style={{fontSize:"x-large", fontWeight:"bold", color:"white"}} onClick={handleRollDice}>
            Roll Dice
          </button>
        </div>
        <div className="row">
          <motion.img animate={{rotate: rotate ? 360 : 0}} className="dice_img" src={imgSrc}></motion.img>
        </div>
      </div>
    </div>
  );
}

export default OpenedSidebar;
