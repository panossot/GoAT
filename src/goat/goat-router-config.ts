


import {GoatList} from "./goat-list.component";


export const goatRouterConfig = [
    {
        path: 'goat',
        loadChildren: '/src/goat/goat.module'
    },
    {
        path: 'goatlist',
        component: GoatList,
        outlet: 'goatlist'
    }
];