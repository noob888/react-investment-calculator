// Packages
import { useState } from "react";
// Components
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Table from "./components/Table.jsx"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        // Square brackets are used to set param inputIdentifier dynamically
        // So simplay adding a + will force the new value to be a number
        [inputIdentifier]: +newValue
      };
    });
  };

  const isDurationValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput inputData={userInput} onInputChange={handleChange} />
      {/* The data got from the user input element is always a string though type is number */}
      { isDurationValid ? <Table onInputChange={userInput} /> : <p className="center"> Please enter a valid duration.</p>}
    </>
  );
}

export default App
