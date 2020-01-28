import {Component, OnInit} from "@angular/core";
import {GoatService} from "./goat.service";

function browse() {
    var tbox = document.getElementById('box');
    var tpath = document.getElementById('savepath');
    var tpath2 = document.getElementById('savepath2');
    if(sessionStorage.getItem("boxtext")!='null')
        tbox.value = sessionStorage.getItem("boxtext");
    if(sessionStorage.getItem("savepathtext")!='null')
        tpath.value = sessionStorage.getItem("savepathtext");
    if(sessionStorage.getItem("savepath2text")!='null')
        tpath2.value = sessionStorage.getItem("savepath2text");
    var fileName = "GoATFile.txt"
    
    document.querySelector("#savepath").addEventListener("change", function(e) {
			sessionStorage.setItem("savepathtext",tpath.value);
		});
                
    document.querySelector("#savepath2").addEventListener("change", function(e) {
			sessionStorage.setItem("savepath2text",tpath2.value);
		});
                
    document.querySelector("#pick").addEventListener("change", function(e) {
			JSFileManager.pick({ event: e }).then(function(file) {
				return file.getString();
			}).then(function(data) {
                            sessionStorage.setItem("boxtext",data);
                            document.getElementById('box').value = data;
			})
		});
                
    document.querySelector("#pick").addEventListener("click", function(e) {
			JSFileManager.pick({ event: e }).then(function(file) {
				return file.getString();
			}).then(function(data) {
                            sessionStorage.setItem("boxtext",data);
                            document.getElementById('box').value = data;
			})
		});

    document.querySelector("#pick2").addEventListener("click", function(e) {
			JSFileManager.pick({ event: e }).then(function(file) {
				return file.getString();
			}).then(function(data) {
                            sessionStorage.setItem("boxtext",data);
                            tbox.value = data;
			})
		});
                
 /*   document.querySelector("#save").addEventListener("click", function(e) {
			// Save it
			new JSFile(tbox.value, fileName).save({ event: e }).then(function(file) {

				console.log(file);
				alert(tpath.value + " is  saved.");

			});

		});
    document.querySelector("#save2").addEventListener("click", function(e) {
			// Save it
			new JSFile(tbox.value, fileName).save({ event: e }).then(function(file) {

				console.log(file);
				alert(tpath2.value + " is  saved.");

			});

		});
*/
}


@Component({
    selector: 'editor',
    template: `

        <h1>Editor</h1>

        <div id='pick' class='button'>Pick a file</div>
        <div id='save' (click)="goatService.saveAs(pathProcessing('savepath'))" class='button'>Save to file as</div>
        <input type="text" id="savepath" style="min-width:500px;" value="/home/..."/>
        
        <br/><br/><br/>
        
        <editorbox></editorbox>
        
        <br/><br/><br/>
        
        <div id='pick2' class='button'>Pick a file</div>
        <div id='save2' (click)="goatService.saveAs(pathProcessing('savepath2'))" class='button'>Save to file as</div>
        <input type="text" id="savepath2" style="min-width:500px;" value="/home/..."/>
    `
})

export class Editor implements OnInit {
    
    constructor(private goatService: GoatService) {
    }
    
    pathProcessing(savepath) {
        new JSFile(document.getElementById('box').value, 'GoATFile.txt').save(
            ).then(function(file) {

				console.log(file);
			});
        

        for(var i=0; i<10000000; i++){}
        
        let processedpath=document.getElementById(savepath).value;
        
        console.log('processedpath:\n', processedpath);
        
        while (processedpath.includes('/')) {
            processedpath=processedpath.replace("/","%2F");
        }
        
        console.log('processedpath:\n', processedpath);
        
     //   alert(document.getElementById(savepath).value + " is  saved.");
        
        return processedpath;
    }
    
    ngOnInit(){
        browse();
    }
}

