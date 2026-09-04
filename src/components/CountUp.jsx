import React, { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2200 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
          setCount(0);

          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      /*
       * Smooth ease-out.
       * Starts quickly and gradually slows down
       * as it approaches the final number.
       */
      const eased =
        1 - Math.pow(1 - progress, 4);

      const value = eased * end;

      setCount(Math.round(value));

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animate);
      } else {
        // Guarantee exact final value
        setCount(end);
        animationRef.current = null;
      }
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [visible, end, duration]);

  return (
    <strong ref={ref}>
      {count}+
    </strong>
  );
}

export default CountUp;