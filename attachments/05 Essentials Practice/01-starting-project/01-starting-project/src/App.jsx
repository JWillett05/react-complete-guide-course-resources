import { useState } from "react";
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {
    const [valueInput, setValueInput] = useState({
      initialInvestment: 0, //$
      annualInvestment: 500, //$
      expectedReturn: 5, //%
      duration: 5 //Years
  });

  const inputIsValid = valueInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setValueInput((prevUserInput) => {
        return{...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    });
}

  

  return (
    <>
      <Header />
      <UserInput valueInput={valueInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={valueInput}/>}
    </>
  )
}

export default App
