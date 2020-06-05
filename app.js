// Init Github:
const github = new GitHub();

// Init UI:
const ui = new UI();

// Get UserName
const searchUser = document.getElementById('searchUser');

// Event:
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP Call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message == 'Not Found') {
                // Show Alert:
                ui.showAlert('User Not Found', 'alert alert-danger');
                
            } else {
                // Show Profile:
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }   
        })
        .catch(err => ignore());
    } else {
        // Clear Profile
        ui.clearProfile();
    };
});