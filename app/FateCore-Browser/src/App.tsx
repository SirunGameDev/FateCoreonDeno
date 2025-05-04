import './App.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from './assets/react.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout.tsx";
import Start from "./pages/Start.tsx";
import CharacterSheet from "./pages/CharacterSheet.tsx";
import Account from "./pages/Account.tsx";
import NoPage from "./pages/NoPage.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/character" element={<CharacterSheet />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
