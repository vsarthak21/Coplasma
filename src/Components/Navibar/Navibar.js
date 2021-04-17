import classes from "../Navibar/Navbar.module.css";
import Footerx from "../Footerx/Footerx"
import { grey } from "@material-ui/core/colors";
import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as Logo } from "../../Images/Plasma.svg";
import hospital from "../../Images/hospital.png";
import help from "../../Images/help.png";

const Navibar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const offset = window.matchMedia("(max-width: 600px)").matches ? -300 : -75;
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <div className={classes.brand}>
        <Logo></Logo>
        <h1 style={{ textShadow: "2px 2px 2px #000000" }}>
          <span style={{ color: grey }}>Co-</span>
          <span style={{ color: "#E1AD01" }}>PLASMA</span>
        </h1>
        <h6 className={classes.blinkMe}>Delhi-NCR</h6>
      </div>
      <div className={classes.heading}>
        <h1>Donate Plasma, Save Life!</h1>
        <h4>Plasma from recovered COVID-19 patients can help save lives</h4>
        <Button className={classes.buttonRN} onClick={executeScroll}>
          Register Now
        </Button>
      </div>

      <div className={classes.situation}>
        <img width={140} className={classes.hospImage} src={hospital}></img>
        <div className={classes.hospText}>
          <h2>Current Situation</h2>
          <p>
            COVID-19 has been on a rampage in our city since the past 1 year.
            From less than 10 cases in February 2020, we are now having more
            than 20,0000 cases. The good news is that we have been able to
            recover more than 90% COVID-19 patients. These patients can help the
            COVID-19 patients by donating their plasma, as a possible cure. With
            the vaccination drive underway across the country, there are still a
            majority of population that still needs to be vaccinated. For this
            majority, plasma therapy has been developed as an experimental cure
            for the COVID-19 patients. Plasma therapy has been helping a lot of
            families recover their loved ones from COVID-19.
          </p>
          <p>
            <b>
              But since there are very few plasma donors currently, a lot of
              people who can be saved using this therapy are not getting the
              required treatment.
            </b>
          </p>
        </div>
      </div>

      <div className={classes.wedo}>
        <div className={classes.helpText}>
          <h2>What we do</h2>
          <p>
            Donors and patients both register their information with us. This
            information pertains to name, contact number, blood group and
            location. This helps us in finding the best match for the patients.
            Since time is of extreme importance in these situations, we do not
            act as intermediaries between the patient and the donor. Once both
            the parties have a match, they can directly contact each other.
            <br />
            <b>
              Please note: Plasma therapy is an experimental COVID-19 therapy.
              Before you register, please consult your doctor if this is
              required. Only patients with a case sheet from the doctor on duty
              will be matched.
            </b>
          </p>
        </div>
        <img width={160} className={classes.helpImage} src={help}></img>
      </div>

      <div className={classes.register} ref={myRef}>
        <div className={classes.registerCard}>
          <h2>Want to Donate?</h2>
          <h5>
            Recoverd pateints of Covid-19 with <br /> negative RTPCR report can
            donate
          </h5>
          <Button className={classes.buttonRN} onClick={()=>{
            window.open("https://forms.gle/ENNfozYChwQaaSNZ6")
          }}>Register as Donor</Button>{" "}
        </div>
        <div className={classes.registerCard}>
          <h2>Need Plasma?</h2>
          <h5>
            If you are looking out for a donor, <br /> register here with
            patient's details
          </h5>
          <Button className={classes.buttonRN} onClick={()=>{
            window.open("https://forms.gle/zRzgXPJo2mw2fgrx7")
          }}>Register a Patient</Button>
        </div>
      </div>

      <div className={classes.faqs}>
        <div>
          <h1>
            Usefull links and <br /> information
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.fda.gov/media/136470/download">
                Investigational COVID-19 Convalescent Plasma - FDA
              </a>
            </li>
            <li>
              <a href="https://nybloodcenter.org/donate-blood/covid-19-and-blood-donation-copy/convalescent-plasma-faq-health-care-providers/">
                Convalescent Plasma - FAQ for Health Care Providers
              </a>
            </li>
            <li>
              <a href="https://www.cityspidey.com/news/13401/delhi-based-ngo-hopes-to-save-covid-patients-with-plasma-therapy-again">
                Delhi-based NGO hopes to save Covid patients with plasma therapy
                again
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footerx></Footerx>
    </>
  );
};

export default Navibar;
