import { useEffect, useState } from "react";

const Counter = ({ targetNumber, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = targetNumber / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < targetNumber) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };
    requestAnimationFrame(step);
  }, [started, targetNumber, duration]);

  return <p>+{count}</p>;
};

export default Counter;
