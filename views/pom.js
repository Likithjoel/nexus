var deployer = require('nexus-deployer');
 
var release = {
    groupId: 'nexus-deployer',
    artifactId: 'nexus-deployer',
    version: '1.0',
    packaging: 'zip',
    auth: {
      username:'admin',
      password:'admin123'
    },
    pomDir: 'build/pom',
    url: 'http://54.236.65.251:8081/nexus/content/repositories/mern/',
    artifact: 'build/nexus-deployer.zip',
    noproxy: '54.236.65.251',
    cwd: ''
};
 
 
deployer.deploy(release, function(){
    // your async call back here 
    // done(); 
});
