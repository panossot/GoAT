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
                
    document.querySelector("#save").addEventListener("click", function(e) {
			// Save it
			new JSFile(tbox.value, fileName).save({ event: e }).then(function(file) {

				console.log(file);

                        });
                                     
    
		});
                
   document.querySelector("#save").addEventListener("click", function(e) {
                    setTimeout(function(){
			document.getElementById('saveToPath').click(); }
                    ,3000);                 
		});
                
    document.querySelector("#save2").addEventListener("click", function(e) {
			// Save it
			new JSFile(tbox.value, fileName).save({ event: e }).then(function(file) {

				console.log(file);

			});

		});
                
    document.querySelector("#save2").addEventListener("click", function(e) {
                    setTimeout(function(){
			document.getElementById('saveToPath2').click(); }
                    ,3000);                 
		});
}


@Component({
    selector: 'editor',
    template: `

        <h1>Editor</h1>

        <div id='pick' class='button'>Pick a file</div>
        
        <div id='save' class='button'>Save to file as</div>
        <input type="text" id="savepath" style="min-width:500px;" value="/home/..."/>
        <br/>
        <div id='saveToPath' (click)="saveToPath('savepath');" class='button' style="display:none">Save to file as</div>
        
        
        
        <br/><br/><br/>
        
        <editorbox></editorbox>
        
        <br/><br/><br/>
        
        <div id='pick2' class='button'>Pick a file</div>
        <div id='save2' class='button'>Save to file as</div>
        <input type="text" id="savepath2" style="min-width:500px;" value="/home/..."/>
        <br/>
        <div id='saveToPath2' (click)="saveToPath('savepath2');" class='button' style="display:none">Save to file as</div>
    `
})

export class Editor implements OnInit {
    
    constructor(private goatService: GoatService) {
    }
    
    
    saveToPath(savepath) {
        
        let processedpath=document.getElementById(savepath).value;
        let goatService = this.goatService;
        
        console.log('processedpath:\n', processedpath);
        
        while (processedpath.includes('/')) {
            processedpath=processedpath.replace("/","%2F");
        }
        
        console.log('processedpath:\n', processedpath);
        
        goatService.saveAs(processedpath);

        alert(document.getElementById(savepath).value + " is  saved.");
    }
    
    ngOnInit(){
        browse();
    }
}

