import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/index.css'
import TryComponent from './tryComponent.tsx'
import ErrorPage from './pages/Error/ErrorPage.tsx'
import Layout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<TryComponent />}/>
        </Route> 
      
        <Route
            path="*"
            element={
              <ErrorPage/>
            }
          />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
