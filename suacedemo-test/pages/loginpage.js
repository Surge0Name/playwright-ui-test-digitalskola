class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.passInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async navigate(){
        await this.page.goto("https://www.saucedemo.com");
    }

    async login(username, password){
        await this.username.fill(username);
        await this.passInput.fill(password);
        await this.loginButton.click();
    }
}
module.exports = {LoginPage};