import {AllFunctions} from "./functions.component";
import {Home} from "./home.component";
import {Route} from "@angular/router";
import {goatRouterConfig} from "./goat-router-config";


const indexRoute:Route = {
    path: "",
    component: Home
};

const fallbackRoute:Route = {
    path: '**',
    component: Home
};

export const routeConfig = [
    {
        path: 'home',
        component: Home
    },
    ...goatRouterConfig,
    {
        path: 'goat',
        component: AllFunctions
    },
    fallbackRoute,
    indexRoute
];
