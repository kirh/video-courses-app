import { ICourse } from './shared/course.model';

export const COURSES: ICourse[] = [
  {
    id: 1,
    title: 'Course1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo velit sem, ut dapibus dolor hendrerit id. Cras nec suscipit felis. Fusce scelerisque ipsum augue, ut dignissim dui elementum id. Aliquam mollis tincidunt turpis condimentum dapibus. Maecenas sed augue et ipsum pharetra bibendum. Cras nec finibus nisi. Integer egestas tellus non risus fermentum mollis ac eu ligula. Aliquam dui ipsum, pretium a tempor sed, laoreet non nisl.',
    duration: 50,
    creationDate: new Date(),
    isTopRated: false
  },
  {
    id: 2,
    title: 'Course2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo velit sem, ut dapibus dolor hendrerit id. Cras nec suscipit felis. Fusce scelerisque ipsum augue, ut dignissim dui elementum id. Aliquam mollis tincidunt turpis condimentum dapibus. Maecenas sed augue et ipsum pharetra bibendum. Cras nec finibus nisi. Integer egestas tellus non risus fermentum mollis ac eu ligula. Aliquam dui ipsum, pretium a tempor sed, laoreet non nisl.',
    duration: 60,
    creationDate: new Date(new Date().setDate(32)),
    isTopRated: false
  },
  {
    id: 3,
    title: 'Course3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo velit sem, ut dapibus dolor hendrerit id. Cras nec suscipit felis. Fusce scelerisque ipsum augue, ut dignissim dui elementum id. Aliquam mollis tincidunt turpis condimentum dapibus. Maecenas sed augue et ipsum pharetra bibendum. Cras nec finibus nisi. Integer egestas tellus non risus fermentum mollis ac eu ligula. Aliquam dui ipsum, pretium a tempor sed, laoreet non nisl.',
    duration: 1000,
    creationDate: new Date(new Date().setDate(-15)),
    isTopRated: true
  },
  {
    id: 4,
    title: 'Course4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo velit sem, ut dapibus dolor hendrerit id. Cras nec suscipit felis. Fusce scelerisque ipsum augue, ut dignissim dui elementum id. Aliquam mollis tincidunt turpis condimentum dapibus. Maecenas sed augue et ipsum pharetra bibendum. Cras nec finibus nisi. Integer egestas tellus non risus fermentum mollis ac eu ligula. Aliquam dui ipsum, pretium a tempor sed, laoreet non nisl.',
    duration: 1050,
    creationDate: new Date(new Date().setDate(-15)),
    isTopRated: false
  }
];
