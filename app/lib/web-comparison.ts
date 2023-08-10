import { useState } from "react";

const ENDPOINT = "https://webspeed-comparison.arrlancore.workers.dev/";

type Request = { urls: Array<string> };
export type SummaryWebSpeed = {
  website: string;
  timeMs: number;
  sizeKb: number;
  isWin: boolean;
};
type Response = {
  winWebsite: string;
  summary: Array<SummaryWebSpeed>;
};

export function filterValidUrls(urls: string[]) {
  let validated = [];
  if (Array.isArray(urls) === false) {
    validated = [];
  } else {
    validated = urls.filter((item) => item.search("https://") >= 0);
  }

  return validated.length >= 2;
}

const useWebComparison = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Response | undefined>();

  const reset = () => {
    setLoading(false);
    setError("");
    setData(undefined);
  };

  const mutate = async (payload: Request) => {
    setLoading(true);
    setError("");
    try {
      const result = await fetch(ENDPOINT, {
        body: JSON.stringify(payload),
        method: "POST",
      });

      const data: Response = await result.json();

      setData(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, mutate, loading, error, reset };
};

export default useWebComparison;
