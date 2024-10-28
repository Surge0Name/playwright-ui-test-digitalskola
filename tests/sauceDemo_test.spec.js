require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require("../suacedemo-test/pages/loginpage.js")
const { DashboardPage } = require("../suacedemo-test/pages/dashboardpage.js")
const { CartPage } = require("../suacedemo-test/pages/cartpage.js")

test("User succesfull login and add item to cart ", async({page})=>{
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page); 

  await loginPage.navigate(process.env.BASE_URL); 
  await loginPage.login(process.env.SETUSER, process.env.PASSWORD); 
  console.log("Current URL: ", await page.url()); // Debugging URL
  console.log("Base URL: ", process.env.BASE_URL);
  console.log("Username: ", process.env.SETUSER);
  console.log("Password: ", process.env.PASSWORD);

  //Ambil screenshot LogIn Page
  await loginPage.captureScreenshot();

  const isAtDashboard = await dashboardPage.isUserAtDashboard();
  expect(isAtDashboard).toBeTruthy();

  //Ambil SC dashboardPage
  await dashboardPage.captureScreenshot();

  await dashboardPage.addItemToCart();

  await cartPage.navigateToCart();
  const isItemInCart = await cartPage.isItemAddedToCart();
  expect(isItemInCart).toBeTruthy();

  //Ambil SC cartpage
  await cartPage.captureScreenshot();
})