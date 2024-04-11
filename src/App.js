import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home, About, Services, Team, Contact } from './components/Pages';
import Development from "./components/Courses";
import Admin from './components/Admin';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <AppComponent />

    </Router>
  )
}




const AppComponent = () => {
  return (
    <>

      <main>
        {/* <Navbar backgroundColor={backgroundColor()} color={color()} boxShadow={boxShadow()} /> */}
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/team' element={<Team />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/development' element={<Development />}></Route>
            <Route path='/signup' element={<Registration />}></Route>
            <Route path='/loginpage' element={<Login />}></Route>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </main>

      <Routes>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Admin />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App;