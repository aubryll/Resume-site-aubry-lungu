import * as React from "react";
import { Hero, About } from "@components/sections";
import { Fab, Fade, Grid, Box, useScrollTrigger } from "@mui/material";
import { IconArrowUp } from "@tabler/icons";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useMousePosition from "@util/hooks/useMousePosition";

/**
 * Because we are relying on the useWindowDimensions hook to fix
 * the width overflow bug on the tabs on mobile, we need to disable SSR
 * on this component otherwise the component on the server and client
 * will never be the same.
 */
const Experience = dynamic(() => import("@components/sections/experience"), {
  ssr: false,
});

type HomeProps = {
  window?: () => Window;
};

const Home = ({ window, ...props }: HomeProps) => {
  const { x, y } = useMousePosition();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const [cursorVariant, setCursorVariant] = React.useState("default");

  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: x - 75,
      y: y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <Grid container spacing={4} mb={4} {...props}>
        <Hero {...props} />
        <About {...props} />
        <Experience {...props} />
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
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Home;
