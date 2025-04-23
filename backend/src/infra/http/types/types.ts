export type SearchRequestParams = {
  page?: number;
  limit?: number;
  search?: string;
};
export type findAllParams<T> = (params: SearchRequestParams) => Promise<T>;
