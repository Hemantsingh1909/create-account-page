import './App.css'
import Login from "./Pages/Login"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='grid justify-items-end'>
        <ModeToggle/>
        </div>
        <div className='grid grid-cols-1 justify-content-center'>
          <div className='flex items-center justify-center'>
            <Login/>
          </div>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
