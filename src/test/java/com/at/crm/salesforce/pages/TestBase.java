package com.at.crm.salesforce.pages;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/*
Author : MadhuSekhar 
Email : madhu.boya@qualitest.com / madhu.sekharmsp@inmarsat.com
Functionality : Reusable methods across execution level
Date : 27-may-2019
*/

public abstract class TestBase {

	WebDriver driver;
	Logger log = Logger.getLogger(this.getClass());
 
	/*
	 * Method : Wait until the element get visible under the page
	 */

	public void waitforElement(WebDriver driver, WebElement element) {

		WebDriverWait wait = new WebDriverWait(driver, 150);
		wait.until(ExpectedConditions.visibilityOf(element));

	}

	/*
	 * Method : Wait until the text get visible under the page
	 */
	public void waitForTextToAppear(WebDriver driver, String textToAppear, WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 120);
		wait.until(ExpectedConditions.textToBePresentInElement(element, textToAppear));
	}

	/*
	 * Method : Wait until the element turns into click able mode under the page
	 */

	public void waitUntillElementClickable(WebDriver driver, WebElement element) {

		WebDriverWait wait = new WebDriverWait(driver, 150);
		wait.until(ExpectedConditions.elementToBeClickable(element));
		wait.until(ExpectedConditions.invisibilityOf(element));

	}

	/*
	 * Method : it will wait until the desired element get invisible (until the
	 * element vanish)
	 */

	public void waitUntillElementInvisible(WebDriver driver, WebElement element) {

		WebDriverWait wait = new WebDriverWait(driver, 150);
		wait.until(ExpectedConditions.invisibilityOf(element));

	}

	/*
	 * Method : Page get Refresh
	 */

	public void pageRefresh(WebDriver driver) {
		driver.navigate().refresh();
	}

	/*
	 * Method : Navigation back from original page
	 */

	public void pageNavigateBack(WebDriver driver) {
		driver.navigate().back();

	}

	/**
	 * @category Statement will wait to execute until page to load is complete
	 */
	public void waitForPageToLoad(WebDriver driver) {
		try {
			Object result = ((JavascriptExecutor) driver).executeScript("return document['readyState']");
			while (!result.toString().equalsIgnoreCase("complete")) {
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				result = ((JavascriptExecutor) driver).executeScript("return document['readyState']");
			}
		} catch (Exception e) {
			log("unable to Load the DOM Elements " + e);
		}
	}

	/*
	 * Method : Navigation forward from original page
	 */

	public void pageNavigateForword(WebDriver driver) {
		driver.navigate().forward();
	}

	/*
	 * Method : To Handle the drop downs, method is to select the value from drop
	 * down list through value reference
	 */

	public void selectDropDownbyValue(WebElement element, String value) {
		WebElement mySelectElement = element;
		Select sel = new Select(mySelectElement);
		sel.selectByValue(value);
	}

	/*
	 * Method : To Handle the drop downs, method is to select the value from drop
	 * down list through index reference
	 */

	public void selectDropDownbyIndex(WebElement element, int index) {
		WebElement mySelectElement = element;
		Select sel = new Select(mySelectElement);
		sel.selectByIndex(index);
	}

	/*
	 * Method : To generate Random String value
	 */

	public String randomString(int count) {
		return RandomStringUtils.randomAlphabetic(count);

	}

	/*
	 * Method : To generate Random integer value
	 */

	public String randomInteger(int count) {
		return RandomStringUtils.randomNumeric(count);

	}

	/*
	 * Method : To generate Random Alpha Numeric value
	 */

	public String randomAlphaNumeric(int count) {
		return RandomStringUtils.randomAlphanumeric(count);

	}

	/*
	 * Method : To generate system current date
	 */

	public String machineTimeStamp() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("_yyyy/MM/dd_HHmmss");
		LocalDateTime now = LocalDateTime.now();
		String todaydate = dtf.format(now);
		log("Capture Time is :" + todaydate);
		return todaydate;
	}

	/*
	 * Method : Method to double click the desired element
	 */

	public void doubleclick(WebDriver driver, WebElement element) {

		Actions action = new Actions(driver);
		action.moveToElement(element).doubleClick().perform();
	}

	/*
	 * Method : Method is to wait until the frame get load
	 */

	public WebElement waituntilframeload(WebDriver driver, WebElement element, long timeOutInSeconds,
			String frameLocator) {
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(frameLocator));
		return element;

	}

	/*
	 * Method : Handling the scrolling feature, Method will do scroll until the
	 * element visible
	 */

	public void scrollToElement(WebDriver driver, WebElement elemet) {
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView();", elemet);

	}

	/*
	 * Method : Handling the frame feature, Method to switch the frame based on
	 * element mapping
	 */

	public void switchtoframeByWebElement(WebDriver driver, WebElement element) {
		driver.switchTo().frame(element);
	}

	/*
	 * Method : Handling the frame feature, Method to switch the frame based on
	 * index/value reference
	 */

	public void iframeswitch(WebDriver driver, int i) {

		driver.switchTo().frame(i);
	}

	/*
	 * Method : To switch back original reference index/value reference
	 */

	public void switchtoDefault() {
		driver.switchTo().defaultContent();
	}

	public void waitforApexpageload() {
		try {
			Thread.sleep(5000);
		} catch (Exception e) {
			log("Page Exception : Unable to load page properly : " + e);
		}
	}

	/*
	 * Method : Open link in a new tab
	 */

	public void openLinkInNewTab(WebElement element) {
		String selectLinkOpeninNewTab = Keys.chord(Keys.CONTROL, Keys.RETURN);
		element.sendKeys(selectLinkOpeninNewTab);
	}

	public void log(String info) {
		log.info(info);
	}

	public Map<String, String> excelReader(String moduleName, String sheetname) throws Exception {

		String excelpath = System.getProperty("user.dir") + "\\src\\test\\resources\\TestData\\InmarsatTestData.xlsx";
		String filePath = excelpath;
		String expectedDataTCName = moduleName;

		File srcsan = new File(filePath);
		FileInputStream fisan = new FileInputStream(srcsan);
		XSSFWorkbook wbsan = new XSSFWorkbook(fisan);
		XSSFSheet sheetsan1 = wbsan.getSheet(sheetname); // get the data based on sheet name
		// XSSFSheet sheetsan1 = wbsan.getSheetAt(0); //index no can also be used

		int totalRow = sheetsan1.getLastRowNum() + 1;
		int totalColumn = sheetsan1.getRow(0).getLastCellNum();

		String[][] arr = new String[totalColumn][2];

		if(totalRow !=0)
		{

			for (int j = 0; j < totalColumn; j++) {
				String cellVal = sheetsan1.getRow(0).getCell(j).getStringCellValue();
				arr[j][0] = cellVal;
			}
		}
		else
		{
			log("In Testdata.xls - Rows not found");
		}

		for (int i = 0; i < totalRow; i++) {
			String value = sheetsan1.getRow(i).getCell(0).getStringCellValue();
			if (value.equals(expectedDataTCName)) {
				for (int j = 0; j < totalColumn; j++) {
					String cellVal = sheetsan1.getRow(i).getCell(j).getStringCellValue();
					arr[j][1] = cellVal;
				}
			}
		}

		HashMap<String, String> testDataValue = new HashMap<String, String>();
		for (int i = 0; i <= totalColumn - 1; i++) {
			testDataValue.put(arr[i][0], arr[i][1]);
		}
		String testMail = testDataValue.get("Email");
		log("Testmail :" + testMail);
		wbsan.close();
		return testDataValue;

	}

	public boolean selectDropDrownListFromulList(WebDriver driver, WebElement element, String value) {
		try {
			driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
			WebElement mySelectElement = element;

			if (mySelectElement != null) {
				List<WebElement> options = mySelectElement.findElements(By.tagName("li"));

				for (WebElement option : options) {
					if (option.getText().equals(value)) {
						option.click(); // click the desired option
						break;
					}
				}
			}
		} catch (NoSuchElementException e) {
			log("No Such Element Exception found : " + e);
		} catch (Exception e) {
			log("Unable to find Expected Element in DOM : " + e);
		}

		return false;
	}
}