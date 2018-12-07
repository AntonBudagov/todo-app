import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Urgency, Task} from './task/model/task.interface';

const lorem_20 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere maxime quaerat sapiente sit!
                 Consectetur dolorum eligendi odio quibusdam ratione!`;
const lorem_50 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem earum eius exercitationem nisi
                 nulla quibusdam quos. A aliquid asperiores atque, corporis debitis delectus distinctio dolore doloribus
                 ducimus eaque excepturi fugiat iste itaque iusto, laboriosam molestiae optio perspiciatis provident quibusdam
                 quo ratione repudiandae saepe sapiente sequi soluta unde vero voluptatem?`;

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tasks: Task[] = [
            {
                id: 100,
                title: 'Купить продуктов',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 101,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 102,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 103,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                created_at: '2018-24-12'
            },
            {
                id: 1010,
                title: 'Купить продуктов',
                description: lorem_20,
                created_at: '2016-24-12'
            },
            {
                id: 1011,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2015-24-12'
            },
            {
                id: 1012,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-14-12'
            },
            {
                id: 1013,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                created_at: '2018-24-12'
            },
            {
                id: 1200,
                title: 'Купить продуктов',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 1201,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 1022,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 1023,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                created_at: '2018-24-12'
            },
            {
                id: 10210,
                title: 'Купить продуктов',
                description: lorem_20,
                created_at: '2016-24-12'
            },
            {
                id: 10211,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2015-24-12'
            },
            {
                id: 10212,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-14-12'
            },
            {
                id: 10123,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                created_at: '2018-24-12'
            },
            {
                id: 120121,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 102222,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-24-12'
            },
            {
                id: 120223,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                created_at: '2018-24-12'
            },
            {
                id: 102210,
                title: 'Купить продуктов',
                description: lorem_20,
                created_at: '2016-24-12'
            },
            {
                id: 102211,
                title: 'Buy product',
                description: lorem_20,
                created_at: '2015-24-12'
            },
            {
                id: 102212,
                title: 'Доделать работу',
                description: lorem_20,
                created_at: '2017-14-12'
            },
        ];
        return {tasks};
    }
}
