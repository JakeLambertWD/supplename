import { useEffect, useMemo, useState } from "react";
import { getWorksByGenre, getWorksWithAwards } from "@/app/lib/sanity";

export const useFilterWorksByGenre = (activeGenreName: string) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let worksData = [];
      if (activeGenreName === "Awards") {
        const awardsData = await getWorksWithAwards();
        worksData = awardsData.map((award: any) => award.work);
      } else {
        worksData = await getWorksByGenre(activeGenreName);
      }
      setWorks(worksData);
    };

    fetchData();
  }, [activeGenreName]);

  const memoizedWorks = useMemo(() => works, [works]);

  return memoizedWorks;
};
