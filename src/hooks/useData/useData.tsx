import useSWR from 'swr';
import fetchData from 'src/helpers/fetchData/fetchData';

export type FetchMethod = 'GET' | 'POST';

interface UseDataParams {
  url: string;
  method: FetchMethod;
  headers?: {
    [key: string]: string;
  };
  refreshInterval?: number;
}

const useData = ({
  url,
  method,
  headers,
  refreshInterval,
}: UseDataParams) =>
  useSWR(
    url,
    // istanbul ignore next
    () => fetchData({ url, method, headers }),
    {
      refreshInterval: refreshInterval || 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      suspense: true,
    }) as unknown;

export default useData;
