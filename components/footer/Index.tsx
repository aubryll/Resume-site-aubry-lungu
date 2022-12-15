import { Divider, Grid, Typography } from "@mui/material";

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <Grid
      item
      my={8}
      {...props}
      sx={{
        bottom: 0,
      }}
    >
      <Divider variant="fullWidth" sx={{ my: (theme) => theme.spacing(6) }} />
      <Typography color="inherit" variant="body2">
        Designed and developed by Aubry Lungu
      </Typography>
    </Grid>
  );
};
