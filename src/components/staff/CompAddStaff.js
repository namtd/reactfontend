import React, { useState, useEffect } from 'react';
import {
  TextField,
  Typography,
  Grid,
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
import { editStaff, updateStaff } from '../../redux/actions/actStaff';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
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
  const [run, setRun] = useState(true);
  const liststaff = useSelector(state => state.redStaff);
  const editstaff = useSelector(state => state.editStaff);
  const dispatch = useDispatch();
  const [staff, setStaff] = useState({
    "drawernumber": "",
    "username": "",
    "cardnumber": "",
    "dept": "",
    "gender": "",
    "startDate": new Date(),
    "presenter": "",
    "presenterCardNumber": "",
    "bp": ""
  })
  useEffect(() => {
    if (staffId && staff.drawernumber === "") {
      dispatch(editStaff(liststaff, staffId));
    }
  });
  if (editstaff.drawernumber !== undefined && run === true) {
    setRun(false);
    setStaff({
      "drawernumber": editstaff.drawernumber,
      "username": editstaff.username,
      "cardnumber": editstaff.cardnumber,
      "dept": editstaff.dept,
      "gender": editstaff.gender,
      "startDate": editstaff.startDate,
      "presenter": "",
      "presenterCardNumber": "",
      "bp": ""
    })
  }
  const classes = useStyles();
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }
  const handleSaveExcel = () => {
    if (staff.drawernumber !== "" && staff.username !== "" && staff.cardnumber !== "" && staff.dept !== "" && staff.gender !== "" && staff.startDate !== "") {
      dispatch(updateStaff(liststaff, staff));
      var fileName = "testfile";
      exportToCSV(liststaff, fileName);
    }
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
            value={staff.drawernumber}
            InputProps={{
              readOnly: true,
            }}
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
            value={staff.username}
            onChange={e => {
              const val = e.target.value;
              setStaff(prevState => {
                return { ...prevState, username: val }
              });
            }}
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
            value={staff.cardnumber}
            onChange={e => {
              const val = e.target.value;
              setStaff(prevState => {
                return { ...prevState, cardnumber: val }
              });
            }}
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
            value={staff.dept}
            onChange={e => {
              const val = e.target.value;
              setStaff(prevState => {
                return { ...prevState, dept: val }
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              fullWidth
              value={staff.gender}
              onChange={e => {
                const val = e.target.value;
                setStaff(prevState => {
                  return { ...prevState, gender: val }
                });
              }}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              name="startDate"
              label="start Date"
              format="MM/dd/yyyy"
              value={staff.startDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              onChange={e => {
                const val = e;
                setStaff(prevState => {
                  return { ...prevState, startDate: val }
                });
              }}
            />
          </MuiPickersUtilsProvider>

        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button onClick={handleSaveExcel} variant="contained"
            color="primary"
            className={classes.button} style={{ marginBottom: 30 }}>Save Excel</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CompAddStaff;