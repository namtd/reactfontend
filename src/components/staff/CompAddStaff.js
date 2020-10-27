import React, { useState, useEffect } from 'react';
import {
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch, useSelector } from "react-redux";
import { editStaff } from '../../redux/actions/actStaff';

const useStyles = makeStyles({
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 2,
  },
});

function CompAddStaff(props) {
  const { staffId } = props;
  const liststaff = useSelector(state => state.redStaff);
  const editstaff = useSelector(state => state.editStaff);
  const dispatch = useDispatch();
  useEffect(() => {
    if (editstaff === '' && staffId) {
      dispatch(editStaff(liststaff, staffId));
    }
  });
  const classes = useStyles();
  
  const handleSaveExcel = () => {
  }
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
            value={editstaff ?  editstaff.drawernumber: ""}
            label="Read Only"
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
            value={editstaff ?  editstaff.username: ""}

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
            value={editstaff ?  editstaff.cardnumber: ""}

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
            value={editstaff ?  editstaff.dept: ""}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              fullWidth
              value={editstaff ?  editstaff.gender: ""}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
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
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button onClick={handleSaveExcel} variant="contained"
            color="primary"
            className={classes.button} style={{ marginRight: 15 }}>Save Excel</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CompAddStaff;