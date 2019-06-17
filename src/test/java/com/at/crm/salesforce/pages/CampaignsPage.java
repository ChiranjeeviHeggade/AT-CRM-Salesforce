package com.at.crm.salesforce.pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.at.crm.salesforce.base.TestBase;

import cucumber.api.DataTable;


/*
 * @Author : Madhu 
 * @Category : Campaign module 
 * @param : Campaign related Web-elements, Strings, Methods and functions will be available
 */


public class CampaignsPage extends TestBase {

	static Logger campaignlog = Logger.getLogger(CampaignsPage.class);
	Map<String, String> testdata = null;
	DataTable bussinessUnit = null;
	static String runTimeCampaign = "";

	@FindBy(xpath = "//*[@data-id='Campaign']")
	WebElement btnCampaignHomeButton;

	@FindBy(xpath = "//a[@title='New']")
	WebElement btnCampaignNew;

	@FindBy(xpath = "//span[contains(text(),'Campaign Name')]/parent::label//following-sibling::input")
	WebElement txtCampaignName;

	@FindBy(xpath = "//span[contains(text(),'Type')]/parent::span//following-sibling::div")
	WebElement campaignType;

	@FindBy(xpath = "//a[@title='Webinar']")
	WebElement campaignTypeValue;

	@FindBy(xpath = "//span[contains(text(),'Active')]/parent::label//following-sibling::input")
	WebElement activateCheckbox;

	@FindBy(xpath = "//button[@title='Save']")
	WebElement btnSave;

	// Webelements for Campaign Updation

	@FindBy(xpath = "(//span[contains(text(),'Campaign Name')]//parent::div//following-sibling::div/span//span)[2]")
	WebElement existingcampaign;

	@FindBy(xpath = "//a[contains(@title,'Show')]")
	WebElement showbtn;

	@FindBy(xpath = "//a[@title='Edit']")
	WebElement editcampaign;

	@FindBy(xpath = "//span[contains(text(),'Business Unit')]/parent::span//following-sibling::div")
	WebElement campaignBussinessUnitSelectbox;

	@FindBy(xpath = "//a[contains(text(),'Aviation')]//ancestor::ul")
	WebElement bussinessUnitdropdownHandle;

	@FindBy(xpath = "//span[contains(text(),'Start Date')]//parent::label//following-sibling::div")
	WebElement startdate;

	@FindBy(xpath = "//span[contains(text(),'End Date')]//parent::label//following-sibling::div")
	WebElement enddate;

	// WebElements for Campaign Deletion

	@FindBy(xpath = "//a[@title='Delete']")
	WebElement deletcampaign;

	@FindBy(xpath = "//span[contains(text(),'Delete')]")
	WebElement deletcampaignpopup;

	@FindBy(xpath = "//div[contains(@class,'NoResults')]")
	WebElement noResultsPage;

	// Common WebElements across page level

	@FindBy(xpath = "//input[contains(@title, 'Search')]")
	WebElement globalSearch;

	@FindBy(xpath = "(//p[contains(text(),'Result')])[1]")
	WebElement resultKey;

	public CampaignsPage(WebDriver rdriver) {
		driver = rdriver;
		PageFactory.initElements(rdriver, this);

	}

	public void campaignsHomebtn() {
		waitforElement(driver, btnCampaignHomeButton);
		btnCampaignHomeButton.click();
	}

	public void campaignPageValidation() {

		waitForPageToLoad(driver);
		waitforElement(driver, btnCampaignNew);
		String actualCampaignPageTittle = driver.getTitle();
		String expectedCampaignPageTittle = "Recently Viewed | Campaigns | Salesforce";
		assertEquals(actualCampaignPageTittle, expectedCampaignPageTittle);
		log("Expected Title :" + expectedCampaignPageTittle + " ::  " + "Actual Title" + actualCampaignPageTittle);

	}

