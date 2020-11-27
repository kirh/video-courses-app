export interface ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  isTopRated: boolean;
}

class Course implements ICourse {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  isTopRated: boolean;
}

