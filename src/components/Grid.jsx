import React, { useState, useEffect } from 'react';
import './Grid.css'; // Assuming you have a CSS file for styling

const Grid = () => {
  const [grid, setGrid] = useState([]);
  const [prevClickedInfo,setPrevClickedInfo]=useState({index:'',color:''});

  const handleClick = (index,color) => {

    const newGrid = [...grid];
    newGrid[index] = 'red';

    if(prevClickedInfo.index === '' ){
    setPrevClickedInfo({index,color});
    }
    else{
      newGrid[prevClickedInfo.index] = prevClickedInfo.color;
      setPrevClickedInfo({index,color});
    }
     setGrid(newGrid);
    
  };


  useEffect(() => {
   const generateGrid = () => {
      const newGrid = [];
      let isBlackRow = true;

      for (let row = 0; row < 8; row++) {
        const startColor = isBlackRow ? 'black' : 'white';
        const alternateColor = isBlackRow ? 'white' : 'black';

        for (let col = 0; col < 8; col++) {
          const color = col % 2 === 0 ? startColor : alternateColor;
          newGrid.push(color);
        }

        isBlackRow = !isBlackRow;
      }

      setGrid(newGrid);
    };
    generateGrid();
  }, []);

  return (
   <div  className='main-container'>
     <div className="grid-container">
      {grid.map((color, index) => (
      <div
        key={index}
        className={`grid-cell ${color}`}
        onClick={() => handleClick(index,color)}
      />
    ))}
    </div>;
  </div>
  )
  
 
};

export default Grid;
