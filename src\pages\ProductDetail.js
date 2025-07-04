import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { products } from '../data';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="body1">${product.price}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;