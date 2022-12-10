import { Hero, About, Experience } from "@components/sections";
import { Fab, Fade, Grid, Box, useScrollTrigger } from "@mui/material";
import { IconArrowUp } from "@tabler/icons";

type HomeProps = {};

type ScrollToTopProps = {
  window?: () => Window;
  children: React.ReactElement;
};
const ScrollToTop = ({ window, children }: ScrollToTopProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#hero");

    if (anchor) {
      anchor.scrollIntoView({
        block: "end",
        behavior: "smooth",
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

const Home = (props: HomeProps) => {
  return (
    <>
      <Grid container spacing={4} mb={4}>
        <Hero id="hero" />
        <About id="about" />
        <Experience id="experience" />
      </Grid>
      <ScrollToTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <IconArrowUp />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default Home;
