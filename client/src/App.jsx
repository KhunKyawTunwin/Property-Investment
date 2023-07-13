import { Route, Routes } from "react-router-dom";

import "./App.css";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { CTA, Brand, Navbar, SignInForm, SignUpForm } from "./components";
import Authentication from "./pages/authentication/Authenticaltion";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <SignUpForm />
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <SignInForm />
    </div>
  );
}

export default App;
