import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
    { _id: 1, title: 'Install Angular CLI', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta error impedit rem. Aliquid amet, architecto culpa debitis facere incidunt modi velit? Delectus dicta doloribus iusto omnis quia quo sit.', image: 'https://static.journal-theme.com/1/image/cache/catalog/old/watch2-1000x1000.jpg', category: 'watch' },
    { _id: 2, title: 'Style app', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta error impedit rem. Aliquid amet, architecto culpa debitis facere incidunt modi velit? Delectus dicta doloribus iusto omnis quia quo sit.', image: 'https://static.journal-theme.com/1/image/cache/catalog/old/perfume6-1000x1000.jpg', category: 'perfume' },
    { _id: 3, title: 'Finish service functionality', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta error impedit rem. Aliquid amet, architecto culpa debitis facere incidunt modi velit? Delectus dicta doloribus iusto omnis quia quo sit.', image: 'https://static.journal-theme.com/1/image/cache/catalog/old/perfume5-1000x1000.jpg', category: 'perfume' },
    { _id: 4, title: 'Setup API', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta error impedit rem. Aliquid amet, architecto culpa debitis facere incidunt modi velit? Delectus dicta doloribus iusto omnis quia quo sit.', image: 'https://static.journal-theme.com/1/image/cache/catalog/old/watch4-1000x1000.jpg', category: 'watch' }
    ];
    return {products};
  }
}
