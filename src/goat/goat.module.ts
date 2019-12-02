

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Chat} from "./chat";
import {Goat} from "./goat.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared.module";


const routerConfig = [
    {
        path: '',
        component: Goat
    }
];


@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routerConfig), SharedModule],
    declarations: [Chat],
})
export default class GoatModule {

}