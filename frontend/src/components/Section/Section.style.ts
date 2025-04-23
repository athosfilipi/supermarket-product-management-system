import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),

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

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flex: 1,
  overflow: "auto",
  boxSizing: "border-box",
}));

const ContentCenter = styled(Content)(({ theme }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
  flexDirection: "column",
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "27px",
  marginBottom: theme.spacing(0),
  fontWeight: 600,
  color: "#222",
}));

export const Section = Object.assign(Container, {
  Container,
  Header: Object.assign(Header, { Title: Title }),
  Content: Object.assign(Content, { Center: ContentCenter }),
});
