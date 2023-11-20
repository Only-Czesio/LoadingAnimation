interface GridProps {
    squareSizes: {
      square1: string;
      square2: string;
      square3: string;
      square4: string;
      square5: string;
      square6: string;
      square7: string;
      square8: string;
      square9: string;
    };
  }

  const Grid: React.FC<GridProps> = ({ squareSizes }) => {
    return(
        <div className="grid-container">
        <div className={`${squareSizes.square1}`}></div>
        <div className={`${squareSizes.square2}`}></div>
        <div className={`${squareSizes.square3}`}></div>
        <div className={`${squareSizes.square4}`}></div>
        <div className={`${squareSizes.square5}`}></div>
        <div className={`${squareSizes.square6}`}></div>
        <div className={`${squareSizes.square7}`}></div>
        <div className={`${squareSizes.square8}`}></div>
        <div className={`${squareSizes.square9}`}></div>
        </div>
    )
}

export default Grid;