class CartPage{
    constructor(page){
        this.page = page;
        this.cartIcon = page.locator(".shopping_cart_link");
        this.cartItem = page.locator(".cart_item");
    }

    async navigateToCart(){
        await this.cartIcon.click();
    }

    async isItemAddedToCart(){
        return await this.cartItem.isVisible();
    }
}

module.exports = {CartPage}