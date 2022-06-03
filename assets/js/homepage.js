var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";
  console.log(data);

  // make a request to the url
  fetch(apiUrl)
  .then(function(response) {
  // request was successful
  if (response.ok) {
      response.json().then(function(data) {
        displayRepos(data, user);
      });
    } else {
      alert("Error: GitHub User Not Found");
    }
});
};
.catch(function(error) {
  // Notice this `.catch()` getting chained onto the end of the `.then()` method
  alert("Unable to connect to GitHub");
})

var repoContainerE1 = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#usurname");

// executed upon a form submission browser event.
var fromSubmitHandler = function(event) {
  
  event.preventDefault();
  // get value from input element
  var username = nameInputE1.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputE1.value = ";"
  } else {
    alert("please enter a GitHub usurname");
  }
  console.log(event);

};

// add the submit event listener
userFormE1.addEventListener("submit", fromSubmitHandler);

var displayRepos = function(repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);

// clear old content
  repoContainerE1.textContent = "";
  repoSearchTerm.textContent = searchTerm;
};

response.json().then(function(data) {
  displayRepos(data, user);
  // loop over repos
  for (var i = 0; i < repos.length; i++) {
    // format repo name
    var repoName = repos[i].owner.login + "/" + repos[i].name;
    // check if api returned any repos
if (repos.length === 0) {
  repoContainerEl.textContent = "No repositories found.";
  return;
}

    // create a container for each repo
    var repoE1 = document.createElement("div");
    repoE1.classList = "list-item flex-row justify-space-between align-center";

    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    // append to container
    repoEl.appendChild(titleEl);

    // append container to the dom
    repoContainerEl.appendChild(repoEl);

    // create a status element
var statusEl = document.createElement("span");
statusEl.classList = "flex-row align-center";

// check if current repo has issues or not
if (repos[i].open_issues_count > 0) {
  statusEl.innerHTML =
    "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
} else {
  statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
}

// append to container
repoEl.appendChild(statusEl);
  }
})



