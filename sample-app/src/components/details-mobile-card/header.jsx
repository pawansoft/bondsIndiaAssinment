import { Divider, Typography } from "@material-ui/core";
import React from "react";

import './header.scss'
const Header = () => {
    return(
        <div className = 'header-parent-container'>
            <Typography className = 'tab-header'>Bonds
            <Typography className = 'tab-details'> Transact </Typography>
            </Typography>
            <Divider orientation="vertical" variant = 'string' style = {{height : '80%'}}/>

            <Typography className = 'tab-header'>Fixed Deposit
            <Typography className = 'tab-details'> Book </Typography>
            </Typography>
            <Divider orientation="vertical" style = {{height : '80%',}}/>

            <Typography className = 'tab-header'>IPO
            <Typography className = 'tab-details'> Subscribe </Typography>
            </Typography>
            <Divider orientation="vertical" style = {{height : '80%',}}/>

            <Typography className = 'tab-header'>54 EC
            <Typography className = 'tab-details'> Purchase </Typography>
            </Typography>
            
        </div>
    )
}

export default Header
