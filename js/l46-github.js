class Github
{
  constructor()
  {
    this.client_id = 'eecfe36fff9dc08c0fe9';
    this.client_secret = 'a51f0ca281351cbefc4c7405b651fbb8a32ef0f0';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  /* we will be getting 2 response - user profile and user repo */
  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id }&client_secret=${ this.client_secret }`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${ user }/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${ this.client_id }&client_secret=${ this.client_secret }`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}