import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App' 
createRoot(document.getElementById('root')).render(<BrowserRouter basename="/"><App/></BrowserRouter>)


// import { createRoot } from 'react-dom'
// import App from './App' 
// const root = document.getElementById('root');
// createRoot(root).render(<App />);
