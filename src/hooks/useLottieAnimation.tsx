import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';

const useLottieAnimation = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  const [animationPath, setAnimationPath] = useState('/light.json');
  const animationRef = useRef<any>(null);
  const [isSun, setIsSun] = useState(true); // Track the current animation state

  // Load Lottie library
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  // Initialize or update animation
  useEffect(() => {
    if (lottie && containerRef.current) {
      // Destroy previous animation if it exists
      if (animationRef.current) {
        animationRef.current.destroy();
      }

      // Load new animation
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: animationPath,
      });
      animationRef.current = animation;
      animation.setSpeed(1.5);

      // Add hover event listeners
      const container = containerRef.current;

      const handleMouseEnter = () => {
        animation.play();
      };

      const handleMouseLeave = () => {
        animation.stop();
        animation.goToAndStop(0, true);
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        animation.destroy();
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [lottie, animationPath, containerRef]);

  // Function to toggle animation path
  const toggleAnimation = () => {
    const newPath = isSun ? '/night.json' : '/light.json'; // Toggle between sun and moon
    setAnimationPath(newPath);
    localStorage.setItem('Mode', JSON.stringify(isSun));
    setIsSun((prev) => !prev); // Update the state
  };

  useEffect(() => {
    const savedNightMode = localStorage.getItem('Mode');
    if (savedNightMode !== null) {
      const isNightMode = JSON.parse(savedNightMode);
      setIsSun(!isNightMode); // Set the state based on saved value
      setAnimationPath(isNightMode ? '/night.json' : '/light.json');
    }
  }, []);

  return { toggleAnimation };
};

export default useLottieAnimation;