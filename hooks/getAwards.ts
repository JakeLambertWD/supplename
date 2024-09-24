import { useEffect, useState } from "react";
import { getAwards } from "../src/app/lib/sanity";
import { AwardPageProps } from "../src/app/utils/typings";

export const useGetAwards = () => {
  const [awards, setAwards] = useState<AwardPageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const awardData = await getAwards();
      setAwards(awardData);
    };

    fetchData();
  }, []);

  return { awards };
};
