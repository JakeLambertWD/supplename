import { useEffect, useState } from "react";
import { getGenres, getWorks } from "../src/app/lib/sanity";
import { GenreProps, WorkProps } from "../src/app/utils/typings";

export const useFetchData = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [works, setWorks] = useState<WorkProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenres();
      genreData.push({ name: "Awards" });
      setGenres(genreData);
      const workData = await getWorks();
      setWorks(workData);
    };
    fetchData();
  }, []);

  return { genres, works };
};
