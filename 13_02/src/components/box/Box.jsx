import React, { useState } from 'react';

const Box = () => {
    const [boxClass, setBoxClass] = useState("black");
    const [buttonText, setButtonText] = useState("change state");
    

    const changeState = () => {
        setBoxClass("blue");
        setButtonText("поменяли состояние");
    }
  
        
      
    return (
        <div className={`${boxClass} box`}>
            <button onClick={changeState}>{buttonText}</button>
        </div>
    );
}

export default Box;
