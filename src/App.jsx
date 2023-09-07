import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/Index'
import './assets/css/style.css'
import IndexMain from './pages/Main'
import Error404 from './pages/Error/Error404'
import Profile from './pages/Main/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />

        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<IndexMain />} />
          <Route path=":username" element={ <Profile /> } />
        </Route>

        
        {/* <Route path="/Error/">
          <Route path="404" element={<Error404 />} />
        </Route> */}

        {/* 404 page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
