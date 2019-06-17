package com.at.crm.salesforce.stepdefinitions;

import static org.testng.Assert.assertTrue;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.at.crm.salesforce.framework.DriverManager;
import com.at.crm.salesforce.framework.Util;

import cucumber.api.java.en.Given;

public class GeneralStepDefs extends MasterStepDefs {
	
	static Logger log = Logger.getLogger(GeneralStepDefs.class);

	WebDriver driver = DriverManager.getWebDriver();

	@Given("^user launch the salesforce application$")
	public void launchInmarsatSalesforceApplication() {
		driver.get(properties.getProperty("ApplicationUrl"));
		
		currentScenario.embed(Util.takeScreenshot(driver), "image/png");
		driver.manage().window().maximize();
		
		assertTrue(driver.getTitle().contains("Login"));
	}
}