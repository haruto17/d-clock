import { useState, useEffect } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import "./Toggle.css";
import { useToggle } from "@mantine/hooks";

export default function ToggleSwitch() {
    const [checked, toggle] = useToggle();
    const theme = useMantineTheme();

    useEffect(() => {
        if (checked) {
            console.log("switch on!");
        } else {
            console.log("switch off!");
        }
    });

    return (
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
    );
}
