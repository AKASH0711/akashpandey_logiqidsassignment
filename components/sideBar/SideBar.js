import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./sideBar.css";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // Drawer Toggle
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // Avoiding Routing conflict.
  const conbineWord = (word) => {
    var wordCount = word.match(/(\w+)/g).length;
    if (wordCount > 1) {
      const splitWord = word.split(" ");
      return splitWord[0] + "_" + splitWord[1];
    } else {
      return word;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "left" || anchor === "right" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider style={{ backgroundColor: "white" }} />
      <p className="Sidebar-p">Categories</p>
      {/* SideBar List Items */}
      <List>
        {[
          "Business",
          "Entertainment",
          "General",
          "Health science",
          "sports",
          "Technology",
        ].map((text, index) => (
          <Link to={`/${conbineWord(text)}`} style={{ textDecoration: "none" }}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
