import './styles/App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className='bg-slate-50 dark:bg-slate-900'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
