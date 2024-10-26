const { test, expect } = require('@playwright/test');
const { LoginPage } = require("../suacedemo-test/pages/loginpage.js")
const { DashboardPage } = require("../suacedemo-test/pages/dashboardpage.js")
const { CartPage } = require("../suacedemo-test/pages/cartpage.js")

test("User succesfull login and add item to cart ", async({page})=>{
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page); 

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  console.log("Current URL: ", await page.url()); //debugging url

  const isAtDashboard = await dashboardPage.isUserAtDashboard();
  expect(isAtDashboard).toBeTruthy();

  await dashboardPage.addItemToCart();

  await cartPage.navigateToCart();
  const isItemInCart = await cartPage.isItemAddedToCart();
  expect(isItemInCart).toBeTruthy();
})