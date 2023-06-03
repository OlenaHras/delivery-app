import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Stack, Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { FormWrapper } from './UserForm.styled';

const UserForm = ({ handleOrderButton }) => {
  const handleOrder = e => {
    e.preventDefault();
    const form = e.currentTarget;
    toast.success(
      `Thanks ${form.elements.name.value} for order! The best meal for you will be delivered as soon as possible`
    );
    handleOrderButton({
      name: form.elements.name.value,
      address: form.elements.address.value,
      phone: form.elements.phone.value,
      city: form.elements.city.value,
    });
    form.reset();
  };
  return (
    <FormWrapper>
      <Typography variant="h5" gutterBottom>
        Delivery Address
      </Typography>
      <Grid container spacing={2}>
        <Stack
          onSubmit={handleOrder}
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
      <ToastContainer />
    </FormWrapper>
  );
};

export default UserForm;
