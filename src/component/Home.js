import React from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css';
import Footer from './Footer'
import {Link} from "react-router-dom";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent} from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import 'react-vertical-timeline-component/style.min.css';
import battery from "../images/battery replacement.jpg"
import partner from "../images/partner.jpg"
import service from "../images/car service.jpeg"


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Copyright(props) {
  return (
    <p style={{color:"white",marginTop:"20px"}} align="center" {...props}>
      {'Copyright © '}
      <Link to="/login" style={{textDecoration:"none", color:"red"}}>
        Buckle-Up
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

function Home() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return(
      <div>
          <Navbar/>
          <div className='rectangle'>  </div>
          <div className='assurance' style={{display:"flex" , backgroundColor:"#5195e1", width:"80%", marginLeft:"10%",marginTop:"2%",  borderRadius:"10px"}}>
            <div className='logo' style={{display:"flex", justifyContent:"center", alignItems:"center", width:"20%"}}>
              <AssuredWorkloadIcon style={{fontSize:"80px", color:"white"}}/>
            </div>
            <div className='assurance-content' style={{color:"white", width:"50%"}}> 
              <h1 style={{marginTop:"15px"}}>Buckle-Up Assurance Program</h1>
              <ul>
                <li style={{marginTop:"15px"}}>
                  Upto Rs.25000 insurance protection with every service request
                </li>
                <li style={{marginTop:"15px"}}>
                  Program Protects users against damage caused during free pickup and delivery of car.
                </li>
              </ul>
              <Button  onClick={handleClickOpen}><h4 style={{marginTop:"15px", marginBottom:"15px", color:"red"}}>Know More</h4></Button>
              <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" fullWidth={true}>
                <DialogTitle id="responsive-dialog-title">
                  {"Buckle-Up Guarantee"}
                </DialogTitle>
                <hr></hr>
                <hr></hr>
                <DialogContent>
                <DialogContentText style={{marginTop:"8px", marginBottom:"8px"}}>
                  
                    We adhere to our operational excellence commitment towards delivering exceptional customer experience. Everytime you opt for a Free Pickup and Drop with Buckle-Up, your car is covered under Buckle-Up Assurance Program
                  
                </DialogContentText>
                <hr></hr>
                <DialogContentText  style={{marginTop:"8px", marginBottom:"8px"}}>
                  
                    With Buckle-Up Assurance Program, each customer is protected against any damages caused during the pickuo and delivery of their car by Buckle-Up Executive upto a Maximum of Rs.25000
                  
                </DialogContentText>
                <hr></hr>
                <DialogContentText  style={{marginTop:"8px", marginBottom:"8px"}}>
                  
                 This is valid only for service paid online. 
                
              </DialogContentText>
              <hr></hr>
              <DialogContentText  style={{marginTop:"8px", marginBottom:"8px"}}>
                  
                 Buckle-Up Assurance program is not valid on walkins and cancelled orders
                 
               </DialogContentText>
                </DialogContent>
                <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Done
          </Button>
        </DialogActions>
              </Dialog>
          </div>
      </div>
      <div className='rectangle2'>  </div>
      <div style={{marginLeft:"10%"}}>
      <h1>Buckle-Up Provides</h1>
      <h4>Hand Picked Service for your Valuable Car</h4>
      </div>
      <div className='features-card' style={{display:"flex", marginLeft:"10%",marginRight:"10%",marginTop:"3%", justifyContent:"space-between", overflow:"hidden"}}>
        <div >
        <Button className="container1">
          <Card className="container">
            <img className='poster' src={battery} alt="battery"/>
            <CardContent style={{display:"flex", justifyContent:"center"}}>
              <h3>Battery Replacement</h3>
            </CardContent>
          </Card>
        </Button>
        </div>
        <div>
        <Button className="container1">
          <Card className="container">
          <img className='poster' src={service} alt="service"/>
          <CardContent style={{display:"flex", justifyContent:"center"}}>
              <h3>Services</h3>
            </CardContent>
          </Card>
        </Button>
        </div>
        <div>
        <Button className="container1">
          <Card className="container">
          <img className='poster' src={partner} alt="partner"/>
          <CardContent style={{display:"flex", justifyContent:"center"}}>
              <h3>Become Partner</h3>
            </CardContent>
          </Card>
        </Button>
        </div>
      </div>
      <div className='rectangle2'>  </div>
      <div>
        <h1 style={{marginLeft:"10%"}}>How Buckle-Up works?</h1>
      </div>
      <div >
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <h2 style={{color:"white"}}>Select the Perfect Car Service</h2>
            <h4 style={{marginTop:"1%", fontWeight:"lighter", marginLeft:"1%"}}>From Buckle-Up's Broad portfolio of Service</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <h2 style={{color:"white"}}>Schedule Free DoorStep PickUp</h2>
            <h4 style={{marginTop:"1%", fontWeight:"lighter", marginLeft:"1%"}}>we offer free pickup and drop for all services booked</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <h2 style={{color:"white"}}>Track Your Car Service Real-Time</h2>
            <h4 style={{marginTop:"1%", fontWeight:"lighter", marginLeft:"1%"}}>we will take careof everything from here</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: '#5195e1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: '#5195e1', color: '#fff' }}>
            <h2 style={{color:"white"}}>Earn While We Service</h2>
            <h4 style={{marginTop:"1%", fontWeight:"lighter", marginLeft:"1%"}}>spread the word! You get Rs.650. your friends get Rs.650 </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      
      </div>
      <div className='rectangle2'>  </div>
      <div>
        <h1 style={{marginLeft:"10%"}}>Buckle-Up Benefits</h1>
      </div>
      <div style={{marginLeft:"10%",display:"grid", gridTemplateColumns: "45% 45%", marginTop:"5%" , marginBottom:"5%"}}>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <DirectionsCarIcon style={{fontSize:"50px", color:"red"}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",  justifyContent:"center", alignItems:"center"}}>
            <h1>Free Doorstep Pickup & Drop</h1>
            <h3 style={{fontWeight:"lighter"}}>No More unnecessary Workshops Visit!</h3>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", marginLeft:"10%"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <DirectionsCarIcon style={{fontSize:"50px", color:"red"}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",  justifyContent:"center", alignItems:"center"}}>
            <h1>Upfront & Competitive Pricing</h1>
            <h3 style={{fontWeight:"lighter"}}>Save Upto 40% on your Car Service</h3>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <DirectionsCarIcon style={{fontSize:"50px", color:"red"}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column",  justifyContent:"center", alignItems:"center",marginTop:"5%"}}>
            <h1>Network Warranty On Service</h1>
            <h3 style={{fontWeight:"lighter"}}>1/1000Kms unconditional warranty on car service</h3>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", marginLeft:"6%"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <DirectionsCarIcon style={{fontSize:"50px", color:"red"}}/>
          </div>
          <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",marginTop:"5%"}}>
            <h1>100% Genuine Spare Parts  </h1>
            <h3 style={{fontWeight:"lighter"}}>Only OEM/OES spare parts used. Quality Assured!</h3>
          </div>
        </div>
      </div>
      <div className='rectangle2'>  </div>
      <div style={{marginLeft:"10%"}}>
        <h1>Common Car Service Questions in Madurai </h1>
      </div>
      <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"2%"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontWeight:"bold"}}>What if i have any issues with my car service with Buckle-Up</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Worry not! At Buckle-UP, we provide a network warranty of 1month or 1000kms on every type of car service you book or purchase
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{fontWeight:"bold"}}>Where Can I Book My Car Service With Buckle-Up In Madurai</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Book directly from our website. Want a more Experience? Call or WhatsApp on 900000000
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{fontWeight:"bold"}}>Can I choose a workshop in Madurai of my choice for my car service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Every car is assigned a workshop based on various factors like serviceability,spare parts availability,location and then some. Rest assured, Your car will get the best service in Mdurai
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    <div className='rectangle2'>  </div>
    <div>
    <Footer style={{position:'relative'}} >
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/">Battery Replacement</Footer.Link>
                    <Footer.Link href="#">Tyre Replacement</Footer.Link>
                    <Footer.Link href="#">General Service</Footer.Link>
                    <Footer.Link href="#">Car Detailing</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Madurai</Footer.Link>
                    <Footer.Link href="#">Trichy</Footer.Link>
                    <Footer.Link href="#">Dindigul</Footer.Link>
                    <Footer.Link href="#">Karur</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><i className="fab fa-facebook" style={{marginRight:"5px"}}/>Facebook</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-instagram" style={{marginRight:"5px"}}/>Instagram</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-youtube" style={{marginRight:"5px"}}/>Youtube</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-twitter" style={{marginRight:"5px"}}/>Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <Copyright sx={{ mt: 5 }} />
        </Footer>
    </div>
      </div>
  )
}

export default Home;

//#5195e1//