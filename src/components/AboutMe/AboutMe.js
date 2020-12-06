import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import "./AboutMe.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    marginBottom: 50,
    borderRadius: "1.25rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  chip: {
    margin: "1rem"
  },

  cardContent: {
    textAlign: 'center'
  },

  cardIcons: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className="about-me-container">
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            About Me
          </Typography>

          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            convallis, nibh et commodo consequat, lectus dolor vulputate lectus,
            id laoreet elit erat eget nunc. Donec interdum, eros vitae interdum
            rutrum, sem leo iaculis lacus, ut placerat massa urna quis nulla.
            Quisque eget finibus lacus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            Quotes
          </Typography>
          <Typography variant="body2" component="p">
            Why say lot words when few words do trick
          </Typography>
        </CardContent>
        <CardActions className={classes.cardIcons}>
          <Button href="http://www.github.com" size="small">
            <TwitterIcon />
          </Button>
          <Button href="http://www.twitter.com" size="small">
            <FacebookIcon />
          </Button>
          <Button href="http://www.linkedin.com" size="small">
            <InstagramIcon />
          </Button>
        </CardActions>
      </Card>

      <div className="role-chips">
        <Chip
          className={classes.chip}
          label="owner"
          color="primary"
          avatar={<Avatar>O</Avatar>}
        />
        <Chip
          className={classes.chip}
          disabled
          label="admin"
          color="secondary"
          avatar={<Avatar>A</Avatar>}
        />
        <Chip
          className={classes.chip}
          label="moderator"
          color="default"
          avatar={<Avatar>M</Avatar>}
        />
      </div>
    </div>
  );
};

export default AboutMe;
