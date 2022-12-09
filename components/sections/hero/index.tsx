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


const HeroGridItem = styled(Grid)(({theme}) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 480px) and (min-height: 700px)": {
        paddingBottom: theme.spacing(10)
    }
}))

const MugShotBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  //backgroundColor: theme.palette.secondary.main,
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up("md")]: {
    margin: '50px auto 0',
    width: '70%'
  },
  "> div": {
    display: "block",
    width: '100%',
    borderRadius: 10,
    position: "relative",
    height: '50%'
  },
}));


const Hero = (props: HeroProps) => {
  const theme = useTheme();
  return (
    <>
      <HeroGridItem item xs={12} md={8}>
        <Stack direction="column" spacing={4}>
          <Typography component="div" variant="h2">
            Hi, I'm{" "}
            <Box
              fontWeight="bold"
              display="inline"
              color={theme.palette.secondary.main}
            >
              Aubry Lungu.
            </Box>
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="h6">
            UX Engineer | Software Engineer | Product Engineer
          </Typography>
          <Typography variant="h6">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at Upstatement.
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
            quality={95}
            style={{
              objectFit: "contain",
              borderRadius: 10,
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
