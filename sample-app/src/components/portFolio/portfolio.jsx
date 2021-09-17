import React from "react";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CashIcon from "../../assets/moneyicon.png";
import Tabs from "@material-ui/core/Tabs";
import totalReturnIcon from "../../assets/totalReturnIcon.png";
import Tab from "@material-ui/core/Tab";
import CircleIcon from "../../assets/circleGroup.png";

import "./portfolio.scss";

const PortFolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Portfolio-parent-component">
      <Card className="portfolio-details-card">
        <Tabs
          className="protfolio-tabs"
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="My Portfolio" style={{ textTransform: "none" }} />
          <Tab label="My Orders" style={{ textTransform: "none" }} />
          <Tab label="My RFQs" style={{ textTransform: "none" }} />
          <Tab label="My Watchlist" style={{ textTransform: "none" }} />
        </Tabs>

        <div className="portfolio-detail-container">
          <div className="revenue-details">
            <div className="first-container">
              <img src={CashIcon} style={{ marginRight: "5px" }} />
              <Typography className="title">
                Current Value{" "}
                <Typography className="details">₹ 1,10,36,305.98 </Typography>
              </Typography>
            </div>

            <div className="first-container">
              <img src={totalReturnIcon} style={{ marginRight: "5px" }} />
              <Typography className="title">
                Current Value{" "}
                <Typography className="details">₹ 1,10,36,305.98 </Typography>
              </Typography>
            </div>
          </div>
          <div
            className="second-container"
            style={{ backgroundImage: `url(${CircleIcon})` }}
          >
            <Card style = {{marginTop : '50px', marginLeft : '180px', width :'150px', border: `1px solid #BDBDBD`, borderRadius :'5px'}}>
              <Typography style = {{fontSize : '14px'}}>Accrued Interest <Typography style = {{fontSize : '14px', fontWeight:'bold'}}>₹ 1,00,000.00</Typography></Typography>
            </Card>
            <Card style = {{marginTop : '20px', marginLeft : '10px', width :'150px', border: `1px solid #BDBDBD`, borderRadius :'5px'}}>
              <Typography style = {{fontSize : '14px'}}>Accrued Interest <Typography style = {{fontSize : '14px', fontWeight:'bold'}}>₹ 1,00,000.00</Typography></Typography>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortFolio;
