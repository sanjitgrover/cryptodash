import React from "react";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import "./App.css";
import Settings from "../Settings";
import Content from "../Shared/Content";
function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
