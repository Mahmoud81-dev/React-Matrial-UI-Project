import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const styled = {
  paper: { margin: 10, padding: 20, height: 450, overflowY: "auto" },
};

const Exercises = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = " please select an exercise from the list left",
  },
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
        <Paper style={styled.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <div key={group}>
                <Typography variant="h5">{group}</Typography>

                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItemButton key={title}
                    onClick={() => onSelect(id)}
                    >
                      {
                        <ListItemText
                          secondary={title}
                         
                        />
                      }
                    </ListItemButton>
                  ))}
                </List>
              </div>
            ) : null
          )}
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={9}>
        <Paper style={styled.paper}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
          {title}
          </Typography>
            
          <Typography
            variant="body1"
            style={{ marginTop: 20, textAlign: "center" }}
          >{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
