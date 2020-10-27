import React from 'react';
import {
    Typography,
    Link,
    CssBaseline,
    AppBar,
    Toolbar,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import CompAddStaff from '../components/staff/CompAddStaff';
import CompListStaff from '../components/staff/CompListStaff';
import {
  useParams,
} from "react-router-dom";
const useStyles = makeStyles(() => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: "auto",
        margin: "48px auto"
    },
    paper: {
      marginTop: 3,
      marginBottom: 3,
      padding: 2,
    },
    stepper: {
      padding: '30px 30px 30px 30px' ,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: 3,
      marginLeft: 1,
    },
  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const steps = ['Staff Register', 'Payment details', 'Review your order'];

  function getStepContent(step, staffId) {
    if(staffId)
    {
      step = 0;
    }
    switch (step) {
      case 0:
        return <CompAddStaff staffId={staffId} />;
       case 1:
         return <CompListStaff  />;
    //   case 2:
    //     return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  

function Managingstaff() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const { staffId } = useParams();

    return (
        <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
            
                {getStepContent(activeStep, staffId)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
         
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
    )
}

export default (Managingstaff);