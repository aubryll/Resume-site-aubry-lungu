import { Divider, Grid, Typography } from "@mui/material";

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <Grid
      item
      spacing={6}
      my={8}
      {...props}
      sx={{
        bottom: 0,
        width: "100vw",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Divider variant="fullWidth" sx={{ my: (theme) => theme.spacing(6) }} />
      <Typography color="text.secondary" variant="subtitle2">
        Designed and developed by Aubry Lungu
      </Typography>
    </Grid>
  );
};
