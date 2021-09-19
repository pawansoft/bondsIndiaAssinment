import { Button, Card, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Vector from "../../assets/eyeOpen.png";
import ScrollToTop from "../../assets/scroll-to-top.png";
import HDFCLogo from "../../assets/logohdfc.png";
import Grouping from "../../assets/Group.png";
import "./detail-mobile-card.scss";
import Footer from "./footer";

const MobileDetailCard = () => {
  const [details, setDetails] = useState([]);
  const [selectedFilter, setSlectedFilter] = useState(1);
  const categorys = [
    { id: 1, name: "High To Low" },
    { id: 2, name: "Low To High" },
    { id: 3, name: "High To Low" },
    { id: 4, name: "Low To High" },
  ];

  return (
    <div className="mobile-details-card-parent">
      <div className="details-headers">
        <Typography
          style={{ color: "#202222", fontSize: "25px", fontWeight: "bold" }}
        >
          Bonds (10,000)
        </Typography>
        <FormControl margin="dense" className="select-filter">
          <InputLabel id="filter"></InputLabel>
          <Select
            labelId="filter"
            id="filter"
            variant="outlined"
            style={{
              borderRadius: "25px",
              height: "60px",
              textAlign: "center",
            }}
            value={selectedFilter || ""}
            onChange={(e) => setSlectedFilter(e.target.value)}
            label="Select Filter"
          >
            <MenuItem value="">
              <em>__Select__</em>
            </MenuItem>
            {categorys.map((eachCategory) => {
              return (
                <MenuItem id={eachCategory.id} value={eachCategory.id}>
                  {eachCategory.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      {[1, 2, 3, 4, 5, 6].map((eachCard) => {
        return (
          <Card className="detail-Card">
            <div className="first-container">
              <div className="first-container-first-div">
                <div className="first-row">
                  <Typography className="account-percentage">
                    8.47% HDFC
                    <Typography className="account-percentage">
                      March 2021
                    </Typography>
                  </Typography>
                  <img
                    src={HDFCLogo}
                    style={{ height: "80px", width: "120px" }}
                    className="hdfc-logo"
                  />
                </div>
                <div className="first-row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#666666",
                        marginRight: "2px",
                      }}
                      className="ISITN-number"
                    >
                      ISIN
                    </Typography>
                    <Typography
                      style={{ fontSize: "20px", color: "#202222" }}
                      className="ISITIN"
                    >
                      INE128S07333
                    </Typography>
                  </div>

                  <img
                    style={{ height: "50px" }}
                    src={Vector}
                    className="vector"
                  />
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="first-row">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px", color: "#666666" }}>
                    Price
                  </Typography>
                  <Typography style={{ fontSize: "25px", color: "#202222" }}>
                    ₹ 11,96,068.59
                  </Typography>
                </div>
                <img
                  style={{ height: "90px" }}
                  src={Grouping}
                  className="imageLogo"
                />
              </div>
              <div className="second-row">
                <Typography className="card-footer-details">
                  Price{" "}
                  <Typography className="card-footer-details-text">
                    $200.00
                  </Typography>
                </Typography>
                <Typography className="card-footer-details">
                  Coupon{" "}
                  <Typography className="card-footer-details-text">
                    8.47%
                  </Typography>
                </Typography>
                <Typography className="card-footer-details">
                  Yield{" "}
                  <Typography className="card-footer-details-text">
                    37.00
                  </Typography>
                </Typography>

                <Typography className="card-footer-details">
                  Maturity Date{" "}
                  <Typography className="card-footer-details-text">
                    5 JUN 2028
                  </Typography>
                </Typography>
              </div>
            </div>
          </Card>
        );
      })}

      <div className="action-container">
        <Button variant="outlined" className="load-more-button">
          Load More
        </Button>
        <img
          style={{ marginLeft: "120px", height: "90px", width: "90px" }}
          src={ScrollToTop}
        />
      </div>
      <div style={{ width: "100%", marginTop: "30px" }}>
        <Divider style={{ padding: "2px" }} />
      </div>
      <div style={{ height: "200px", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default MobileDetailCard;
