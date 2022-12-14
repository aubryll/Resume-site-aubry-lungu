import { CustomLink } from "@components/CustomLink";
import {
  Typography,
  Box,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { SectionGridItem, SectionItem } from "../SectionItem";
import type { BaseSectionProps } from "../type/BaseProps";
import { Parallax } from "react-scroll-parallax";

type HeroProps = BaseSectionProps;

const MugShotBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
  //backgroundColor: theme.palette.secondary.main,
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    margin: "50px auto 0",
    width: "80%",
    alignSelf: "end",
  },
  "> div": {
    display: "block",
    width: "100%",
    borderRadius: 5,
    position: "relative",
    height: "100%",
  },
}));

export const Hero = ({ id = "hero", ...props }: HeroProps) => {
  return (
    <>
      <SectionItem item xs={12} md={8} {...props} id={id}>
        <Typography color="inherit" variant="h4">
          Hello there, I'm
        </Typography>
        <Typography
          variant="h1"
          color="inherit"
          component={Parallax}
          translateY={[-19, 19]}
        >
          <Box fontWeight="bold" display="inline" color="secondary.light">
          Aubry {" "}
          </Box>
          Lungu.
        </Typography>
        <Typography color="text.secondary" component="div">
          <Box fontWeight="bold" display="inline">
            UX/UI Engineer, Software Engineer, Data Scientist, and Product
            Engineer Here!{" "}
          </Box>
          Making fantastic digital products that help people is a passion of
          mine.
        </Typography>
        <Typography component="div" color="text.secondary">
          Currently, I'm a UX/UI engineer at{" "}
          <CustomLink href="https://www.orbis.org/">
            Orbis International
          </CustomLink>
          , where we use machine learning and artificial intelligence to help
          eliminate preventable blindness.
        </Typography>
      </SectionItem>
      <SectionGridItem item xs={12} md={4}>
        <MugShotBox component={Parallax} speed={95} rotate={[-20, 20]}>
          <div>
            <Image
              alt={"head-shot"}
              src={"/photo.jpeg"}
              fill
              priority={true}
              sizes="(max-width: 768px) 95vw,
            (max-width: 1200px) 45vw,
            30vw"
              quality={80}
              style={{
                objectFit: "cover",
                borderRadius: 5,
                position: "absolute",
                aspectRatio: 1,
              }}
            />
          </div>
        </MugShotBox>
      </SectionGridItem>
    </>
  );
};
