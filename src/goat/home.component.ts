
import {Component} from "@angular/core";
import {goatData} from "./goatData";


@Component({
    selector: 'home',
    template: `

        <img class="goat-image" 
            src="./GoAT.png">
        
        <div class="home-screen">
            <h2>Additional Testsuites :</h2>
            <goat-list [goats]="goats"></goat-list>        
        </div>


    `
})
export class Home {

    goats = goatData.goat;



}