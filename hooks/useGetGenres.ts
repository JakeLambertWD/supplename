import { useEffect, useState } from "react";
import { getGenres } from "../src/app/lib/sanity";
import { GenreProps } from "../src/app/utils/typings";

export const useGetGenres = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenres();
      genreData.push({ name: "Awards" });
      setGenres(genreData);
    };
    fetchData();
  }, []);

  return { genres };
};
