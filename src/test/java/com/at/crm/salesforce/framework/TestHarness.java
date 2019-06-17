package com.at.crm.salesforce.framework;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;

public class TestHarness {

	static Logger log = Logger.getLogger(TestHarness.class);
	private Properties properties = Settings.getInstance();

	/**
	 * Constructor to initialize the {@link TestHarness} object
	 */
	public TestHarness() {
		log.info("Starting test execution");
	}

	public void invokeDriver(Scenario scenario, SeleniumTestParameters currentTestParameters) {
		WebDriver driver;
		log.info("Running the Scenario : " + scenario.getName() + " in " + currentTestParameters.getExecutionMode());

		switch (currentTestParameters.getExecutionMode()) {

		case API:
			break;
		case LOCAL:
		case GRID:
			driver = DriverFactory.createWebDriverInstance(currentTestParameters);
			DriverManager.setWebDriver(driver);
			break;
		default:
			break;

		}
	}

	public void closeRespestiveDriver(SeleniumTestParameters testParameters, Scenario scenario) {

		if (!testParameters.isAPIExecution()) {
			WebDriver driver = DriverManager.getWebDriver();
			if (driver != null) {
				if(scenario.isFailed())
				{
					scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
					scenario.write("Above Scearnio failed");
				}
				else
				{
					scenario.write("Scenario passed");
				}
				driver.quit();
			}
		}

	}

	/**
	 * Embed a screenshot in test report if test is marked as failed And Update
	 * Task in JIRA
	 * 
	 * @param testParameters
	 * 
	 * @throws IOException
	 */
	public void updateDefectInJira(Scenario scenario, SeleniumTestParameters testParameters) throws IOException {

		if (Boolean.valueOf(properties.getProperty("TrackIssuesInJira"))) {
			if (scenario.isFailed()) {
				try {
					byte[] screenshot = Util.takeScreenshot(DriverManager.getWebDriver());
					scenario.embed(screenshot, "image/png");

					File filePath = ((TakesScreenshot) DriverManager.getWebDriver()).getScreenshotAs(OutputType.FILE);
					RestApiForJira.createLog(scenario.getName(), scenario.getName(), filePath.toString());

				} catch (WebDriverException somePlatformsDontSupportScreenshots) {
					somePlatformsDontSupportScreenshots.printStackTrace();
					log.error(somePlatformsDontSupportScreenshots.getMessage());
				}
			}
		}
	}
}
