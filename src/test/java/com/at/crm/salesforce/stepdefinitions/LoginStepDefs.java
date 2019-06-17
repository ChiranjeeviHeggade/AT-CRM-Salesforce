package com.at.crm.salesforce.stepdefinitions;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.When;

import com.at.crm.salesforce.framework.DriverManager;
import com.at.crm.salesforce.framework.Util;
import com.at.crm.salesforce.pages.*;

public class LoginStepDefs extends MasterStepDefs {

	WebDriver loginDriver = DriverManager.getWebDriver();

	
	@When("^user able to login$")
	public void userAbleToLogin()  {
		LoginPage login = new LoginPage(loginDriver);
		login.entercred();
		log.info("Logged into the Salesforce applicaiton as successfully");
		currentScenario.embed(Util.takeScreenshot(loginDriver), "image/png");
	}
	
	@When("^logout the Application$")
	public void iLogout()  {
		LoginPage login = new LoginPage(loginDriver);
		login.logout();
		log.info("Logged out the Salesforce applicaiton as successfully");
		currentScenario.embed(Util.takeScreenshot(loginDriver), "image/png");
	}
}
