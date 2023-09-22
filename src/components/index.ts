import Tab from './Tab.vue'
import { playCircle, search } from 'ionicons/icons';

const routes = [
    {
        name: 'Home',
        icon: playCircle
    },
    {
        name: 'Search',
        icon: search
    },
  ];

export {
    Tab,
    routes
}