import * as React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  Stack,
} from "@mui/material";
import { SectionItem } from "../SectionItem";
import { BaseSectionProps } from "../type/BaseProps";
import Image from "next/image";
import { CustomLink } from "@components/CustomLink";
import { Parallax } from "react-scroll-parallax";
import workExperience from "@api/data/experience.json";
import useWindowDimensions from "@util/hooks/useDimensions";
import { useId } from "react";

type ExperienceProps = BaseSectionProps;

type Experience = {
  logo: string;
  location: string;
  from: string;
  role: string;
  to: string;
  duties: string[];
  link: string;
  name: string;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const [visited, setVisited] = React.useState(false);
  React.useEffect(() => {
    if (value === index) {
      setVisited(true);
    }
  }, [value, index]);
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{
        visibility: value === index ? "visible" : "hidden",
      }}
      {...other}
    >
      {visited && children}
    </div>
  );
};

const Experience = ({ id = "experience", ...props }: ExperienceProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [hasMounted, setHasMounted] = React.useState(false);
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const smMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted && !width) return <></>;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <SectionItem item md={8} xs={12} {...props} id={id}>
        <Divider
          component="div"
          textAlign="left"
          role="presentation"
          variant="fullWidth"
        >
          <Typography variant="h3" component={Parallax} translateX={[-10, 10]}>
            Experience
          </Typography>
        </Divider>
        {workExperience.map(CreateItem)}
      </SectionItem>
    </>
  );
};

const CreateItem = (
  { logo, link, location, role, name, from, to, duties }: Experience,
  index: number
) => {
  const id = useId()
  return (
    <Stack
      key={`${index}-${id}`}
      direction="row"
      component={Card}
      variant="outlined"
      alignItems="flex-start"
      color="inherit"
      my={4}
      p={3}
    >
      <Box
        sx={{
          height: 80,
          width: 80,
          background: "white",
          borderRadius: 1,
          marginRight: 4,
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width:768px)": {
            display: "none",
          },
        }}
      >
        <Image
          src={logo}
          height={80}
          width={80}
          alt={`${name}-logo`}
          style={{
            objectFit: "scale-down",
            borderRadius: 5,
            aspectRatio: 1,
          }}
        />
      </Box>

      <Stack>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          component="div"
          color="inherit"
          mb={1}
        >
          {`${role} `}
          <Box color={"inherit"} display="inline">
            <CustomLink href={link}>{`@ ${name}`}</CustomLink>
          </Box>
        </Typography>

        <Typography color="inherit">
          {`${from} - ${to} in ${location}`}
        </Typography>
        <List>
          {duties.map((duty, idx) => (
            <ListItem disableGutters  key={`${idx}-${id}`}>
              <Typography color="inherit">
                <Box
                  fontWeight="bold"
                  component="span"
                  display="inline"
                  color="secondary.light"
                >
                  {`\u25CF `}
                </Box>
                {duty}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Experience;
