import {
  Grid,
  Typography,
  Stack,
  Divider,
  useTheme,
  Box,
  styled,
} from "@mui/material";

type SectionItemProps = React.ComponentProps<typeof Grid>;

export const SectionGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
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

export const SectionItem = ({ children, ...props }: SectionItemProps) => {
  return (
    <SectionGridItem {...props}>
      <Stack direction="column" spacing={4} sx={{ flexGrow: 1 }}>
        {children}
      </Stack>
    </SectionGridItem>
  );
};
