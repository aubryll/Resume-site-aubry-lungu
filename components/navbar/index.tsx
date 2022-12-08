import React from "react";
import Link from "next/link";
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  useTheme,
} from "@mui/material";
import { IconBrightness2, IconBrightnessHalf, IconMenu } from "@tabler/icons";
import { navLinks } from "@util/config";
import { useContext } from "react";
import { ColorModeContext } from "pages/_app";

type NavbarProps = {
  window?: () => Window;
};

const drawerWidth = 240;

const Navbar = ({ window }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Aubry Lungu
      </Typography>
      <Divider />
      <List>
        {navLinks.map(({ name, url }, idx) => (
          <Link key={idx} href={url}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Resume"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={toggleColorMode}>
            <ListItemText
              primary={
                theme.palette.mode === "light" ? "Light mode" : "Dark mode"
              }
            />
            {theme.palette.mode === "light" ? (
              <IconBrightness2 />
            ) : (
              <IconBrightnessHalf />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <IconMenu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Aubry Lungu
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map(({ name, url }, idx) => (
              <Button key={idx} LinkComponent={Link} href={url}>
                {name}
              </Button>
            ))}
            <Button variant="outlined">Resume</Button>
            <IconButton onClick={toggleColorMode}>
              {theme.palette.mode === "light" ? (
                <IconBrightness2 />
              ) : (
                <IconBrightnessHalf />
              )}
            </IconButton>
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default React.memo(Navbar);
