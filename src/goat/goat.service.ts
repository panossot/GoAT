
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";

@Injectable()
export class GoatService {
    
    
    constructor(private http: Http) {

    }

    gitClone(gitnum,gitbranch) {
        this.http.post(`/gitclone/${gitnum}/${gitbranch}`, xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }

    gitCommitPush(gitnum,gitbranch,gitrepo,commitmessage) {
        this.http.post(`/gitcommitpush/${gitnum}/${gitrepo}/${gitbranch}/${commitmessage}`, xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }
}