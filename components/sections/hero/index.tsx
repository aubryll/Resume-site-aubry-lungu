import { CustomLink } from "@components/CustomLink";
import {
  Grid,
  Typography,
  Stack,
  Divider,
  useTheme,
  Box,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { SectionGridItem, SectionItem } from "../SectionItem";
import type { BaseSectionProps } from "../type/BaseProps";

type HeroProps = BaseSectionProps;

const MugShotBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
  //backgroundColor: theme.palette.secondary.main,
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    margin: "50px auto 0",
    width: "70%",
  },
  "> div": {
    display: "block",
    width: "100%",
    borderRadius: 5,
    position: "relative",
    height: "70%",
  },
}));

export const Hero = ({ id = "hero", ...props }: HeroProps) => {
  const theme = useTheme();
  return (
    <>
      <SectionItem item xs={12} md={8} {...props} id={id}>
        <Typography variant="inherit" color="inherit" fontFamily={`"DM Mono", monospace`}>
          Hi, I'm
        </Typography>
        <Typography
          component="div"
          variant="h1"
          color="secondary.main"
        >
          Aubry Lungu.
        </Typography>
        <Typography variant="inherit" color="inherit" component="div" >
          <Box fontWeight="bold" display="inline">
            UX/UI Engineer, Software Engineer, Data Scientist, and Product
            Engineer Here!{" "}
          </Box>
          Making fantastic digital products that help people is a passion of
          mine.
        </Typography>
        <Typography component="div" variant="inherit" color="inherit">
          Currently, I'm a UX/UI engineer at{" "}
          <CustomLink href="https://www.orbis.org/">
            Orbis International
          </CustomLink>
          , where we use machine learning and artificial intelligence to help
          eliminate preventable blindness.
        </Typography>
      </SectionItem>
      <SectionGridItem item xs={12} md={4}>
        <MugShotBox>
          <div>
            <Image
              alt={"head-shot"}
              src={"/photo.jpeg"}
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              quality={95}
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
