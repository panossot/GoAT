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

app.route('/gitclone/:gitnum/:gitbranch')
    .post((req,res) => {
        const gitatnum = req.params.gitnum;
        const gitbranch = req.params.gitbranch;
        let goaturl = null;
        for (let goat of goats['goat']) {
            if(goat.id == gitatnum) {
                goaturl = goat.giturl;
            }
        }
        const execSync = require('child_process').execSync;
        const output = execSync('git clone '+goaturl+' -b '+gitbranch, { encoding: 'utf-8' });
        console.log('Cloning:\n', output);
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
        if(clonedir!='') {
            const output = execSync('cd '+clonedir, { encoding: 'utf-8' });
            console.log('cd '+clonedir+':\n', output);
            const output0 = execSync('git add .', { encoding: 'utf-8' });
            console.log('Git addition done:\n', output0);
            try {
                const output1 = execSync('git commit -m "'+gitcommitmessage+'"', { encoding: 'utf-8' });
                console.log('Git commit done:\n', output1);
            }finally{
                const output2 = execSync('git push '+gitrepo+' '+gitbranch, { encoding: 'utf-8' });
                console.log('Git push done:\n', output2);
                res.status(200).send();
                console.log('Commit and push of ', goaturl,' is done.');
            }
        }
    });
    
function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/goat' });
}

app.use(redirectRouterLessonUnmatched);


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

