import { useMemo } from "react";
import { GenreProps, WorkProps } from "../src/app/utils/typings";

export const useFilterWorksByGenre = (
  genres: GenreProps[],
  works: WorkProps[],
  activeGenreTab: number
) => {
  return useMemo(() => {
    const activeGenre = genres[activeGenreTab];
    if (!activeGenre) return [];

    if (activeGenre.name === "Awards") {
      return works.filter((work) => work.award);
    }

    return works.filter((work) => work.projectGenre.name === activeGenre.name);
  }, [genres, works, activeGenreTab]);
};
