import {AllFunctions} from "./functions.component";
import {Home} from "./home.component";
import {Route} from "@angular/router";
import {editorRouterConfig} from "./editor-router-config";


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
    ...editorRouterConfig,
    {
        path: 'git',
        component: AllFunctions
    },
    fallbackRoute,
    indexRoute
];
