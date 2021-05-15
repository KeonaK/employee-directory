import React from "react";
import Wrapper from "./components/Wrapper";
import SearchDisplay from "./components/SearchDisplay";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Wrapper>
        <Navbar title="Employee Directory" />
        <SearchDisplay />
      </Wrapper>
    </>
  );
}

export default App;
