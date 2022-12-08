import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {DesktopComponent, MobileComponent} from "@components/container";
import Image from "next/image";


type NavbarProps = {};


const DesktopImageWrapper = DesktopComponent(Box);
const MobileImageWrapper = MobileComponent(Box);

const Navbar = (props: NavbarProps) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <DesktopImageWrapper>
          <Image
            height={40}
            width={60}
            alt={"aubry-lungu-logo"}
            src={"/vercel.svg"}
          />
        </DesktopImageWrapper>
        <MobileImageWrapper>
          <Image height={40} width={60}
          alt={"aubry-lungu-logo"} src={"/vercel.svg"} />
        </MobileImageWrapper>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar)