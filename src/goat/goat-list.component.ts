
import {Component, Input} from "@angular/core";


@Component({
    selector:'goat-list',
    template: `
            <table class="goat-list card card-strong">
                <tr *ngFor="let goat of goats">
                    <td style="width=100px; padding: 10px 10px 10px 10px;">
                        <img class="goat-logo" 
                        src="./GoAT.png">  
                    </td>
                    <td style="width=400px; padding: 10px 10px 10px 10px;">
                        {{goat.description}}    
                    </td>
                    <td style="width=100px; padding: 10px 10px 10px 10px;">
                        <a href="{{goat.url}}" target="_blank">
                            <button>View</button>
                        </a>
                    </td>
                </tr>
           </table>

        `
})
export class GoatList {


    @Input()
    goats = [];


}