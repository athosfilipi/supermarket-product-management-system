import { styled } from "@mui/system";

export const TableStyled = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("sm")]: {
    display: "block",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
}));

export const TableHeadCell = styled("th")<{ width?: string }>(({ theme, width }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  ...(width && { width }),
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    padding: theme.spacing(0.5),
  },
}));

export const TableBodyRow = styled("tr")(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export const TableBodyCell = styled("td")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    display: "block",
    width: "100%",
    fontSize: "0.875rem",
    padding: theme.spacing(0.5),
    border: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export const ImageCellContainer = styled("td")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 100,
  height: 100,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    padding: theme.spacing(0.5),
    border: "none",
  },
}));

export const Table = Object.assign(TableStyled, { 
  HeadCell: TableHeadCell,
  BodyRow: TableBodyRow,
  BodyCell: TableBodyCell,
  ImageCellContainer: ImageCellContainer,
 });
