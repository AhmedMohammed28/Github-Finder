class GitHub {
    constructor() {
        // github client id
        this.clientId = "eaf61017e548ff7eea57";
        // github cliend secret code
        this.clientSecret = "55d12a6a8a100a15d1a27ad4cae57885702003dc";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    // fetch users
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );
        const profile = await profileResponse.json();
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );
        const repo = await repoResponse.json();

        return {
            // return profile data
            profile,
            repo,
        };
    }
}
