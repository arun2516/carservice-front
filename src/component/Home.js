import React from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Paper } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import battery from "../images/battery replacement.jpg"
import partner from "../images/partner.jpg"
import service from "../images/car service.jpeg"

function Home() {

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
      </div>
  )
}

export default Home;

//#5195e1//