import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// Styled component for the logo
export const Logo = styled.img`
  height: 530px;
  margin-top: -190px;
  margin-left: -220px;
`

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: linear-gradient(to right, #EDF2FB, #F8D8E9);
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`

export const SearchBar = styled.input`
  width: 400px;
  height: 12px;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 33px;
  margin-left: -240px;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const PostButton = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(to right, #FFF, #FFF);
  font-size: 1rem;
  margin-top: 35px;
  margin-left: -120px;
  margin-right: 60px;
  cursor: pointer;
  font-family: "Times New Roman", Times, serif;
  color: black;
  
`

export const MenuLink = styled(NavLink)`
  color: #000;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end; /* Align items to the right */
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  color: black;
  font-size: 20px;
  padding: 0 0.5rem;
  margin-right: -120px;
  height: 100%;
  &.active {
    color: #000000;
  }
  svg {
    margin-right: 0.5rem;
    font-size: 2rem; /* Increase icon size */
  }
`

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
  font-size: 2rem; /* Increase icon size */
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
