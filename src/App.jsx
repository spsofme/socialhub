import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/Index'
import './assets/css/style.css'
import IndexMain from './pages/Main'
import Error404 from './pages/Error/Error404'
import Profile from './pages/Main/Profile'
import PostDetail from './pages/Main/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />

        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<IndexMain />} />
          <Route path='notifications' element={<h1>Notifications</h1>} />
          <Route path='messages' element={<h1>messages<Outlet /></h1>}>
            <Route index={true} element={<h1>messages index</h1>} />
            <Route path=':id' element={<h1>messages with id</h1>} />
          </Route>
          <Route path='search' element={<h1>Search</h1>} />
          <Route path=":username" element={ <Outlet /> }>
            <Route index={true} element={<Profile />} />
            <Route path="post/:id" element={<PostDetail />} />
          </Route>
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
