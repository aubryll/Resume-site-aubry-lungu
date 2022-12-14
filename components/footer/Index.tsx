import { SectionGridItem, SectionItem } from "@components/sections";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <Grid
      item
      spacing={4}
      mb={4}
      {...props}
      sx={{
        bottom: 0,
        width: "100vw",
      }}
    >
        <Divider variant="fullWidth" sx={{my: (theme) => theme.spacing(6)}}/>
      <Typography variant="subtitle2">
        Designed and developed by Aubry Lungu
      </Typography>
    </Grid>
  );
};
