import './index.css';
import { Header, Footer } from './components/layouts';
import {
  StarsCanvas,
  Home,
  Contact,
  Resume,
  About,
  Projects,
} from './components';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
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
