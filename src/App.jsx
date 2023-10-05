import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle';

function App() {

  return (
    <NextUIProvider >
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>

            <Route path='/' element={<Home />} />
            <Route path='/countries' element={<Countries />}/>
            <Route path='/countries/:single' element={<CountriesSingle />}/>

            </Route>
          
        </Routes>

      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
