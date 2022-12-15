import { CustomLink } from "@components/CustomLink";
import { Typography, Box, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SectionGridItem, SectionItem } from "../SectionItem";
import type { BaseSectionProps } from "../type/BaseProps";
import { Parallax } from "react-scroll-parallax";

type HeroProps = BaseSectionProps;

const MugShotBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
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
        <Typography color="secondary.light" variant="body1">
          Hello there, I&apos;m
        </Typography>
        <Parallax translateY={[-19, 19]}>
          <Typography variant="h1" color="secondary.light">
            Aubry
          </Typography>
          <Typography variant="h1" color="inherit">
            Lungu.
          </Typography>
        </Parallax>
        <Typography color="text.secondary" component="div">
          <Box fontWeight="bold" display="inline">
            UX/UI Engineer, Software Engineer, Data Scientist, and Product
            Engineer Here!{" "}
          </Box>
          Making fantastic digital products that help people is a passion of
          mine.
        </Typography>
        <Typography component="div" color="text.secondary">
          Currently, I&apos;m a UX/UI engineer at{" "}
          <CustomLink href="https://www.orbis.org/">
            Orbis International
          </CustomLink>
          , where we use machine learning and artificial intelligence to help
          eliminate preventable blindness.
        </Typography>
      </SectionItem>
      <SectionGridItem item xs={12} md={4}>
        <MugShotBox>
          <Parallax speed={95}>
            <div>
              <Image
                alt={"Photo of the author"}
                src={"/photo.jpeg"}
                fill
                sizes="(max-width: 1200px) 15vw,10vw"
                quality={20}
                priority
                style={{
                  objectFit: "cover",
                  borderRadius: 5,
                  position: "absolute",
                  aspectRatio: 1,
                }}
              />
            </div>
          </Parallax>
        </MugShotBox>
      </SectionGridItem>
    </>
  );
};
