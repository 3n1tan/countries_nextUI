import { NextUIProvider } from '@nextui-org/react'
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import { auth } from './auth/fireBase';
import { useAuthState } from 'react-firebase-hooks/auth';



function App() {
  const [user] = useAuthState(auth)

  return (
    <NextUIProvider >
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>

              <Route element={<ProtectedRoute user={user} />}>
                <Route path='/countries' element={<Countries />}/>
                <Route path='/countries/:single' element={<CountriesSingle />}/>
              </Route>
            </Route>          
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
