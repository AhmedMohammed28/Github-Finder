class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block mb-4">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge bg-primary mb-1">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-secondary mb-1">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-success mb-1">Followers: ${user.followers}</span>
                <span class="badge bg-info mb-1">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
    `;
    }

    // Clear the ui when the input field is empty
    clearProfile() {
        this.profile.innerHTML = "";
    }

    // Show alert
    showAlert(message, className) {
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".searchContainer");
        const card = document.querySelector(".card-body");
        container.insertBefore(div, card);
        setTimeout(() => {
            div.remove();
        }, 2500);
    }
    clearAlert() {
        document.querySelector(".alert").remove();
    }

    showRepo(repo) {
        let output = "";

        repo.forEach(function (repo) {
            output += `
              <div class="card card-body mb-2">
                <div class="row">
                  <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                  <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge bg-success">Forks: ${repo.forms_count}</span>
                  </div>
                </div>
              </div>
            `;
        });

        // Output repos
        document.getElementById("repos").innerHTML = output;
    }
}
