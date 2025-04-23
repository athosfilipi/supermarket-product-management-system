export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type SearchRequestParams = {
  page?: number;
  limit?: number;
  search?: string;
};
export type findAllParams<T> = (params: SearchRequestParams) => Promise<T>;
