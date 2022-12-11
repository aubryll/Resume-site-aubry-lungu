import { Hero, About,  } from "@components/sections";
import { Fab, Fade, Grid, Box, useScrollTrigger } from "@mui/material";
import { IconArrowUp } from "@tabler/icons";
import dynamic from "next/dynamic";
import {} from "../components/sections"

/**
 * Because we are relying on the useWindowDimensions hook to fix
 * the width overflow bug on the tabs on mobile we need to disable SSR
 * on this component otherwise the component on the server and clients
 * will never be the same.
*/
const Experience = dynamic(() => import('@components/sections/experience'), {
  ssr: false,
})

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
        <Hero {...props}/>
        <About {...props}/>
        <Experience {...props}/>
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
