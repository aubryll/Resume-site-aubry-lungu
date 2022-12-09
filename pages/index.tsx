import Hero from "@components/sections/hero";
import {
  Grid,
  useTheme,
} from "@mui/material";


type HomeProps = {};


const Home = (props: HomeProps) => {
  const theme = useTheme()
  return (
    <Grid container spacing={4}>
      <Hero/>
    </Grid>
  );
};

export default Home;
