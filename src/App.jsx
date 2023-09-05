import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/Index'
import './assets/css/style.css'
import IndexMain from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />

        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<IndexMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
