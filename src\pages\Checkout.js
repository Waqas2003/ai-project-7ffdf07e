import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { cartItems } from '../store/cartSlice';

function Checkout() {
  const cart = useSelector(cartItems);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Order Summary</Typography>
        </Grid>
        {cart.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body1">${item.price}</Typography>
            <Typography variant="body1">Quantity: {item.quantity}</Typography>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h5">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Typography>
          <Button variant="contained" color="primary">
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;