import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../../src/data.js'
const numbersArray = {numbers};
const Numbers = (props) => {
  const number = props.number
  const [number, setNumber] = useState({numbers}[0])
  return (
    number.map(x => {
      return x;
    })
  );
};

ReactDOM.render(<Numbers number={numbers}/>)
