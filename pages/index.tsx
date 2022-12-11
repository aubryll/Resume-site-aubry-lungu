import { CustomLink } from "@components/CustomLink";
import { Hero, About, Experience } from "@components/sections";
import { Fab, Fade, Grid, Box, useScrollTrigger } from "@mui/material";
import { IconArrowUp } from "@tabler/icons";

type HomeProps = {
  window?: () => Window;
};

const Home = ({ window, ...props }: HomeProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <>
      <Grid container spacing={4} mb={4} {...props}>
        <Hero />
        <About />
        <Experience />
      </Grid>
      <Fade in={trigger}>
        <Box
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <Fab
            size="large"
            LinkComponent={"a"}
            href="#hero"
            aria-label="scroll back to top"
          >
            <IconArrowUp />
          </Fab>
        </Box>
      </Fade>
    </>
  );
};

export default Home;
