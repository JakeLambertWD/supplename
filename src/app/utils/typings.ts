export interface WorkProps {
  title: string;
  client: string;
  youtubeID: string;
  logo: string;
  tileImage: string;
  videoURL: string;
}

export interface GenreProps {
  name: string;
}

export interface WorksProps {
  client: string;
  title: string;
  youtubeID: string;
  tileImage: string;
  projectGenre: GenreProps;
}

export interface AwardProps {
  name: string;
  order: string;
  work: WorksProps;
}
