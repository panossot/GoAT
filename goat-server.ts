declare const require;

import {goatData} from "./src/goat/goatData";

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');


var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

const goats =goatData;

app.route('/gitclone/:gitnum/:gitbranch/:clonedir')
    .post((req,res) => {
        const gitatnum = req.params.gitnum;
        const gitbranch = req.params.gitbranch;
        const clonedir = req.params.clonedir;
        let goaturl = null;
        for (let goat of goats['goat']) {
            if(goat.id == gitatnum) {
                goaturl = goat.giturl;
            }
        }
        const execSync = require('child_process').execSync;
        if(clonedir=='null') {
            const output = execSync('git clone '+goaturl+' -b '+gitbranch, { encoding: 'utf-8' });
            console.log('Cloning:\n', output);
        }else{
            const output1 = execSync('git clone '+goaturl+' -b '+gitbranch + ' ' + clonedir, { encoding: 'utf-8' });
            console.log('Cloning:\n', output1);
        }
        res.status(200).send();
        console.log('Cloning of ', goaturl,' is done.');
    });
    
app.route('/gitcommitpush/:gitnum/:gitrepo/:gitbranch/:clonedir/:gitcommitmessage')
    .post((req,res) => {
        const gitatnum = req.params.gitnum;
        const gitbranch = req.params.gitbranch;
        const gitrepo = req.params.gitrepo;
        const gitcommitmessage = req.params.gitcommitmessage;
        const clonedir = req.params.clonedir;
        let goaturl = null;
        for (let goat of goats['goat']) {
            if(goat.id == gitatnum) {
                goaturl = goat.giturl;
            }
        }
        const execSync = require('child_process').execSync;
        if(clonedir!='null') {
            const output0 = execSync('cd ' + clonedir + ';git add .', { encoding: 'utf-8' });
            console.log('Git addition done:\n', output0);
            try {
                const output1 = execSync('cd ' + clonedir + ';git commit -m "'+gitcommitmessage+'"', { encoding: 'utf-8' });
                console.log('Git commit done:\n', output1);
            }finally{
                const output2 = execSync('cd ' + clonedir + ';git push '+gitrepo+' '+gitbranch, { encoding: 'utf-8' });
                console.log('Git push done:\n', output2);
                res.status(200).send();
                console.log('Commit and push of ', goaturl,' is done.');
            }
        }
    });
    
 app.route('/savefile/:savepath')
    .post((req,res) => {
        const savepath = req.params.savepath.replace("%2F","/");
        const saveFileName = 'GoATFile.txt';
        console.log('savepath:\n', savepath);
        const execSync = require('child_process').execSync;
        if(savepath!='null' && savepath.includes('/')) {
            const output = execSync('savepath='+savepath+'; savedirpath=${savepath%/*}; mkdir -p $savedirpath; mv $HOME/Downloads/'+saveFileName+' '+savepath, { encoding: 'utf-8' });
            console.log('Git path save is done:\n', output);
            res.status(200).send();
            console.log('File save at ', savepath,' is done.');
        }
    });
    
function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/goat' });
}

app.use(redirectRouterLessonUnmatched);


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

