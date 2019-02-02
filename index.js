
function getRepositories() {
    const req = new XMLHttpRequest();
    req.addEventListener('load', showRepositories);
    req.open('GET','https://api.github.com/users.octocat/repos');
    req.send();
}


function showRepositories(event, data){
    const repos = JSON.parse(this.responseText);
    // const repoList = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a></li>')
    // .join('')}</ul>`; It giving to us in the Handle

    const template = Handlebars.compile(src);
    const repoList = template(repos)

    document.getElementById('repositories').innerHTML = repoList;
}

 document.addEventListener('DOMContentLoaded', 
    function(event){
        Handlebars.registerPartial(
            'authorPartial',
            document.getElementById('author-partial-template').innerHTML
        );
    })