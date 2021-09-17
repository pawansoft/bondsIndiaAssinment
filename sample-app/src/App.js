import logo from "./logo.svg";
import React from "react";
import "./App.css";
import CustomCard from "./components/cards/card";
import { BrowserView, MobileView } from "react-device-detect";
import DealOfTheDay from "./components/deal_of_the_day/deal_of_the_day";
import PortFolio from "./components/portFolio/portfolio";
import MediaQuery from "react-responsive";
import FilterFrame from "../src/assets/Frame.png";
import Filter from "./components/Filter/filter";
import { Avatar, Button, Typography } from "@material-ui/core";

function App() {
  const [openFilter, setOpenFilter] = React.useState(false);

  const handleFilterButton = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="App">
      {!openFilter ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            marginLeft: "5px",
          }}
        >
          <MediaQuery minWidth={1224}>
            <Filter />
          </MediaQuery>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MediaQuery minWidth={1224}>
                <div style={{ marginRight: "50px" }}>
                  <PortFolio />
                </div>
              </MediaQuery>
              <MediaQuery maxWidth={500}>
                <div style={{ marginLeft: "10px" }}>
                  <PortFolio />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      onClick={handleFilterButton}
                      style={{ borderRadius: "25px", width: "30%" }}
                      startIcon={<Avatar src={FilterFrame} />}
                    >
                      <Typography
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Filter
                      </Typography>
                    </Button>
                  </div>
                </div>
              </MediaQuery>

              <MediaQuery minWidth={1224}>
                <div>
                  <DealOfTheDay />
                </div>
              </MediaQuery>
            </div>
            {[1, 2, 3, 3, 3, 3].map((eachCard) => {
              return <CustomCard />;
            })}
          </div>
        </div>
      ) : (
        
        <Filter close={handleFilterButton} />
      )}
    </div>
  );
}

export default App;
