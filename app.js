// Init github
const github = new GitHub();
// Init UI
const ui = new UI();
// search input
const searchUser = document.getElementById("searchUser");

// seach input eventListener
searchUser.addEventListener("keyup", (e) => {
    // get the text that type in
    let userText = e.target.value;
    if (userText !== "") {
        github.getUser(userText).then((data) => {
            if (data.profile.message === "Not Found") {
                // Alert
                if (!document.body.contains(document.querySelector(".alert")))
                    ui.showAlert("User Not Found", "alert alert-danger");
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
                // console.log(data.repo);
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});
