export interface HomePageWorkProps {
  name: string;
  order: string;
  featuredWork: WorkProps;
}

export interface WorkProps {
  client: string;
  description: string;
  overview: string;
  projectGenre: GenreProps;
  tileImage: string;
  videoURL: string;
  youtubeID: string;
  award: AwardProps[];
}
export interface GenreProps {
  name: string;
}

export interface AwardProps {
  title: string;
  year: string;
}
