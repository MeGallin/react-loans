import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prev) => (prev = !prev));
  };
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

        <div className="dropdown-wrapper">
          <span onClick={handleDropDown} onMouseEnter={handleDropDown}>
            Financial
          </span>
          {showDropDown ? (
            <>
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/amort"
                data-cy="header-amort-link"
                onClick={handleDropDown}
              >
                Amort Schedule
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/capital-appreciation"
                data-cy="header-capital-appreciation-link"
                onClick={handleDropDown}
              >
                Capital Appreciation Schedule
              </NavLink>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
