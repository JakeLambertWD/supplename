import { useEffect, useState } from "react";
import { getWorks } from "../src/app/lib/sanity";
import { WorkProps } from "../src/app/utils/typings";

export const useGetWorks = () => {
  const [works, setWorks] = useState<WorkProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const workData = await getWorks();
      setWorks(workData);
    };
    fetchData();
  }, []);

  return { works };
};
