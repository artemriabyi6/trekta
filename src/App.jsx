import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <main><Outlet /></main>;
}

export default App;

