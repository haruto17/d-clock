import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock() {
    const [date, setDate] = useState("");
    const [dow, setDow] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const dayofweek = now.getDay();
            let month = String(now.getMonth() + 1);
            let day = String(now.getDate());
            let hour = String(now.getHours());
            let minute = String(now.getMinutes());

            if (month.length === 1) {
                month = "0" + month;
            }
            if (day.length === 1) {
                day = "0" + day;
            }
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            if (minute.length === 1) {
                minute = "0" + minute;
            }

            setDate(`${year}/${month}/${day}`);
            setDow(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayofweek]);
            setTime(`${hour}:${minute}`);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <>
            <div className="Clock">
                <div className="Date">
                    <p>{date}</p>
                </div>
                <div className="DayOfWeek">
                    <p>{dow}</p>
                </div>
                <div className="Time">
                    <p>{time}</p>
                </div>
            </div>
        </>
    );
}

export default Clock;
