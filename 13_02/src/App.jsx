import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import List from "./components/list/List";
import Box from "./components/box/Box";
import "./styles/main.css";


function App() {
  return (
   <div>
    <Header />
   <List />
   <Box />
   <Footer />
   </div>
  );
}

export default App;



