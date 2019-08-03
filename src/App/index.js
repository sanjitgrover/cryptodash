import React from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import "./App.css";
import Settings from "../Settings";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Settings />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
