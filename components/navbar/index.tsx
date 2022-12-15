import * as React from "react";
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Stack,
  useScrollTrigger,
  Slide,
  Container,
  styled,
  useMediaQuery,
  useTheme
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrightness2,
  IconBrightnessHalf,
  IconMail,
  IconMenu,
} from "@tabler/icons";
import { navLinks } from "@util/config";
import { useColorMode } from "@components/theme/ColorModeContext";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  window?: () => Window;
};

type AppBarProps = {
  window?: () => Window;
  children: React.ReactElement;
};
const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  ...(theme.palette.mode === "dark" && {
    background: theme.palette.background.default,
  }),
}));

const AppBarUtil = ({ window, children }: AppBarProps) => {
  const hideOnScrollTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  /*const mChildren = React.cloneElement(children, {
    elevation: elevationTrigger ? 4 : 0,
  });
  */

  return (
    <Slide appear={false} direction="down" in={!hideOnScrollTrigger}>
      {children}
    </Slide>
  );
};

const Navbar = (props: NavbarProps) => {
  const { window } = props;
  const theme = useTheme();
  const smMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { toggleColorMode, mode } = useColorMode();

  const drawerContent = (
    <Stack
      onClick={handleDrawerToggle}
      p={4}
      direction="column"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Box flexGrow={1} />
      <List>
        {navLinks.map(({ name, url }, idx) => (
          <ListItem key={idx}>
            <ListItemButton
              aria-label={`Go to ${name}`}
              LinkComponent={Link}
              href={url}
            >
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box flexGrow={1} />
      <Divider variant="fullWidth" flexItem />
      <Stack direction="row" m={4}>
        <IconButton aria-label="Go to my Github">
          <IconBrandGithub />
        </IconButton>
        <IconButton aria-label="Email me">
          <IconMail />
        </IconButton>
        <IconButton aria-label="Go to my LinkedIn">
          <IconBrandLinkedin />
        </IconButton>
        <IconButton aria-label="Go to my facebook">
          <IconBrandFacebook />
        </IconButton>
      </Stack>
    </Stack>
  );

  return (
    <>
      <AppBarUtil {...props}>
        <AppBar
          elevation={0}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Container maxWidth="xl">
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
              <Image
                alt="aubry-lungu-logo"
                src="/logos/aubry-lungu-logo-icon.svg"
                height={40}
                width={40}
                style={{
                  aspectRatio: 1,
                }}
              />
              <Box flexGrow={1} />
              <Stack direction="row" spacing={4}>
                <Button variant="outlined" aria-label="Download resume">
                  Resume
                </Button>
                <IconButton onClick={toggleColorMode} color="inherit" aria-label="ToggleColorMode">
                  {mode === "light" ? (
                    <IconBrightness2 />
                  ) : (
                    <IconBrightnessHalf />
                  )}
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </AppBarUtil>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {!smMediaQuery ? (
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
                borderColor: (theme) => theme.palette.background.default,
              },
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderColor: (theme) => theme.palette.background.default,
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default React.memo(Navbar);
