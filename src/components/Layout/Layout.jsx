import { NavLink, Outlet } from "react-router-dom";
import './layout.scss';

const setActive = ({isActive}) => isActive ? 'header--link-active' : '';

const Layout = () => {
   return(
      <>
      <header className="header container">
         <NavLink to="/" className={setActive}>Home</NavLink>
         <NavLink to="/about" className={setActive}>About</NavLink>
         <NavLink to="/users" className={setActive}>Users</NavLink>
      </header>

      <main className="container">
         <Outlet />
      </main>
      
      <footer className="container">2023</footer>
      </>
   )
}

export {Layout};