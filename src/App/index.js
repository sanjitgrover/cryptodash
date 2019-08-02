import React from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import "./App.css";

function App() {
  return (
    <AppLayout>
      <AppBar/>
      <div>Welcome to Cryptodash</div>
    </AppLayout>
  );
}

export default App;
