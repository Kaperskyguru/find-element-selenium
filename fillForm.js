const { Builder, By, Key } = require("selenium-webdriver");

export async function fillOutFormWithLambdaTest() {
  const LT_USERNAME = ""; //replace with your username
  const LT_ACCESS_KEY = ""; //replace with your accesskey
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const capabilities = {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      username: LT_USERNAME,
      accessKey: LT_ACCESS_KEY,
      geoLocation: "US",
      platformName: "Windows 10",
      build: "Date Picker",
      project: "Date Picker Example",
      w3c: true,
      plugin: "node_js-node_js",
    },
  };

  const gridUrl =
    "https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@" + GRID_HOST;
  let driver;
  try {
    driver = await new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();

    return await fillOutFormWithSelenium(driver);
  } catch (error) {
    throw error;
  } finally {
    await driver.quit();
  }
}

async function fillOutFormWithSelenium(driver) {
  //Launch the browser

  if (!driver) return;

  try {
    await driver.get(
      "https://www.lambdatest.com/selenium-playground/input-form-demo"
    );

    // Select all the input elements

    let nameElement = await driver.findElement(By.id("name"));
    let emailElement = await driver.findElement(By.id("inputEmail4"));
    let passwordElement = await driver.findElement(By.id("inputPassword4"));
    let companyElement = await driver.findElement(By.id("company"));

    let websiteElement = await driver.findElement(By.id("websitename"));
    let countryElement = await driver.findElement(
      By.xpath(`//*[@id="seleniumform"]/div[3]/div[1]/select`)
    );
    let cityElement = await driver.findElement(By.id("inputCity"));
    let address1Element = await driver.findElement(By.id("inputAddress1"));

    let address2Element = await driver.findElement(By.id("inputAddress2"));
    let stateElement = await driver.findElement(By.id("inputState"));
    let zipElement = await driver.findElement(By.id("inputZip"));

    // Select Submit button
    let button = await driver.findElement(
      By.xpath(`//*[@id="seleniumform"]/div[6]/button`)
    );

    // Set text to all the elements
    nameElement.sendKeys("Test Test");
    emailElement.sendKeys("test@test.com");
    passwordElement.sendKeys("password123");
    companyElement.sendKeys("Contentre");

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(1000);

    websiteElement.sendKeys("https://contentre.io");
    countryElement.sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER); // Select Aland Island
    cityElement.sendKeys("Port harcourt");
    address1Element.sendKeys("9 Prince Okey street");

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(1000);

    address2Element.sendKeys("Apartment 8");
    stateElement.sendKeys("Rivers");
    zipElement.sendKeys("200272");

    // Wait for a few seconds (optional) to observe the results
    await driver.sleep(1000);

    // Submit form
    button.click();
  } catch (error) {
    console.log(error);
  }
}
