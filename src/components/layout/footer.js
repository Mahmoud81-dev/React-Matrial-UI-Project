import React from "react";
import { Paper, Tab, Tabs } from "@mui/material";
const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0;

  function onIndexSelect(e, index) {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  }
  
  return (
    <Paper>
      <Tabs  centered value={index} onChange={onIndexSelect}>
        <Tab label="All" />
        {muscles.map((group) => (
          <Tab  key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
