// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const NumberCounter = ({ start, end }) => {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    setIsCounting(true);
  }, []);

  return (
    <span>
      {isCounting && (
        <CountUp start={start} end={end} duration={2} separator="," />
      )}
    </span>
  );
};

export default NumberCounter;
