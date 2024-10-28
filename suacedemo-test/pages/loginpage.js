class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.passInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async navigate(){
        await this.page.goto("https://www.saucedemo.com");
        await this.page.screenshot({ path: 'screenshot/loginPage.png' });
    }

    async captureScreenshot(){
        const screenshot_path = process.env.SCREENSHOT_PATH || 'screenshots';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        await this.page.screenshot({ path: `${screenshot_path}/loginPage_${timestamp}.png` });
    }
    async login(username, password){
        await this.username.fill(username);
        await this.passInput.fill(password);
        await this.loginButton.click();
    }
}
module.exports = { LoginPage };