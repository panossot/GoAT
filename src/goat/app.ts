
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routeConfig} from "./router-config";
import {Home} from "./home.component";
import {GoatList} from "./goat-list.component";
import {AllFunctions} from "./functions.component";
import {Editor} from "./editor.component";
import {EditorBox} from "./editorbox"


@Component({
    selector:'app',
    template: `

  <header class="l-header v-center-parent">
    <img class="v-center" routerLink="home"
        src="./GoAT.png">
    
    <ul class="top-menu disable-link-styles" 
        routerLinkActive="menu-active" >
        <li>
            <a routerLink="" 
            routerLinkActive="menu-active" 
            [routerLinkActiveOptions]="{exact:true}">GoAT Info</a>
        </li>
        <li>
            <a routerLinkActive="menu-active"  
                routerLink="editor">Editor</a>
        </li>
        <li>
            <a routerLinkActive="menu-active" 
                [routerLink]="['git']">Git Functions</a>
        </li>
    </ul>
            
  </header>

  <main class="l-main l-sample-app">
    
    <div>
    
        <div class="main-container">
            <div class="list">
                <router-outlet></router-outlet>            
            </div>
            <div class="list">
                <router-outlet name="goatlist"></router-outlet>
            </div>        
        </div>
    
    </div>

  </main>

        `
})
export class App {



}



@NgModule({
    declarations: [App, Home, GoatList, AllFunctions, Editor, EditorBox],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routeConfig)
    ],
    bootstrap: [App]

})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
















