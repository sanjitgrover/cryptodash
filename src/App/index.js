import React from 'react';
import styled from 'styled-components';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar'
import AppProvider from './AppProvider';

const MyButton = styled.div`
color: white;
`

function App() {
  return (
    <AppProvider>
    <AppLayout>
      <AppBar>
      <MyButton>Hello World</MyButton>
      </AppBar>
    </AppLayout>
    </AppProvider>
  );
}

export default App;
