import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import memories_image from "./images/memories-image.jpg";
import "./styles.css";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <section>
      <Container maxWidth="lg">
        <AppBar
          className={classes.appBar}
          position="static"
          color="inherit"
          id="navbar"
        >
          <Typography
            className={classes.heading}
            variant="h2"
            align="center"
            id="navbar-headings"
          >
            <span id="heading-head">RECUERDOS</span>
            <p id="navbar-subheading"></p>
          </Typography>
          <img
            className={classes.image}
            id="logo"
            src={memories}
            alt="icon"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <AppFooter />
    </section>
  );
};
function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-intro">
        <img src={memories_image} alt="" className="footer-image"></img>
      </div>
      <div className="footer-text">
        <p className="footer-text-head">RECUERDOS</p>
        <p className="footer-text-subhead">Blog for the students of IIITDMK.</p>
        <p className="footer-text-subhead">
          (A place to safekeep one's memories.)
        </p>
      </div>
      <div className="contact-us">
        <p className="contact-us-text">CONTACT US</p>
        <p className="footer-text-subhead1">119me0006@iiitk.ac.in</p>
        <p className="footer-text-subhead1">
          puneetpriyadarshi665526@gmail.com
        </p>
        <p className="footer-text-subhead1">
          <a href="https://github.com/puneetpriyadarshi">GITHUB</a>
        </p>
        <p className="footer-text-subhead1">
          <a href="www.linkedin.com/in/puneet-priyadarshi-a4a624167">
            LINKEDIN
          </a>
        </p>
      </div>
      <div className="footer-pic">
        <p className="developers">DEVELOPED BY :</p>
        <p className="JOGINDER">PUNEET PRIYADARSHI</p>
        <p className="JOGINDER">PRATIK KUMAR</p>
      </div>
    </footer>
  );
}
export default App;
