

import {NgModule} from "@angular/core";
import {GoatList} from "./goat-list.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [GoatList],
    exports: [GoatList],
    imports: [CommonModule]

})
export class SharedModule {

}