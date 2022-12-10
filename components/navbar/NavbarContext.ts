import * as React from "react";

/**
 * @ignore - internal component.
 */
const NavbarContext = React.createContext({});

if (process.env.NODE_ENV !== "production") {
  NavbarContext.displayName = "NavContext";
}

export default NavbarContext;
