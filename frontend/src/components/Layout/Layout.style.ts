import { Container as ContainerMUI, styled } from "@mui/system";

const Container = styled(ContainerMUI)(({ theme }) => ({
  // border: "1px solid red",
  padding: "20px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "540px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "720px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "960px",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1140px",
  },
  "@media (min-width:1400px)": {
    maxWidth: "1320px",
  },
}));

export const Layout = Object.assign(Container, {
  Container: Container,
});
