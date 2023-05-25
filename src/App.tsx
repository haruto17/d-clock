import { useState } from "react";
import { MantineProvider, Text, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Clock from "./Clock";

function App() {
    return (
        <div>
            <Clock />
        </div>
    );
}

export default App;
