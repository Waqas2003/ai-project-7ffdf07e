import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Ecommerce Website</Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/cart" color="inherit">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;