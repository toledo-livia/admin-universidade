
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Userlist from './pages/Users'
import Portal from './pages/Portal'
import UserCreate from './pages/Register'

import './styles/bootstrap.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/portal' element={<Portal />}>
          <Route path='alunos' element={<Userlist />} />
          <Route path='create-user' element={<UserCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
