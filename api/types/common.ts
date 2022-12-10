export interface GetInfinitePagesInterface<T> {
  nextPage?: number;
  currentPage?: number;
  records: T[];
  totalCount: number;
  pageSize: number;
  pagesCount: number;
}

export type APIErrorResponse = {
  error: string;
  error_description: string;
};
