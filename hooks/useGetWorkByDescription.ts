import { useEffect, useState } from "react";
import { WorkProps } from "../src/app/utils/typings";
import { getWorkByDescription } from "@/app/lib/sanity";

export const useGetWorkByDescription = (id: string) => {
  const [work, setWork] = useState<WorkProps | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const workByTitle = await getWorkByDescription(id);
      setWork(workByTitle[0]);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return { work, isLoading };
};
