import React from 'react';
import './Guidelines.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
    root1: {
      minWidth: 275,
      maxWidth:600,
      margin: "auto",
      borderRadius:20
    },

    root2: {
        minWidth:275,
        maxWidth:900,
      margin: "auto",
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },

      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
    
    title: {
      fontSize: 14,
      
    },
    
  }));

const Guidelines = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <React.Fragment>
        <div className="container">
        <Card className={classes.root1}>
            <h2 className="title">Let's Get You Started</h2>
            <h4>
                this is your home page <br/>
                From here you can use all the functionalities
            </h4>
        </Card>        
        </div>
        
        <div className={classes.root2}>
        <Accordion style={{borderTopLeftRadius:20,borderTopRightRadius:20}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography style={{color: "#753a88",fontWeight:"bold"}} className={classes.heading}>Creating a Server</Typography>
          <Typography className={classes.secondaryHeading}>Learn how to create a server</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            explain the process of creating a server here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography style={{color: "#753a88",fontWeight:"bold"}} className={classes.heading}>Creating a Channel</Typography>
          <Typography className={classes.secondaryHeading}>
          Learn how to create a Channel
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          explain the process of creating a channel here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography style={{color: "#753a88",fontWeight:"bold"}} className={classes.heading}>Giving Roles</Typography>
          <Typography className={classes.secondaryHeading}>
            Learn how to give your Friends roles 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          explain the process of giving roles like moderator, admin, etc here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{borderBottomLeftRadius:20,borderBottomRightRadius:20}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography style={{color: "#753a88",fontWeight:"bold"}} className={classes.heading}>Banning Users</Typography>
          <Typography className={classes.secondaryHeading}>
            Learn how to ban users causing nuisance
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          explain the process of giving roles like moderator, admin, etc here
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </React.Fragment>
    );
}

export default Guidelines;