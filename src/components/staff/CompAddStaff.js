import React from 'react';
import { connect } from 'react-redux';
import { 
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';
import { 
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';


import { addStaff } from '../../redux/actions/actStaff';

const useStyles = makeStyles({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 2,
  },
});

const mapStateToProps = state => ({
  staffInfo: state,
})

const mapDispatchToProps = dispatch => ({
  addStaff: staffInfo => dispatch(addStaff(staffInfo))
})

function CompAddStaff() {

  const classes = useStyles();
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="drawernumber"
            name="drawernumber"
            label="Drawer Number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cardnumber"
            name="cardnumber"
            label="Card Number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dept"
            name="dept"
            label="Department"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          fullWidth
          //TODO
          //value={age}
          //onChange={handleChange}
        >
          <MenuItem value={10}>undefined</MenuItem>
          <MenuItem value={20}>Male</MenuItem>
          <MenuItem value={30}>Famale</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          //TODO
          //value={selectedDate}
          //onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date register drawer"
          //TODO
          //value={selectedDate}
          //onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CompAddStaff);