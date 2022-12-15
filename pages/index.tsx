import * as React from "react";
import { Hero, About, Contact, Experience } from "@components/sections";
import { Fab, Fade, Grid, Box, useScrollTrigger, styled } from "@mui/material";
import { IconArrowUp } from "@tabler/icons";



type HomeProps = {
  window?: () => Window;
};

//We do not want to display to go up button on mobile
//it is a little incosistent because of the mugshot
//taking up more width than it should.
const FadeDesktop = styled(Fade)(({ theme }) => ({
  "@media (max-width:768px)": {
    display: "none",
  },
}));

const Home = ({ window, ...props }: HomeProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });


  return (
    <>
      <Grid container spacing={4} mb={4} {...props}>
        <Hero {...props} />
        <About {...props} />
        <Experience {...props} />
        <Contact {...props} />
      </Grid>
      <FadeDesktop in={trigger}>
        <Box
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <Fab
            size="large"
            color="secondary"
            LinkComponent={"a"}
            href="#hero"
            aria-label="scroll back to top"
          >
            <IconArrowUp />
          </Fab>
        </Box>
      </FadeDesktop>
    </>
  );
};

export default Home;
