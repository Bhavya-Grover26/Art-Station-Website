import React,{useContext,useRef,useEffect,useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { PrimaryNav, MenuLink, Menu, Hamburger, Logo, PostButton, SearchBar } from './NavElement';
import {AiFillMessage} from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import logoImg from './Brush Strokes.png';
import {UserContext} from '../../App'
import M from 'materialize-css'

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return[
        <SearchBar
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={handleInputChange}
  />,
  <Link to="/createpost">
          <PostButton>Post</PostButton>
        </Link>,
  <Menu>
        
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
    
      ]
    }
    else{
      return[
        <Menu>
        <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
          </Menu>
      ]

    }
  }

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
        <Link to={state?"/":"/login"}>
          <Logo onClick={handleClickLogo} src={logoImg} alt="Logo" />
        </Link>

        {renderList()}
       
      </PrimaryNav>
    </>
  );
};

export default Navbar;
