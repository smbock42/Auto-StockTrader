// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Buy_Vanguard', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Buy_Vanguard', async function() {
    vars["TICKER"] = "AREB"
    vars["numAccounts"] = await driver.executeScript("return [\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'10\',\'11\',\'12\',\'13\',\'14\',\'15\']")
    vars["target"] = await driver.executeScript("return \"SPLICE-HERE\";")
    await driver.get("https://personal.vanguard.com/us/TradeTicket?investmentType=EQUITY")
    await driver.manage().window().setRect({ width: 876, height: 820 })
    vars["list"] = await driver.executeScript("return arguments[0].slice(arguments[0].indexOf(arguments[1]) + 1);", vars["numAccounts"],vars["target"])
    const collection = vars["list"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["account"] = vars["list"][i]
      vars["result"] = await driver.executeScript("const xpath = \"/html/body/div[3]/div[5]/span/div/span[3]/div/div[1]/div/div[2]/div/span/span[2]/div/div/div[1]/span/div/p[1]/b\"; const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  if (element && element.textContent === \"Incomplete transaction detected\") {   console.log(\"The text is \'Incomplete transaction detected\'\");   return true; } else {   console.log(\"The text is not \'Incomplete transaction detected\'\");   return false; }")
      if (!!await driver.executeScript("return (arguments[0] == true)", vars["result"])) {
        await driver.findElement(By.id("okButtonInput")).click()
      }
      await driver.findElement(By.xpath("//table[@id=\'baseForm:accountSelectOne-border\']/tbody/tr/td[2]")).click()
      await driver.findElement(By.id("baseForm:accountSelectOne:vars[\"account\"]")).click()
      await driver.sleep(1000)
      await driver.findElement(By.xpath("//table[@id=\'baseForm:transactionTypeSelectOne-border\']/tbody/tr/td[2]")).click()
      await driver.findElement(By.id("baseForm:transactionTypeSelectOne:1")).click()
      await driver.findElement(By.id("baseForm:investmentTextField")).click()
      await driver.findElement(By.id("baseForm:investmentTextField")).sendKeys(vars["TICKER"])
      await driver.sleep(1000)
      await driver.findElement(By.id("baseForm:shareQuantityTextField")).click()
      await driver.findElement(By.id("baseForm:shareQuantityTextField")).sendKeys("1")
      await driver.findElement(By.id("baseForm:orderTypeSelectOne_text")).click()
      await driver.findElement(By.xpath("//td[@id=\'baseForm:orderTypeSelectOne:1\']")).click()
      {
        const element = await driver.findElement(By.xpath("//table[@id=\'baseForm:shareQuantityTable\']/tbody/tr[2]/td"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.CSS_SELECTOR, "body")
        await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
      }
      await driver.findElement(By.id("baseForm:costBasisMethodSelectOne_text")).click()
      await driver.findElement(By.id("baseForm:costBasisMethodSelectOne:2")).click()
      {
        const element = await driver.findElement(By.css("#baseForm\\3A costBasisMethodTable tr:nth-child(2) > .noTopBorder:nth-child(2)"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      await driver.findElement(By.id("baseForm:reviewButtonInput")).click()
      await driver.sleep(500)
      vars["result"] = await driver.executeScript("const xpath = \'//*[@id=\"orderCaptureErrorLayerForm:_id3\"]/dl/dd/span\'; const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  return (element && (element.textContent === \"This order cannot be accepted because the quantity you entered exceeds the number of shares held in this account.\" || element.textContent.includes(\"cannot be accepted\")))")
      if (!!await driver.executeScript("return (arguments[0] == true)", vars["result"])) {
        await driver.findElement(By.id("orderCaptureErrorLayerForm:okButtonInput")).click()
      } else {
        await driver.findElement(By.id("baseForm:submitButtonInput")).click()
      }
      await driver.sleep(1000)
      await driver.get("https://personal.vanguard.com/us/TradeTicket?investmentType=EQUITY")
    }
  })
})