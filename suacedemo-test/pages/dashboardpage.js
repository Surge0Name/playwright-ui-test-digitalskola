class DashboardPage{
    constructor(page){
        this.page = page;
        this.inventoryContainer = page.locator(".inventory_list");
        this.addToCartButton = page.locator(".btn_inventory");
    }

    async isUserAtDashboard(){
        return await this.inventoryContainer.isVisible();
    }

    async addItemToCart(){
        return await this.addToCartButton.first().click();
    }
}

module.exports = {DashboardPage};