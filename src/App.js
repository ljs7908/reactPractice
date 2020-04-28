import React from "react";
import SinglePage from "./pages/page01";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>TEST React App</title>
      </Helmet>
      <SinglePage />
    </>
  );
}

export default App;
