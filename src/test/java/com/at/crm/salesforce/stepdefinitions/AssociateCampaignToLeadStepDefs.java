package com.at.crm.salesforce.stepdefinitions;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.at.crm.salesforce.framework.DriverManager;
import com.at.crm.salesforce.framework.Util;
import com.at.crm.salesforce.pages.AssociateCampaignToLeadPage;
import com.at.crm.salesforce.pages.LeadPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class AssociateCampaignToLeadStepDefs extends MasterStepDefs {

	static Logger associateStepDefLog = Logger.getLogger(AssociateCampaignToLeadStepDefs.class);
	WebDriver associateDriver = DriverManager.getWebDriver();
	Map<String, String> testdata = null;
	LeadPage lead;
	AssociateCampaignToLeadPage associateCampaign;

	@Then("^Campaign added to Lead$")
	public void associateCampaignToLead() throws Exception {
		associateCampaign = new AssociateCampaignToLeadPage(associateDriver);
		testdata = excelReader("Campaign", "TestData");
		associateCampaign.clickCampaignHistory();
		associateCampaign.clickAddCampaign();
		associateCampaign.enterCampaignName(testdata);
		currentScenario.embed(Util.takeScreenshot(associateDriver), "image/png");
	}

	@And("^Validate adding Campaign to Lead is success$")
	public void validateCampaignAddedToLead() {
		associateCampaign.validateCampaignAddedToLead();
		currentScenario.embed(Util.takeScreenshot(associateDriver), "image/png");
	}

	@And("^existing lead$")
	public void existingLead(DataTable table) throws Exception {

		log("info: Existing Lead process initiated");
		waitforApexpageload();
		testdata = excelReader("Lead", "TestData");
		lead = new LeadPage(associateDriver);
		lead.clickLeadsTab();
		lead.clickNewButton();
		lead.selectRecordTypeAndClickNext();
		List<List<String>> data = table.raw();
		String businessUnit = data.get(1).get(0);
		log("info: Selected BU is : " + businessUnit);
		lead.inputLeadCreateData(testdata, businessUnit);
		lead.save();
		currentScenario.embed(Util.takeScreenshot(associateDriver), "image/png");
	}

}