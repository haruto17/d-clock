import { useState } from "react";
import { MantineProvider, Text } from "@mantine/core";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <body>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text>Welcome to Mantine!</Text>
      </MantineProvider>
      <div>
        <p>Hello, Tauri!!</p>
        <Clock />
      </div>
    </body>
  );
}

export default App;
