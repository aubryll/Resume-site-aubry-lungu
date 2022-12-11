import {
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { SectionItem } from "../SectionItem";
import { BaseSectionProps } from "../type/BaseProps";
import Image from "next/image";
import { CustomLink } from "@components/CustomLink";

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

const workExperience: Experience[] = [
  {
    logo: "/logos/orbis-logo.svg",
    link: "https://www.orbis.org/en",
    location: "New York, USA",
    name: "Orbis International",
    role: "UI/UX Engineer",
    from: "01/2022",
    to: "Current",
    duties: [
      "Designed and executed the user interface and user experience for Cybersight, a telemedicine system utilized in over 200 countries and accessible in seven languages.",
      "Adobe InDesign, Figma, and Adobe Illustrator were used to create client page layouts.",
      "Complete web applications were redesigned and installed to satisfy web and industry standards.",
    ],
  },
  {
    logo: "/logos/ema-logo.svg",
    link: "https://openenergylabs.co/",
    location: "London, UK",
    name: "Open Energy Labs",
    role: "Senior Software Engineer - Consultant",
    from: "02/2021",
    to: "06/2022",
    duties: [
      "Designed the UI/UX and functionality for the Energy Makers Academy Android app, which is now available on the Play Store.",
      "Participated in the agile development of products within cross-functional frameworks.",
      "Set idiomatic syntax and design patterns for technical developers.",
      "Conducted research on the subtle characteristics of various platforms in order to guide the team in the creation of apps for iPhone, Android, Windows, and OSX devices.",
    ],
  },
  {
    logo: "/logos/FirstQuantum-logo.svg",
    link: "https://first-quantum.com/",
    location: "Solwezi, ZM",
    name: "First Quantum Minerals Limited",
    role: "Product Developer",
    from: "03/2020",
    to: "03/2021",
    duties: [
      "Spearheaded product development from initial design conceptualization to manufacturing and final delivery to clients.",
      "Facilitated quality assurance and product assessments to promote high-quality productions.",
      "Researched modern product trends and adapted designs to match.",
      "Prepared sketches and detailed drawings of designs and projected product ideas.",
    ],
  },
  {
    logo: "/logos/mika-express-logo.png",
    link: "https://www.facebook.com/people/MikaExpress/100052002867101/",
    location: "Lusaka, ZM",
    name: "MikaExpress Limited",
    role: "Senior FullStack Software Engineer",
    from: "01/2019",
    to: "03/2020",
    duties: [
      "Before going live, I tested the software to eliminate bugs and resolve issues.",
      "Developed user-friendly software interfaces to ease overall administration.",
      "Existing software systems were modified to improve performance and add new features.",
      "Mentored junior development professionals to help them improve their coding standards.",
    ],
  },
  {
    logo: "/logos/ab-bank-logo.jpg",
    link: "https://www.abbank.co.zm/",
    location: "Lusaka, ZM",
    name: "AB Bank Zambia",
    role: "Project Manager - Consultant",
    from: "08/2018",
    to: "08/2019",
    duties: [
      "Developed project plans that included objectives, resources needed, and timelines.",
      "Project staff work was coordinated, including task assignment and performance monitoring.",
      "Delivered projects on schedule, under budget, and with high quality standards.",
      "By offering excellent program leadership, I was able to enhance development and drive continuous improvement in the project delivery process.",
    ],
  },
  {
    logo: "/logos/crystaline-technologies-logo.png",
    link: "http://www.crystaline.co.zm/about-us.html",
    location: "Lusaka, ZM",
    name: "Crystaline Technologies Limited",
    role: "Software Engineer",
    from: "07/2017",
    to: "12/2017",
    duties: [
      "Scrum and Kanban approaches were streamlined into the development processes to standardize and speed operations.",
      "Integrated cutting-edge development approaches to reduce turnaround times and increase client loyalty.",
      "JUnit, Jasmine, and Selenium were used to automate diagnostic testing of produced applications.",
    ],
  },
  {
    logo: "/logos/wesbr-foundation-logo.png",
    link: "https://www.facebook.com/WesbrFoundationZambia/",
    location: "Lusaka, ZM",
    name: "Wesbr Foundation",
    role: "System Analyst - Volunteer",
    from: "11/2017",
    to: "08/2018",
    duties: [
      "Developed and monitored project plans while providing management with progress reports.",
      "Designed a simplified task system to allow more efficient workflows for both peers and management personnel.",
      "When directing project teams, I maintained quality-focused performance benchmarks and schedules.",
      "Investigated new technologies and tools for productivity, security, and quality assurance.",
    ],
  },
];

export const Experience = ({
  id = "experience",
  ...props
}: ExperienceProps) => {
  return (
    <>
      <SectionItem item md={8} xs={12} {...props} id={id}>
        <Divider
          component="div"
          textAlign="left"
          role="presentation"
          variant="fullWidth"
        >
          <Typography variant="h4">Experience</Typography>
        </Divider>
        <List>{workExperience.map(createItem)}</List>
      </SectionItem>
    </>
  );
};

const createItem = (
  { logo, link, location, role, name, from, to, duties }: Experience,
  index: number
) => {
  return (
    <ListItem
      key={index}
      component={Card}
      elevation={10}
      alignItems="flex-start"
      sx={{ my: 4 }}
      color="inherit"
    >
      <ListItemIcon
        sx={{
          height: 100,
          width: 100,
          background: "white",
          borderRadius: 1,
          margin: 4,
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width:768px)": {
            display: "none",
          },
        }}
      >
        <Image
          src={logo}
          height={100}
          width={100}
          alt={`${name}-logo`}
          priority={true}
          style={{
            objectFit: "scale-down",
            borderRadius: 5,
            aspectRatio: 1,
          }}
        />
      </ListItemIcon>
      <ListItemText
        color="inherit"
        primary={
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            color="inherit"
          >
            {`${role} `}
            <Box color={"secondary.main"} display="inline">
              <CustomLink href={link}>{`@ ${name}`}</CustomLink>
            </Box>
          </Typography>
        }
        secondary={
          <>
            <br />
            <Typography
              fontFamily={`"DM Mono", monospace`}
              component="span"
              variant="inherit"
              color="inherit"
            >
              {`${from} - ${to} in ${location}`}
            </Typography>
            <br />
            <br />
            <>
              <List component={"span"}>
                {duties.map((duty, idx) => (
                  <ListItem disableGutters key={idx} component={"span"}>
                    <Typography
                      component="span"
                      color="inherit"
                      variant="inherit"
                    >
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
            </>
          </>
        }
      />
    </ListItem>
  );
};
