import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function PaginationControls({
  page,
  totalPages,
  onChange,
}: PaginationControlsProps) {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onChange(value)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
