import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function Footer() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Copyright 2023 Ecommerce Website</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">All rights reserved.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;