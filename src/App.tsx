import { useEffect, useRef, useState } from 'react';

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-300px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header>This is the Header</header>
      <main ref={ref}>
        <div className={`child-one ${isIntersecting ? 'slide-in' : ''}`}>
          Child One
        </div>
        <div className={`child-two ${isIntersecting ? 'slide-in' : ''}`}>
          Child Two
        </div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
}

export default App;
