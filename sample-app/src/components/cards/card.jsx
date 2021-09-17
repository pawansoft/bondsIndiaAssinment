import React from "react";
import Card from "@material-ui/core/Card";
import "./card.scss";
import { Typography } from "@material-ui/core";
import HDFCLogo from "../../assets/logohdfc.png";
import Vector from "../../assets/eyeOpen.png";
import Grouping from "../../assets/Group.png"

const CustomCard = (props) => {
  return (
    <div className="card-parent-div">
      <Card className="card">
        <div className="card-header">
          <div className="revenue">
            <Typography className="revenue-details">
              12.50% HLF Jun 2032
            </Typography>
          </div>
          <div className="revenue-details-info">
            <Typography className="ISITN-number">ISIN</Typography>
            <Typography className="ISITIN">INE128S07333</Typography>
            <img src={HDFCLogo} className="hdfc-logo"></img>
            <img src={Vector} className="vector" />
          </div>
        </div>
        <div className="card-footer">
          <Typography className = "card-footer-details">
            Price <Typography className = "card-footer-details-text">$200.00</Typography>
          </Typography>
          <Typography  className = "card-footer-details">
            Coupon <Typography className = "card-footer-details-text">8.47%</Typography>
          </Typography>
          <Typography className = "card-footer-details">
            Yield <Typography className = "card-footer-details-text">37.00</Typography>
          </Typography>
          <Typography className = "card-footer-details">
            IP Frequency <Typography className = "card-footer-details-text">Yearly</Typography>
          </Typography>
          <Typography className = "card-footer-details">
            Maturity Date <Typography className = "card-footer-details-text">5 JUN 2028</Typography>
          </Typography>
          <Typography className = "card-footer-details">
            {" "}
            Type of Bond <Typography className = "card-footer-details-text">Perpetual</Typography>
          </Typography>
          <img src = {Grouping} className = "imageLogo"/>
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
