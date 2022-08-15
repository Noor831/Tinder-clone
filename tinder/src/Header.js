import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header" >
             <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
    <Link to ="/">
            <img className="header__logo"
      src="https://cdn-icons.flaticon.com/png/512/4423/premium/4423669.png?token=exp=1659616372~hmac=1389ca94e7e9502cdda2522f07c69da5"
      alt="tinder logo" />
      </Link>
        <IconButton>
            <ForumIcon className="header__icon"  fontSize="large"/>
        </IconButton>
        </div>
    );
}

export default Header;