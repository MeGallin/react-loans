import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
          data-cy="header-home-link"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/about"
          data-cy="header-about-link"
        >
          About
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/financial"
          data-cy="header-financial-link"
        >
          Financial
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderComponent;
