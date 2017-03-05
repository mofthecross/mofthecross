import React from 'react';
import navigationLinks from '../data/navigationLinks';
import { Link, IndexLink } from 'react-router';

 const Header = () => {
    return (
      <div className="header-wrapper">
        <header>
          <nav className="header__nav">
            <ul>
              {
                navigationLinks.filter( link => !link.index).map(link => (
                  <li key={link.label}>
                    <Link to={link.link}>
                      {link.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
      </div>
  )
}

export default Header;
