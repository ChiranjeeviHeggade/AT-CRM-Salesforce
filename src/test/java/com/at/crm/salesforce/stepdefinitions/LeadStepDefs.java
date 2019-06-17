package com.at.crm.salesforce.stepdefinitions;

import java.util.List;
import java.util.Map;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.When;

import com.at.crm.salesforce.framework.DriverManager;
import com.at.crm.salesforce.framework.Util;
import com.at.crm.salesforce.pages.*;

public class LeadStepDefs extends MasterStepDefs {
	LeadPage lead;

	WebDriver leadDriver = DriverManager.getWebDriver();
	Map<String, String> testdata = null;
	
	@When("^user created the 'New Lead' under lead page$")
	public void createLead(DataTable table)  throws Exception {
		lead = new LeadPage(leadDriver);
		
		// 1. Click on Lead Tab and landed in Leads Home Page
		lead.clickLeadsTab();
		
		// 2. Click on New button to create Lead
		lead.clickNewButton();
		
		// 3. New Lead Pop up - Selecting the Record Type and Clicking Next
		lead.selectRecordTypeAndClickNext();

		// Getting the Data from the Data table under Feature file
		testdata = excelReader("Lead", "TestData");

		List<List<String>> data = table.raw();
		String businessUnit = data.get(1).get(0);
		
		// 4. Creating the Lead and Searching the same to check it's availability
		lead.inputLeadCreateData(testdata, businessUnit);
		lead.save();
		lead.leadCreationValidation();
		currentScenario.embed(Util.takeScreenshot(leadDriver), "image/png");
	}
	
	@When("^able to 'Edit the Lead' information successfully$")
	public void editTheLeadInformation() throws Exception {
		lead = new LeadPage(leadDriver);
		testdata = excelReader("LeadEdit", "TestData");
		
		// 1. Editing the lead information
		lead.editLead(testdata);
		currentScenario.embed(Util.takeScreenshot(leadDriver), "image/png");
	}
	
	@When("^able to 'Delete the Lead' successfully$")
	public void deleteTheLead() throws Exception {
		lead = new LeadPage(leadDriver);
		testdata = excelReader("LeadDelete", "TestData");
		
		// 1. Deleting the lead
		lead.deleteLead();
		currentScenario.embed(Util.takeScreenshot(leadDriver), "image/png");
	}

	@When("^able to 'convert the lead'$")
	public void clickOnConvertedButton() {
		lead = new LeadPage(leadDriver);
		lead.clickConvertedButton();
		lead.clickSelectConvertedStatusButton();
		lead.convertLeadWindow();
		lead.clickConvertButton();
		lead.validateSuccessMessageAndClickClose();
		currentScenario.embed(Util.takeScreenshot(leadDriver), "image/png");
	}
	
}
