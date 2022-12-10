import { Divider, Typography } from "@mui/material";
import { SectionItem } from "../SectionItem";
import type { BaseSectionProps } from "../type/BaseProps";


type AboutProps = & BaseSectionProps;
export const About = (props: AboutProps) => {
  return (
    <>
      <SectionItem item xs={12} {...props}>
        <Divider
          component="div"
          textAlign="left"
          role="presentation"
          variant="fullWidth"
        >
          <Typography variant="h4">About me</Typography>
        </Divider>
      </SectionItem>
    </>
  );
};
