import * as React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Tab,
  tabClasses,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionItem } from "../SectionItem";
import { BaseSectionProps } from "../type/BaseProps";
import Image from "next/image";
import { CustomLink } from "@components/CustomLink";
import { Parallax } from "react-scroll-parallax";
import workExperience from "@api/data/experience.json";
import useWindowDimensions from "@util/hooks/useDimensions";

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
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
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
          <Typography variant="h4" component={Parallax} translateX={[-10, 10]}>
            Experience
          </Typography>
        </Divider>
        <Grid
          {...(smMediaQuery && {
            container: true,
            spacing: 4,
          })}
        >
          <Grid item sm={12} md={3}>
            <Box
              sx={{
                maxWidth: {
                  //Fix for unresponsive/overflowing MUI tabs on mobile
                  xs: width ? width * 0.9 : 320,
                  sm: width ? width * 0.9 : 480,
                  md: "100%",
                },
                "@media (max-width:768px)": {
                  mb: 4,
                },
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                orientation={smMediaQuery ? "vertical" : "horizontal"}
                variant="scrollable"
                allowScrollButtonsMobile
                textColor="inherit"
                indicatorColor="secondary"
                scrollButtons="auto"
                sx={{
                  ...(smMediaQuery && {
                    borderLeft: 1,
                    borderColor: "inherit",
                    [`& .MuiTabs-indicator`]: {
                      left: "0px",
                    },
                  }),
                }}
              >
                {workExperience.map(({ name }, idx) => (
                  <Tab
                    key={idx}
                    label={name}
                    id={`vertical-tab-${idx}`}
                    sx={smMediaQuery ? { alignItems: "flex-start" } : null}
                  />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid item sm={12} md={9}>
            {workExperience.map((item, idx) => (
              <TabPanel key={idx} value={selectedTab} index={idx}>
                {createItem(item, idx)}
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </SectionItem>
    </>
  );
};

const createItem = (
  { logo, link, location, role, name, from, to, duties }: Experience,
  index: number
) => {
  return (
    <Stack key={index} alignItems="flex-start" color="inherit">
      <Stack direction="row" alignItems="center">
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
            priority={true}
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
            component="div"
            fontWeight="bold"
            color="inherit"
            mb={1}
          >
            {`${role} `}
            <Box color={"secondary.main"} display="inline">
              <CustomLink href={link}>{`@ ${name}`}</CustomLink>
            </Box>
          </Typography>

          <Typography
            fontFamily={`"DM Mono", monospace`}
            variant="inherit"
            color="inherit"
          >
            {`${from} - ${to} in ${location}`}
          </Typography>
        </Stack>
      </Stack>
      <List>
        {duties.map((duty, idx) => (
          <ListItem disableGutters key={idx}>
            <Typography color="inherit" variant="inherit">
              <Box
                fontWeight="bold"
                component="span"
                display="inline"
                color="secondary.main"
              >
                {`${++idx}. `}
              </Box>
              {duty}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Experience;
