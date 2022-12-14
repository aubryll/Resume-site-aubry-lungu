import * as React from "react";
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
  Container,
} from "@mui/material";
import {
  IconArrowUp,
  IconBrightness2,
  IconBrightnessHalf,
  IconMenu,
} from "@tabler/icons";
import { navLinks } from "@util/config";
import { useColorMode } from "@components/theme/ColorModeContext";
import Link from "next/link";

type NavbarProps = {
  window?: () => Window;
};

type AppBarProps = {
  window?: () => Window;
  children: React.ReactElement;
};
const drawerWidth = 240;

const AppBarUtil = ({ window, children }: AppBarProps) => {
  const hideOnScrollTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const mChildren = React.cloneElement(children, {
    elevation: elevationTrigger ? 4 : 0,
  });

  return (
    <Slide appear={false} direction="down" in={!hideOnScrollTrigger}>
      {mChildren}
    </Slide>
  );
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
          <ListItem key={idx} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              LinkComponent={Link}
              href={url}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
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
    <Container maxWidth="lg">
      <AppBarUtil {...props}>
        <AppBar position="sticky" component="nav">
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
              sx={{ display: { xs: "none", sm: "block" } }}
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
            <Box  sx={{ flexGrow: 1}}/>
          </Toolbar>
        </AppBar>
      </AppBarUtil>

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
    </Container>
  );
};

export default React.memo(Navbar);
