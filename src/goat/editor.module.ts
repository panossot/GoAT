

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EditorBox} from "./editorbox";
import {Editor} from "./editor.component";
import {RouterModule} from "@angular/router";


const routerConfig = [
    {
        path: '',
        component: Editor
    }
];


@NgModule({
    imports: [CommonModule, Editor,
        RouterModule.forChild(routerConfig)],
    declarations: [EditorBox],
})
export default class GoatModule {

}