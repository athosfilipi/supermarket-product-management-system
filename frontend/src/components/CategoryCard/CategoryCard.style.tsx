// src/styles/categoryCard.style.tsx

import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

// .single_category
export const CategoryContainer = styled(Box)({
  padding: "30px 15px",
  textAlign: "center",
  borderRadius: "10px",
  marginBottom: "1px",
  border: "1px solid #dcdcdc",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  minWidth: "152px",
  maxHeight: "202px",
  marginRight: "30px",
  "&:hover": {
    border: "1px solid #01693A70",
    boxShadow: "0 4px 10px rgba(1, 105, 58, 0.1)",
  },
  "&:hover .category-title": {
    color: "#01693A",
  },
  "&:hover .category-description": {
    color: "#01693A",
  },
  "&:hover .category-image": {
    transform: "scale(1.05)",
  },
});

export const CategoryImage = styled("img")({
  maxWidth: "100%",
  width: "65px",
  background: "#01693a08",
  borderRadius: "50%",
  padding: "10px",
  marginBottom: "7px",
  display: "inline-block",
  transition: "transform 0.3s ease-in-out",
});

export const CategoryTitle = styled(Typography)({
  color: "#444",
  fontSize: "19px",
  fontWeight: 500,
  marginTop: "10px",
  marginBottom: "3px",
  transition: "transform 0.5s ease-in-out",
});

export const CategoryDescription = styled(Typography)({
  color: "#555",
  fontSize: "14px",
  fontWeight: 400,
});
