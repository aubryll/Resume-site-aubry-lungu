import * as React from "react";
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
  Stack,
  useTheme,
  useScrollTrigger,
  Slide,
  Fade,
  Fab,
} from "@mui/material";
import {
  IconArrowUp,
  IconBrightness2,
  IconBrightnessHalf,
  IconMenu,
} from "@tabler/icons";
import { navLinks } from "@util/config";
import { useColorMode } from "@components/context/ColorModeContext";

type NavbarProps = {
  window?: () => Window;
};

type AppBarProps = {
  window?: () => Window;
  children: React.ReactElement;
};
const drawerWidth = 240;

const HideOnScroll = ({ window, children }: AppBarProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ScrollToTop = ({ window, children }: AppBarProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const ElevationScroll = ({ window, children }: AppBarProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Navbar = (props: NavbarProps) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { toggleColorMode, mode } = useColorMode();
  const theme = useTheme();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: theme.palette.background.default,
        height: "100%",
      }}
    >
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
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={toggleColorMode}
          >
            <ListItemText
              primary={mode === "light" ? "Light mode" : "Dark mode"}
            />
            {mode === "light" ? <IconBrightness2 /> : <IconBrightnessHalf />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
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
            <Stack
              sx={{ display: { xs: "none", sm: "block" } }}
              direction="row"
              spacing={4}
            >
              {navLinks.map(({ name, url }, idx) => (
                <Button
                  key={idx}
                  LinkComponent={Link}
                  href={url}
                  color="inherit"
                >
                  {name}
                </Button>
              ))}
              <Button variant="outlined" color="inherit">
                Resume
              </Button>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "light" ? (
                  <IconBrightness2 />
                ) : (
                  <IconBrightnessHalf />
                )}
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          color={"background.default"}
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
      <ScrollToTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <IconArrowUp />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default React.memo(Navbar);
