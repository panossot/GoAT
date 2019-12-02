import {Component} from "@angular/core";
import {goatData} from "./goatData";
import {GoatList} from "./goat-list.component";
import {Chat} from "./chat";



@Component({
    selector: 'goat',
    template: `

        <h1>Editor</h1>

        <chat></chat>
        
    `
})
export class Goat {

   // goat = goatData.goat;

}