	public void createCampaign(Map<String, String> testdata, String bussinessUnit) throws Exception {

		log("Running the Bussiness unit as : " + bussinessUnit);
		waitforElement(driver, btnCampaignNew);
		btnCampaignNew.click();

		waitforElement(driver, txtCampaignName);

		String campaignname = testdata.get("CampaignName");
		String campaignRand = campaignname + machineTimeStamp();
		txtCampaignName.sendKeys(campaignRand);
		runTimeCampaign = campaignRand;
		log("Created Campaign name is : " + campaignRand);

		waitforElement(driver, campaignType);
		campaignType.click();

		waitforElement(driver, campaignTypeValue);
		scrollToElement(driver, campaignTypeValue);
		campaignTypeValue.click();
		log("Type value has selected");

		waitforElement(driver, campaignBussinessUnitSelectbox);
		campaignBussinessUnitSelectbox.click();

		selectDropDrownListFromulList(driver, bussinessUnitdropdownHandle, bussinessUnit);
		log("Bussiness unit Selected as : " + bussinessUnit);
		
	
	}

	public void activeCheck(String activatecheck) {
		waitforElement(driver, activateCheckbox);

		if (activatecheck.equals("Yes")) {
			activateCheckbox.click();
			log("Activate check Box is checked");
		} else if (activatecheck.equals("No")) {
			log("Activate check Box is un-checked");
		}
		save();

	}

	public void save() {
		waitforElement(driver, btnSave);
		btnSave.click();
		log("Save button clicked");
	}

	public void campaignCreationValidation() {

		log("info:: Campaign Validation process started");
		waitforApexpageload();
		waitforElement(driver, globalSearch);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		globalSearch.click();
		globalSearch.sendKeys(runTimeCampaign);
		globalSearch.sendKeys(Keys.ENTER);

		waitforElement(driver, resultKey);
		waitforApexpageload();

		if (!driver.findElement(By.linkText(runTimeCampaign)).isDisplayed()) {
			log("Campaign Creation : " + runTimeCampaign + "   un-successfully");
		} else {
			log("Campaign Creation : " + runTimeCampaign + "  is successfully and Visble in Globally");
		}

	}

	// Code for Updating the Campaign

	public void campaignUpdation() throws Exception {

		log("info: Campaign updation intiation");
		waitforElement(driver, showbtn);
		showbtn.click();

		log("Before Campaign Creation name : " + runTimeCampaign + " ");

		waitforElement(driver, editcampaign);
		editcampaign.click();
		log("Campaign Edited ");

		log("Changing the values initated");

		waitforElement(driver, txtCampaignName);
		txtCampaignName.clear();
		String campaignRand = "Inmarsat Test" + randomString(6);
		txtCampaignName.sendKeys(campaignRand);
		runTimeCampaign = campaignRand;
		log("Created Campaign name is : " + campaignRand);

		log("info: Modified the campaign existing data");
		save();

	}

	public void campaignUpdationValidation() {

		log("After Campaign name Updated to : " + runTimeCampaign + "   successfully");
	}

	// Code for Deleting the Campaign

	public void campaignDeletion() {

		log("info: Deletion of Campaign process initiation");

		waitforElement(driver, showbtn);
		showbtn.click();
		waitforElement(driver, deletcampaign);
		deletcampaign.click();
		log("user clicked on Delete button ");
		waitforElement(driver, deletcampaignpopup);
		deletcampaignpopup.click();
		log("User clicked on Delete button under campaign pop up");
		campaignDeletionValidation();

	}

	public void campaignDeletionValidation() {

		log("info:: Campaign deletion Validation process started");
		log("Searching the deleted Campaign under the campaigns page");
		waitforApexpageload();
		waitforElement(driver, globalSearch);
		globalSearch.click();
		globalSearch.sendKeys(runTimeCampaign);
		globalSearch.sendKeys(Keys.ENTER);
		waitforApexpageload();
		waitforElement(driver, noResultsPage);
		
		assertTrue(noResultsPage.isDisplayed());
		log("Campaign : " + runTimeCampaign + " deleted Successfully");

	}

}
