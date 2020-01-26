import {Component, OnInit} from "@angular/core";

function browse() {
    var tbox = document.getElementById('box');
    if(sessionStorage.getItem("boxtext")!='null')
        tbox.value = sessionStorage.getItem("boxtext");
    var fileName = "MFile.txt"
    
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
				alert(file.name + " is  saved.");

			});

		});
    document.querySelector("#save2").addEventListener("click", function(e) {
			// Save it
			new JSFile(tbox.value, fileName).save({ event: e }).then(function(file) {

				console.log(file);
				alert(file.name + " is  saved.");

			});

		});

}


@Component({
    selector: 'editor',
    template: `

        <h1>Editor</h1>

        <div id='pick' class='button'>Pick a file</div>
        <div id='save' class='button'>Save to file</div>
        
        <br/><br/><br/>
        
        <editorbox></editorbox>
        
        <br/><br/><br/>
        
        <div id='pick2' class='button'>Pick a file</div>
        <div id='save2' class='button'>Save to file</div>
    `
})

export class Editor implements OnInit {
    
    ngOnInit(){
        browse();
    }
}

