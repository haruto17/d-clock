import { useState, useEffect } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Clock from "./Clock";

function App() {
    const [checked, toggle] = useToggle();
    const theme = useMantineTheme();

    useEffect(() => {
        const body = document.body;
        if (checked) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    });

    return (
        <div className="myapp">
            <Clock />
            <Group position="center">
                <Switch
                    checked={checked}
                    onChange={() => toggle()}
                    size="md"
                    color={theme.colorScheme === "dark" ? "gray" : "dark"}
                    onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
                    offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.blue[6]} />}
                />
            </Group>
        </div>
    );
}

export default App;
