export interface ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

class Course implements ICourse {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
}

