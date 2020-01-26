
import {Component, OnInit} from "@angular/core";
import {goatData} from "./goatData";
import {GoatService} from "./goat.service";

@Component({
    selector: 'functions',
    template: ` 
    

        <h1>Git Functions</h1>

        <b>Github Repository : </b>
        <br/>
        <input type="text" id="repoName" name="repo" list="repoList" style="min-width:500px;"/>
        <datalist id="repoList">
            <option *ngFor="let goat of goats" value="{{goat.giturl}}">{{goat.giturl}}</option>
        </datalist>
        <br/><br/>
        <b>Clone Branch : </b>
        <br/>
        <input type="text" id="branch" name="directory" style="min-width:500px;" value="master"/>
        <br/><br/>
        <b>Clone Directory : </b>
        <br/>
        <input type="text" id="clonedirectory" name="clonedirectory" style="min-width:500px;" value="CloneDirectoryAT"/>
        <br/><br/>
        <b>Commit Message : </b>
        <br/>
        <input type="text" name="commitmessage" style="min-width:500px;" value="commit message ..."/>
        <br/><br/>
        <table class="buttons" style="min-width:500px;">
                <tr>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <div id='clone' (click)="goatService.gitClone(getCloneRepoId(),getCloneBranch(),getCloneDir())" class='button'>Clone Repository</div>
                    </td>
                    <td style="width=250px; padding: 10px 10px 10px 10px; align: center;">
                        <div id='commit' (click)="goatService.gitCommitPush(getCloneRepoId(),'origin','master:testrepo3','ArtemisActivemqAT2','Test commit message ...')" class='button'>Commit and Push</div>
                    </td>
                </tr>
           </table>

    `
})
export class AllFunctions {

    goats = goatData.goat;

    constructor(private goatService: GoatService) {
    }
    
    getCloneRepoId() {
        let goatRepoId = 0;
        for (let goat of this.goats) {
            if (goat.giturl == document.getElementById('repoName').value) {
                goatRepoId = goat.id;
            }
        }
        return goatRepoId;
    }
    
    getCloneBranch() {
        let goatBranch = null;
        goatBranch = document.getElementById('branch').value;
        
        return goatBranch;
    }
    
    getCloneDir() {
        let goatDir = null;
        goatDir = document.getElementById('clonedirectory').value;
        
        return goatDir;
    }
}