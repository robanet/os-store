import React from 'react';
import Logo from "./Logo";
import { useSelector } from "react-redux";
import {Avatar, Button, Menu, MenuItem} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './style.scss';
import {useHistory} from "react-router";

const Header = () => {
  const user = useSelector((state) => state.event.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkProducts = () => {
    history.push('/');
    handleClose();
  };

  const linkCreateProduct = () => {
    history.push('/create-product');
    handleClose();
  }

  return (
    <div className="app-header">
      <div className="container">
        <div className="header-container">
          <div>
            <Logo />
            <Button onClick={handleClick} endIcon={<ExpandMoreIcon />}>
              Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={linkProducts}>Products</MenuItem>
              <MenuItem onClick={linkCreateProduct}>Create Product</MenuItem>
            </Menu>
          </div>
          <div className="user">
            <Avatar alt="User" src="/assets/avatar.jpg" />
            <p className="mb-0 text-capitalize">{user}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
