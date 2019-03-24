import Search from './Search.example';
import SearchMinCharacters from './Search.minCharacters.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Search',
        description: 'A basic search element',
        component: Search,
      },
      {
        title: 'Min characters',
        description: 'An example of minimal characters to search requirement (min 3)',
        component: SearchMinCharacters,
      },
    ],
  },
];