import { useState, useEffect } from "react";
import Grid from './Grid';

const Squares = () => {
  const [squareSizes, setSquareSizes] = useState<{
    [key: string]: string;
  }>({
    square1: "fullSize",
    square2: "fullSize",
    square3: "fullSize",
    square4: "fullSize",
    square5: "fullSize",
    square6: "fullSize",
    square7: "fullSize",
    square8: "fullSize",
    square9: "fullSize",
  });
  const group1 = {
    id: 1,
    sentence: ['square7']
  }
    const group2 = {
    id: 2,
    sentence: ['square8','square4']
  }
    const group3 = {
    id: 3,
    sentence: ['square1','square5','square9']
  }
    const group4 = {
    id: 4,
    sentence: ['square2','square6']
  }
    const group5 = {
    id: 5,
    sentence: ['square3']
  }

  useEffect(()=> {
    const sequence = [
      { id: group1.sentence, size: 'midSize'},
      { id: group2.sentence, size: 'midSize'},
      { id: group3.sentence, size: 'midSize'},
      { id: group4.sentence, size: 'midSize'},
      { id: group5.sentence, size: 'midSize'},
      { id: group1.sentence, size: 'smallSize'},
      { id: group2.sentence, size: 'smallSize'},
      { id: group3.sentence, size: 'smallSize'},
      { id: group4.sentence, size: 'smallSize'},
      { id: group5.sentence, size: 'smallSize'},
      { id: group1.sentence, size: 'Empty'},
      { id: group2.sentence, size: 'Empty'},
      { id: group3.sentence, size: 'Empty'},
      { id: group4.sentence, size: 'Empty'},
      { id: group5.sentence, size: 'Empty'},
      { id: group1.sentence, size: 'smallSize'},
      { id: group2.sentence, size: 'smallSize'},
      { id: group3.sentence, size: 'smallSize'},
      { id: group4.sentence, size: 'smallSize'},
      { id: group5.sentence, size: 'smallSize'},
      { id: group1.sentence, size: 'midSize'},
      { id: group2.sentence, size: 'midSize'},
      { id: group3.sentence, size: 'midSize'},
      { id: group4.sentence, size: 'midSize'},
      { id: group5.sentence, size: 'midSize'},
      { id: group1.sentence, size: 'fullSize'},
      { id: group2.sentence, size: 'fullSize'},
      { id: group3.sentence, size: 'fullSize'},
      { id: group4.sentence, size: 'fullSize'},
      { id: group5.sentence, size: 'fullSize'},
    ];

    let step = 0;
    const interval = setInterval(() => {
      console.log(step);
      if (step < sequence.length) {
        const { id, size } = sequence[step];
        setSquareSizes((prevSizes) => {
          const updatedSizes = { ...prevSizes };
        
          // Check if the square is part of a group
          if (Array.isArray(id)) {
            // If yes, update the size for all squares in the group
            id.forEach((squareId) => {
              updatedSizes[squareId] = size;
            });
          } else {
            // If not, update the size for the individual square
            updatedSizes[id] = size;
          }
        
          return updatedSizes;
        });
        step = (step + 1) % sequence.length;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <Grid squareSizes={squareSizes}></Grid>
  )
};
export default Squares;
