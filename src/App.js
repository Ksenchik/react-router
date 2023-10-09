import { Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout';

import './App.css';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';


function App() {
  return (
   <>      
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='users' element={<Users />} />
            <Route path='*' element={<Error />} />
         </Route>
      </Routes>
   </>
  );
};

export default App;
