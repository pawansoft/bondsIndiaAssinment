import React from "react";
import "./deal_of_the_day.scss";
import HandSake from "../../assets/handshake.png";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import MobileStepper from "@material-ui/core/MobileStepper";
import IndibullLogo from "../../assets/indibulllogo.png";
import Group from "../../assets/Group.png";

const DealOfTheDay = () => {
  return (
    <div className="deal-of-the-day-parent-container">
      <div className="deal-of-the-day-header">
        <img src={HandSake} />
        <Typography className="title">Deal of the day</Typography>

        <MobileStepper
          variant="dots"
          color="white"
          steps={3}
          position="static"
          activeStep={1}
          className="stepers"
        />
      </div>
      <div>
        <Card className="deal-details-card">
          <div className="card-header">
            <Typography className="growth">
              12.50% IBHL <Typography className="growth">Jun 2032</Typography>
            </Typography>

            <img style={{ height: "44px", width: "99px" }} src={IndibullLogo} />
          </div>
          <div className="card-header">
            <Typography className="priceHead">
              Price <Typography className="price">₹ 11,96,068.59</Typography>
            </Typography>

            <Typography className="YealdHead">
              Yield <Typography className="yelid">14.2%</Typography>
            </Typography>
          </div>

          <div className="card-header">
            <img style={{ height: "30px", width: "30px" }} src={Group} />

            <Button variant="outlined" style = {{borderRadius : '25px'}}>Buy</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DealOfTheDay;
