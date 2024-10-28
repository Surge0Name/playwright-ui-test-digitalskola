class CartPage{
    constructor(page){
        this.page = page;
        this.cartIcon = page.locator(".shopping_cart_link");
        this.cartItem = page.locator(".cart_item");
    }

    async navigateToCart(){
        await this.cartIcon.click();
    }

    async captureScreenshot() {
        const screenshot_path = process.env.SCREENSHOT_PATH || 'screenshots';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        await this.page.screenshot({ path: `${screenshot_path}/cartPage_${timestamp}.png` });
    }


    async isItemAddedToCart(){
        return await this.cartItem.isVisible();
    }
}

module.exports = {CartPage}