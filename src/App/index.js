import React from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <div>Welcome to Cryptodash</div>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
