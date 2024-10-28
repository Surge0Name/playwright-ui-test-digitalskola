class DashboardPage{
    constructor(page){
        this.page = page;
        this.inventoryContainer = page.locator(".inventory_list");
        this.addToCartButton = page.locator(".btn_inventory");
    }

    async isUserAtDashboard(){
        return await this.inventoryContainer.isVisible();
        
    }

    async captureScreenshot() {
        const screenshot_path = process.env.SCREENSHOT_PATH || 'screenshots';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        await this.page.screenshot({ path: `${screenshot_path}/DashboardPage_${timestamp}.png` });
    }

    async addItemToCart(){
        return await this.addToCartButton.first().click();
    }
}

module.exports = {DashboardPage};