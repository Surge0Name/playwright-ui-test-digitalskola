const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.describe("SauceDemo website test", ()=>{
  test("Succes LogIn test", async({page})=>{
    await page.goto("http://www.saucedemo.com/")
    await page.locator('[id = "user-name"]').fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByText("Login").click()

    await expect(page.getByText("Swag Labs")).toBeVisible()
    await expect(page.getByRole('button', {name:'Open Menu'})).toBeVisible()
  });

  test("Validated user berada di dashboard setelah login", async({page})=>{
    await page.goto("http://www.saucedemo.com/")
    await page.locator('[id = "user-name"]').fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByText("Login").click()

    await expect(page.getByText("Products")).toBeVisible()
  });

  test("Add item to cart", async({page})=>{
    await page.goto("http://www.saucedemo.com/")
    await page.locator('[id = "user-name"]').fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByText("Login").click()

    await page.getByText("Add to cart", {exact:true}).first().click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
  });

  test("Validate item dalam cart", async({page})=>{
    await page.goto("http://www.saucedemo.com/")
    await page.locator('[id = "user-name"]').fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByText("Login").click()

    await page.getByText("Add to cart", {exact:true}).first().click()

    await page.locator('.shopping_cart_link').click()
    await expect(page.getByText("Sauce Labs BackPack")).toBeVisible()
  });
});