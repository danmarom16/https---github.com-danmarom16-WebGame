
function Pirate({pirateLocation, image}) {

    const generateCssIslandClass = () => {
      const island = "pirate_island_" + pirateLocation;
      return island;
    }

  return (
    <div className={generateCssIslandClass()}>
      <img src={image}/>
    </div>
  ); 
}

export default Pirate