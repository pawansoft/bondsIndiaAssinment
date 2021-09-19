import React from "react";
import { Card, IconButton, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrwoLeft from "../../assets/arrow-left-icon.png";
import ArrowRight from "../../assets/arrow-right-icon.png";
import CashIcon from "../../assets/moneyicon.png";
import CircleIcon from "../../assets/circleGroup.png";
import "./mobile-card.scss";

const MobileCard = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mobile-card-parent-container">
      <Card className="mobile-card">
        <Tabs
          className="deal-of-the-tabs"
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          //   centered
        >
          <Tab label="My Portfolio" style={{ textTransform: "none" }} />
          <Tab label="My Orders" style={{ textTransform: "none" }} />
          <Tab label="My RFQs" style={{ textTransform: "none" }} />
        </Tabs>
        <div className="card-header">
          <img src={ArrwoLeft} className="imageLogo" />
          <div className="first-container">
            <img src={CashIcon} />
            <Typography className="title">
              Current Value{" "}
              <Typography className="details">₹ 1,10,36,305.98 </Typography>
            </Typography>
          </div>
          <img src={ArrowRight} className="imageLogo" />
        </div>
        <div
          className="second-container"
          // style={{ backgroundImage: `url(${CircleIcon})` }}
        >
          <img
            style={{
              height: "200px",
              right: "-80px",
              top: "200px",
              alignSelf: "center",
            }}
            src={CircleIcon}
            className="imageLogo"
          />
          <Card
            style={{
              top: "450px",
              position: "absolute",
              left: "310px",
              width: "200px",
              border: `1px solid #BDBDBD`,
              borderRadius: "5px",
            }}
          >
            <Typography style={{ fontSize: "16px" }}>
              Accrued Interest{" "}
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                ₹ 1,00,000.00
              </Typography>
            </Typography>
          </Card>
          <Card
            style={{
              top: "540px",
              position: "absolute",
              left: "120px",
              width: "200px",
              border: `1px solid #BDBDBD`,
              borderRadius: "5px",
            }}
          >
            <Typography style={{ fontSize: "16px" }}>
              Accrued Interest{" "}
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                ₹ 1,00,000.00
              </Typography>
            </Typography>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "50px",
          }}
        >
          <Typography
            style={{ color: "#3F68D3", fontSize: "25px", fontWeight: "bold" }}
          >
            See More
          </Typography>
        </div>
      </Card>
    </div>
  );
};
export default MobileCard;
