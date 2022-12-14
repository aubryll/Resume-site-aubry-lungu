import * as React from "react";
import Link from "next/link";
import { useTheme } from "@mui/material";

type CustomLinkProps = React.ComponentProps<typeof Link>;

const CusLink = ({ children, passHref, ...others }: CustomLinkProps) => {
  const theme = useTheme();
  let firstChild = React.Children.toArray(children)[0];

  if (React.isValidElement(firstChild))
    firstChild = React.cloneElement(firstChild, { ...others });

  return (
    <Link
      passHref={passHref}
      {...others}
      style={{
        color: theme.palette.secondary.light,
      }}
    >
      {firstChild}
    </Link>
  );
};

export const CustomLink = React.memo(CusLink);
