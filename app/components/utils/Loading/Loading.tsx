'use client'
import React, { useEffect, useRef,useState } from 'react';
import animationData from '../../../../public/animations/loading/loading.json';
import lottie from 'lottie-web'

const Loading: React.FC = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (animationRef.current) {
      const animation = lottie.loadAnimation({
        container: animationRef.current,
        loop: true,
        autoplay: true,
        animationData: animationData,
        path: './animation/loading/loading.json',
      });

      
      if (isAnimating) {
        setTimeout(() => {
          setIsAnimating(false);
        }, 6000);
      }
      
      return () => {
        animation.destroy();
      };
    }
  }, [isAnimating]);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return <div ref={animationRef} className='flex items-center justify-center ' 
  style={{ height: '20vh', width: '20vh', maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>;
};

export default Loading;
