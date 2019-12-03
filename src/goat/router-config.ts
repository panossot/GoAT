import {AllFunctions} from "./functions.component";
import {Home} from "./home.component";
import {Route} from "@angular/router";
import {Editor} from "./editor.component";


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
    {
        path: 'editor',
        component: Editor
    },
    {
        path: 'git',
        component: AllFunctions
    },
    fallbackRoute,
    indexRoute
];
