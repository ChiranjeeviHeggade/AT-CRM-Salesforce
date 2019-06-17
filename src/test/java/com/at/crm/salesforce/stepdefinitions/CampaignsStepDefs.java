package com.at.crm.salesforce.stepdefinitions;

import java.util.List;
import java.util.Map;
import org.openqa.selenium.WebDriver;
import com.at.crm.salesforce.framework.DriverManager;
import com.at.crm.salesforce.framework.Util;
import com.at.crm.salesforce.pages.CampaignsPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


/*
 * Author : Madhu 
 * Category : Campaign Step definition files
 * Param : Step definition mapping to feature files and Page level methods
 */

public class CampaignsStepDefs extends MasterStepDefs {
	CampaignsPage campaign;

	WebDriver campaignDriver = DriverManager.getWebDriver();
	Map<String, String> testdata = null;

	@When("^user created the new campaign under Campaigns page$")
	public void createCampaign(DataTable table) throws Exception {
		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignsHomebtn();
		campaign.campaignPageValidation();
		testdata = excelReader("Campaign", "TestData");

		// Getting the Data from the Data table under Feature file

		List<List<String>> data = table.raw();
		String bussinessUnit = data.get(1).get(0);
		log("User is able to select the record type '" + bussinessUnit + "'");
		campaign.createCampaign(testdata, bussinessUnit);
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");

	}

	@And("^the campaign Activate status to be$")
	public void campaignActiveCheck(DataTable activateFlag) {
		List<List<String>> data = activateFlag.raw();
		String activatecheck = data.get(1).get(0);
		log("Active Status Flag be:  " + activatecheck + "'");
		campaign = new CampaignsPage(campaignDriver);
		campaign.activeCheck(activatecheck);
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	@Then("^the campaign is visible globally$")
	public void campaignActiveCheckGlobally() {

		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignCreationValidation();
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	@Then("^the new campaign should created successfully$")
	public void campaignCreatedSuccessfully() {
		campaign.save();
		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignCreationValidation();
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	// Campaign Updated Code

	@When("^the user has a existing campaign$")
	public void checkingExistingcampaign(DataTable table) throws Exception {
		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignsHomebtn();
		testdata = excelReader("Campaign", "TestData");

		// Getting the Data from the Data table under Feature file

		List<List<String>> data = table.raw();
		String bussinessUnit = data.get(1).get(0);
		log("User is able to select the record type '" + bussinessUnit + "'");
		campaign.createCampaign(testdata, bussinessUnit);
		campaign.save();
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	@When("^their is a need to update few fields details$")
	public void needToUpdateCampaign() {
		log("Info:: Campaigns created with incorrect information :: Need to update the fields");
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	@Then("^user has option to update the details for existing campaign$")
	public void updateCampaign() throws Exception {
		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignUpdation();
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	// Campaign Deletion

	@When("^there is a need to delete any of the existing campaign$")
	public void needToDeleteCampaign() {
		log("Info:: Invalid Campaigns created with incorrect information :: Need to Delet the fields");
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

	@Then("^user has option to delete the campaign successfully$")
	public void deleteCampaign() {
		campaign = new CampaignsPage(campaignDriver);
		campaign.campaignDeletion();
		currentScenario.embed(Util.takeScreenshot(campaignDriver), "image/png");
	}

}