
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";

@Injectable()
export class GoatService {
    
    
    constructor(private http: Http) {

    }

    gitClone(gitnum,gitbranch,clonedir) {
        this.http.post(`/gitclone/${gitnum}/${gitbranch}/${clonedir}`, xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }

    gitCommitPush(gitnum,gitrepo,gitbranch,clonedir,commitmessage) {
        this.http.post(`/gitcommitpush/${gitnum}/${gitrepo}/${gitbranch}/${clonedir}/${commitmessage}`, xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }
}