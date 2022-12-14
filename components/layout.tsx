import { Container, CssBaseline } from "@mui/material";
import Navbar from "@components/navbar";
import { Footer } from "./footer/Index";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <nav>
      <Navbar {...props} />
      </nav>
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};
