import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Multistep from './Components/Form';
import FindCourses from './Components/FindCourses';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Router>
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/form' element={<Multistep />} />
          <Route path='/findcourses' element={<FindCourses />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
    </Router>
  );
}

export default App;
