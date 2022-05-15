import React from "react";
import { AppBar ,Toolbar,Typography } from "@mui/material";
const Header = () => {
    return (  

        <AppBar position="static">
        <Toolbar>
        <Typography variant="headline">
            <h1>Exercises Database</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    );
}
 
export default Header;