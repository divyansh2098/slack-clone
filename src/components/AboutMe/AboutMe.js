import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import "./AboutMe.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    margin: "auto",
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
  }
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
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
        <CardActions>
          <Button href="http://www.github.com" size="small">
            VIEW MY GITHUB
          </Button>
          <Button href="http://www.twitter.com" size="small">
            VIEW MY twitter
          </Button>
          <Button href="http://www.linkedin.com" size="small">
            VIEW MY LINKEDIN
          </Button>
          <Button href="http://www.facebook.com" size="small">
            VIEW MY FACEBOOK
          </Button>
        </CardActions>
      </Card>

      <br />
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
    </React.Fragment>
  );
};

export default AboutMe;
