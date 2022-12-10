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

type HeroProps = {};

const HeroGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "100vh",
  },
  "@media (max-width: 480px) and (min-height: 700px)": {
    paddingBottom: theme.spacing(10),
  },
}));

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

const Hero = (props: HeroProps) => {
  const theme = useTheme();
  return (
    <>
      <HeroGridItem item xs={12} md={8}>
        <Stack direction="column" spacing={4}>
          <Typography variant="h6" fontFamily={`"DM Mono", monospace`}>
            Hi, I'm
          </Typography>
          <Typography
            component="div"
            variant="h1"
            color={theme.palette.secondary.main}
          >
            Aubry Lungu.
          </Typography>
          <Typography variant="h6" component="div">
            <Box fontWeight="bold" display="inline">
              UX/UI Engineer, Software Engineer, and Product Engineer Here!{" "}
            </Box>
            Making fantastic digital products that help people is a passion of
            mine. Currently, I'm a UX/UI engineer at{" "}
            <CustomLink href="https://www.orbis.org/">
              Orbis International
            </CustomLink>
            , where we use machine learning and artificial intelligence to help
            eliminate preventable blindness.
          </Typography>
        </Stack>
      </HeroGridItem>
      <HeroGridItem item xs={12} md={4}>
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
      </HeroGridItem>
    </>
  );
};

export default Hero;
