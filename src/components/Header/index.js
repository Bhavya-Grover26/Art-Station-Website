import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PrimaryNav, MenuLink, Menu, Hamburger, Logo, PostButton, SearchBar } from './NavElement';
import {AiFillMessage} from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import logoImg from './Brush Strokes.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <PrimaryNav>
        <Link to="/">
          <Logo onClick={handleClickLogo} src={logoImg} alt="Logo" />
        </Link>

        <SearchBar
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          
        />

        <Link to="/createpost">
          <PostButton>Post</PostButton>
        </Link>

        <Menu>
        <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
          <MenuLink to="/illustration" activeStyle>
            <BsFillPersonFill />
          </MenuLink>
          <MenuLink to="/notifications" activeStyle>
            <FaBell />
          </MenuLink>
          <MenuLink to="/message" activeStyle>
            <AiFillMessage />
        </MenuLink>
        
        </Menu>
      </PrimaryNav>
    </>
  );
};

export default Navbar;
