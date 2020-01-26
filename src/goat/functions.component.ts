
import {Component, OnInit} from "@angular/core";
import {goatData} from "./goatData";
import {GoatService} from "./goat.service";

function gitfunctions() {
    
    

}

@Component({
    selector: 'functions',
    template: ` 
    

        <h1>Git Functions</h1>

        <b>Github Repository : </b>
        <br/>
        <input type="text" name="repo" list="repoName" style="min-width:500px;"/>
        <datalist id="repoName">
            <option *ngFor="let goat of goats" value="{{goat.giturl}}">{{goat.giturl}}</option>
        </datalist>
        <br/><br/>
        <b>Clone Branch : </b>
        <br/>
        <input type="text" name="directory" style="min-width:500px;" value="master"/>
        <br/><br/>
        <b>Clone Directory : </b>
        <br/>
        <input type="text" name="clonedirectory" style="min-width:500px;" value="ArtemisActivemqAT"/>
        <br/><br/>
        <b>Commit Message : </b>
        <br/>
        <input type="text" name="commitmessage" style="min-width:500px;" value="commit message ..."/>
        <br/><br/>
        <table class="buttons" style="min-width:500px;">
                <tr>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <div id='clone' (click)="goatService.gitClone('6','master')" class='button'>Clone Repository</div>
                    </td>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <div id='commit' (click)="goatService.gitCommitPush('6','origin','master:testrepo2','ArtemisActivemqAT','Test commit message ...')" class='button'>Commit and Push</div>
                    </td>
                </tr>
           </table>

    `
})
export class AllFunctions {

    goats = goatData.goat;
    goatRepoId = 0;

    constructor(private goatService: GoatService) {
    }
    
    getCloneRepoId() {
        for (let goat of goats) {
            if(goat.giturl == document.getElementById('repoName').text) {
                goatRepoId = goat.id;
            }
        }
    }
}