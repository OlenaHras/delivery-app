import { TextField, Button, Stack, Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { FormWrapper } from './UserForm.styled';
import { useState } from 'react';

const UserForm = ({ handleOrderButton }) => {
  const [user, setUser] = useState(null);

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setUser({
      name: form.elements.name.value,
      address: form.elements.address.value,
      phone: form.elements.phone.value,
      city: form.elements.city.value,
    });
    handleOrderButton(user);
    form.reset();
  };
  return (
    <FormWrapper>
      <Typography variant="h5" gutterBottom>
        Delivery Address
      </Typography>
      <Grid container spacing={2}>
        <Stack
          onSubmit={handleRegistration}
          component="form"
          sx={{
            width: '30ch',
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              type="text"
              name="name"
              placeholder="Alex Smith"
              required
              label="Name"
              id="outlined-disabled"
              size="small"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="address"
              placeholder=""
              required
              label="Address"
              id="outlined-disabled"
              size="small"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="phone"
              placeholder=""
              required
              label="Phone number"
              id="outlined-disabled"
              size="small"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="city"
              placeholder=""
              required
              label="City"
              id="outlined-disabled"
              size="small"
              margin="normal"
            />
          </Grid>
          <Box textAlign="right" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Order
            </Button>
          </Box>
        </Stack>
      </Grid>
    </FormWrapper>
  );
};

export default UserForm;
