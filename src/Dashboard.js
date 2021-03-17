import React from "react";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import { Typography, Chip, Button, TextField } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { CTX } from "./Store";

const Dashboard = () => {
  const classes = useStyles();
  const [allChats] = React.useContext(CTX);

  const topics = Object.keys(allChats);

  //local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");
  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h4" component="h4">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map((topic, index) => (
                <ListItem
                  onClick={(e) => changeActiveTopic(e.target.innerText)}
                  key={index}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, index) => (
              <div className={classes.flex} key={index}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="body1">{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
