import React, { useState } from "react";
import { Section } from "@components/Section/Section.style";
import { Switch, FormControlLabel } from "@mui/material";

import TablePaginationControls from "@components/PaginationControls/TablePaginationControls";
import PaginationControls from "@components/PaginationControls/PaginationControls";

type Props = {
  page: number;
  limit: number;
  totalPages: number;
  products: any[];
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  useTablePagination?: boolean;
  setUseTablePagination?: (val: boolean) => void;
};

export default function ProductPaginationSwitcher({
  page,
  limit,
  totalPages,
  products,
  setPage,
  setLimit,
  useTablePagination: useTablePaginationProp,
  setUseTablePagination: setUseTablePaginationProp,
}: Props) {
  const [internalUseTablePagination, setInternalUseTablePagination] =
    useState<boolean>(true);

  const isControlled =
    useTablePaginationProp !== undefined &&
    setUseTablePaginationProp !== undefined;

  const useTablePagination = isControlled
    ? useTablePaginationProp
    : internalUseTablePagination;
  const setUseTablePagination = isControlled
    ? setUseTablePaginationProp
    : setInternalUseTablePagination;

  return (
    <>
      <Section>
        <Section.Content.Center>
          <FormControlLabel
            control={
              <Switch
                checked={useTablePagination}
                onChange={(e) => setUseTablePagination(e.target.checked)}
              />
            }
            label={
              useTablePagination
                ? "Modo Paginação por página"
                : "Modo Paginação por item"
            }
          />
        </Section.Content.Center>
      </Section>

      {useTablePagination ? (
        <Section>
          <Section.Content.Center>
            <TablePaginationControls
              page={page - 1}
              rowsPerPage={limit}
              totalItems={products.length * totalPages}
              onPageChange={(newPage: number) => setPage(newPage + 1)}
              onRowsPerPageChange={(newLimit: number) => setLimit(newLimit)}
            />
          </Section.Content.Center>
        </Section>
      ) : (
        <Section>
          <Section.Content.Center>
            <PaginationControls
              page={page}
              totalPages={totalPages}
              onChange={(value: number) => setPage(value)}
            />
          </Section.Content.Center>
        </Section>
      )}
    </>
  );
}
