import { useState } from "react";
import { MantineProvider, Text, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Clock from "./Clock";
import Toggle from "./Toggle";

function App() {
    return (
        <div>
            <Clock />
            <Toggle />
        </div>
    );
}

export default App;
