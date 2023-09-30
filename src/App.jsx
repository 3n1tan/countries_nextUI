import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Layout from './app/pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryCard from './components/CountryCard'

function App() {

  return (
    <NextUIProvider >
      <BrowserRouter>
        <Layout />
        <CountryCard />
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
