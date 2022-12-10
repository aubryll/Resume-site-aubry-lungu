import { Container, CssBaseline } from "@mui/material";
import Navbar from "@components/navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Navbar {...props} />
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};
