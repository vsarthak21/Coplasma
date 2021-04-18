import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cls from "../Donor/Donor.module.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // boxShadow: "1px 1px 1px #000"
    margin: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Donor = (prop) => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    Tabletop.init({
      key: "1plur_S2H_g7YljIDBr6fZ7l7a-IAAaXR8eZtsTOsa_o",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
  console.log(data);

  return (
    <>
      <div className={cls.cards}>
        { data ? data.map((x) => {
          return (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {x["Name of The Donor"] + ", " + x["Blood Group of the Donor"]}
                </Typography>
                <Typography variant="h6" component="h3">
                  <h4>{x["Contact Number"]}</h4>
                </Typography>

              </CardContent>
            </Card>
          );
        })
        :<h3 style={{color:"maroon"}}>No donor available currently</h3>}
      </div>
    </>
  );
};

export default Donor;
