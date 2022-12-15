import { Typography, Button, Box, Divider } from "@mui/material";
import { SectionItem } from "../SectionItem";
import { BaseSectionProps } from "../type/BaseProps";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

type ContactProps = BaseSectionProps;
export const Contact = ({ id = "contact", ...props }: ContactProps) => {
  return (
    <>
      <SectionItem item xs={12} md={8} {...props} id={id}>
        <Divider
          component="div"
          textAlign="left"
          role="presentation"
          variant="fullWidth"
        >
          <Typography
            variant="h3"
            color="inherit"
            component={Parallax}
            translateX={[10, -10]}
          >
            Get in touch
          </Typography>
        </Divider>
        <Typography variant="inherit" color="inherit">
          I&apos;m always interested in having a pleasant chat, so please
          don&apos;t hesitate to say hi to me.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            sx={{ display: "flex", flexWrap: "wrap", }}
            color="secondary"
            href="mailto:lunguaubry@gmail.com"
          >
            Send me an email
          </Button>
        </Box>
      </SectionItem>
    </>
  );
};
