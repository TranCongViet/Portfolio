import './index.css';
import { useState, useEffect } from 'react';
import { Header, Footer } from './layouts';
import { Home, Contact, Resume, About, Projects } from './sections';
import { StarsCanvas } from './components';
import { ToastContainer } from 'react-toastify';
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#030014] flex justify-center z-50">
        <div
          className="flex flex-col items-center justify-center
        "
        >
          <HashLoader
            color="#c770f0"
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="text-purple mt-6 text-xl font-semibold animate-pulse">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <StarsCanvas />
        <ToastContainer />
        <Header />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
