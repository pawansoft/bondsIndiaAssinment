import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MediaQuery from "react-responsive";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Button, Card, IconButton, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FilterFrame from "../../assets/Frame.png";
import "./filter.scss";

const PrettoSlider = withStyles({
  root: {
    color: "#F4F4F4",
    height: 6,
    borderRadius: "20px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "1px solid #D1D1D1",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Filter = (props) => {
  return (
    <div className="filter-container-parent">
      <Card className="filter-container">
        <div className="filter-header">
        <MediaQuery maxWidth={500}>
          <IconButton size = 'medium' style = {{marginRight : "20px"}} onClick = {props.close}><HighlightOffIcon/></IconButton>
        </MediaQuery>
          <img src={FilterFrame} />
          <Typography className="filter-text">Filter Criteria</Typography>
          <MediaQuery maxWidth={500}>
          <Button style = {{textTransform : 'none', marginLeft : '20px', color : 'blue'}}>Clear All</Button>
          </MediaQuery>
        </div>
        <div className="yeild-filter">
          <Accordion style={{ borderRadius: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#202222",
                }}
              >
                Yield
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={[10, 50]}
              />
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="yeild-filter">
          <Accordion style={{ borderRadius: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#202222",
                }}
              >
                Coupon
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={[10, 50]}
              />
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="yeild-filter">
          <Accordion style={{ borderRadius: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#202222",
                }}
              >
                Balance Tenure
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={[10, 50]}
              />
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="yeild-filter">
          <Accordion style={{ borderRadius: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#202222",
                  wordWrap: "break-word",
                }}
              >
                Interest Payment Frequency
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="Monthly"
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="Quarterly"
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label=" Half yearly"
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label=" Annually"
              />
            </AccordionDetails>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label=" Cumulative at Maturity"
              />
            </AccordionDetails>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};
export default Filter;
