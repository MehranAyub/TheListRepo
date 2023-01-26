import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../Assets/Logo.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ mt: 6, textAlign: "start", color: "white" }}
    >
      <Divider />
      {/* <List sx={{ mt: 5 }}> */}
      {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      <Button
        sx={{
          fontFamily: "Lulo-Clean-One-Bold",
        }}
      >
        HOME
      </Button>
      <br />
      <Button
        sx={{
          fontFamily: "Lulo-Clean-One-Bold",
        }}
      >
        MY LISTS
      </Button>
      <Button
        sx={{
          fontFamily: "Lulo-Clean-One-Bold",
        }}
      >
        INSPIRATION
      </Button>
      <Button
        sx={{
          fontFamily: "Lulo-Clean-One-Bold",
        }}
      >
        ABOUT
      </Button>
      {/* </List> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#EBE8D8",
          borderBottom: "1.5px solid black",
          boxShadow: "none",
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: "28%", display: { sm: "block", md: "none" } }}>
            <img src={Logo} style={{ width: "72px" }}></img>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
            <Box
              sx={{
                mt: 2,
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  letterSpacing: "-0.205em",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
              >
                HOME
              </Button>
              <Button
                sx={{
                  color: "black",
                  letterSpacing: "-0.205em",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
              >
                MY LISTS
              </Button>
              <Button
                sx={{
                  color: "black",
                  letterSpacing: "-0.205em",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
              >
                INSPIRATION
              </Button>
              <Button
                sx={{
                  color: "black",
                  letterSpacing: "-0.205em",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
              >
                ABOUT
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
