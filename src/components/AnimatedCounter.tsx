
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ end, duration = 2, decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Check if element is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounting();
      }
    }, { threshold: 0.1 });
    
    const currentElement = document.getElementById(`counter-${end}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);
  
  const startCounting = () => {
    const step = end / (duration * 60);
    
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    
    timerRef.current = window.setInterval(() => {
      countRef.current += step;
      
      if (countRef.current >= end) {
        countRef.current = end;
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
        }
      }
      
      setCount(countRef.current);
    }, 1000 / 60);
  };
  
  return (
    <span id={`counter-${end}`}>
      {count.toFixed(decimals)}
    </span>
  );
};

export default AnimatedCounter;
