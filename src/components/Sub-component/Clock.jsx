import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{ fontSize: "1rem", textAlign: "center", marginTop: "1rem" }}>
      {time.getHours()} : {time.getMinutes()}{" "}
      {time.getHours() > 11 ? "pm" : "am"}
    </div>
  );
};

export default Clock;
