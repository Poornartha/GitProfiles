
class GitHub {
    constructor() {
        this.client_id = "0b85b853dca988e445db";
        this.client_secret = "c0463c941abac207519d71f03b051a4d0801196a";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await reposResponse.json();

        return {
            profile,
            repos,
        }

    }
}