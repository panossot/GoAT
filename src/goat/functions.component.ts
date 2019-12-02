
import {Component} from "@angular/core";
import {goatData} from "./goatData";


@Component({
    selector: 'functions',
    template: `

        <h1>Git Functions</h1>

        <b>Github Repository : </b>
        <br/>
        <input type="text" name="product" list="productName" style="min-width:500px;"/>
        <datalist id="productName">
            <option *ngFor="let goat of goats" value="{{goat.giturl}}">{{goat.giturl}}</option>
        </datalist>
        <br/><br/>
        <b>Clone Directory : </b>
        <br/>
        <input type="text" name="directory" style="min-width:500px;"/>
        <br/><br/>
        <b>Clone Branch : </b>
        <br/>
        <input type="text" name="directory" style="min-width:500px;" value="master"/>
        <br/><br/>
        <table class="buttons" style="min-width:500px;">
                <tr>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <button>Clone Repository</button>
                    </td>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <button>Commit and Push</button>
                    </td>
                </tr>
           </table>

    `
})
export class AllFunctions {

    goats = goatData.goat;


}