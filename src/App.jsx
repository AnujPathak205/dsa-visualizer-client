import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes'
import { useEffect, useState} from "react";
import { useMatch } from 'react-router-dom';

function App() {
    const [dark, setDark] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });

    const match = useMatch("/topics/data-structures/:topicId/visual");

    useEffect(() => {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [dark]);

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      {!match && <Navbar dark={dark} setDark={setDark}/>}
      <AppRoutes />
      {!match && <Footer />}
    </div>
  )
}

export default App
