$(document).ready(function (){
  function searchRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/search/repositories?q=${searchTerms')
  req.send()
}
});
