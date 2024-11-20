export interface HomePageWorkProps {
  name: string;
  order: number;
  featuredWork: WorkProps;
}

export interface WorkProps {
  client: string;
  description: string;
  overview: string;
  projectGenre: GenreProps;
  tileImage: string;
  videoURL: string;
  videoPreview: string;
  youtubeID: string;
  award: AwardProps[];
  team: TeamProps[];
  movementGenres: MovementGenreProps[];
  workImages: WorkImageProps[];
  startTime: number;
}
export interface GenreProps {
  name: string;
}

export interface AwardProps {
  title: string;
  year: string;
}

export interface AwardPageProps {
  name: string;
  year: string;
  order: number;
  work: WorkProps;
}

interface TeamProps {
  name: string;
  role: string;
}

interface MovementGenreProps {
  name: string;
}

interface WorkImageProps {
  asset: {
    url: string;
  };
  alt: string;
}
