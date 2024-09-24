import { useMemo } from "react";
import { GenreProps, WorkProps } from "../src/app/utils/typings";
import { useGetAwards } from "./getAwards";

export const useFilterWorksByGenre = (
  genres: GenreProps[],
  works: WorkProps[],
  activeGenreTab: number
) => {
  const { awards } = useGetAwards();

  return useMemo(() => {
    const activeGenre = genres[activeGenreTab];

    if (!activeGenre) return [];

    // get all works that have won an award
    if (activeGenre.name === "Awards") {
      const awardWorks = awards
        .map((award) =>
          works.find((work) => work.description === award.work.description)
        )
        .filter((work) => work !== undefined);

      return awardWorks;
    }

    return works.filter((work) => work.projectGenre.name === activeGenre.name);
  }, [genres, works, activeGenreTab]);
};
