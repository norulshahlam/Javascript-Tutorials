class Github
{
  constructor()
  {
    this.client_id = '7f2ff96a44635e859047';
    this.client_secret = 'e493f9e5aeabd6ddb77adc79fe9108f57dcee6c3';
  }

  /* we will be getting 2 response - user profile and user repo */
  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${ user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`);
    
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}