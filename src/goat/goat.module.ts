

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Chat} from "./chat";
import {Goat} from "./goat.component";
import {RouterModule} from "@angular/router";


const routerConfig = [
    {
        path: '',
        component: Goat
    }
];


@NgModule({
    imports: [CommonModule, Goat,
        RouterModule.forChild(routerConfig)],
    declarations: [Chat],
})
export default class GoatModule {

}