'use client'
import React, { useEffect, useRef } from 'react';
import animationData from '../../../../public/animations/error/error.json';
import lottie from 'lottie-web'

const Loading: React.FC = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationRef.current) {
      const animation = lottie.loadAnimation({
        container: animationRef.current,
        loop: true,
        autoplay: true,
        animationData: animationData,
        path: './animation/error/error.json',
      });
      return () => {
        animation.destroy();
      };
    }
  }, []);

  return <div ref={animationRef} className='flex items-center justify-center ' 
  style={{ height: '20vh ', width: '20vh' }}/>;
};

export default Loading;