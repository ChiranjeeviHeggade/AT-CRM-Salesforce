package com.at.crm.salesforce.pages;

import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.at.crm.salesforce.base.TestBase;

/*
 * Author : Chiranjeevi
 * Functionality : Add Campaign to Lead
 * Date : 05-06-2019
 * 
 */

public class AssociateCampaignToLeadPage extends TestBase  {

	Logger associateLog = Logger.getLogger(AssociateCampaignToLeadPage.class.getClass());
	Map<String, String> testdata = null;
	private String campaignName;

	/* LIST OF 'CAMPAIGN ASSOCIATION TO LEAD' XPATHS */

	@FindBy(xpath = "//span[contains(text(),'Campaign History')]")
	WebElement campaignHistory;

	@FindBy(xpath = "//div[@class='slds-truncate'][contains(text(),'Add to Campaign')]")
	WebElement addCampaign;

	@FindBy(xpath = "//input[@placeholder='Search Campaigns...'][@title='Search Campaigns']")
	WebElement searchCampaign;

	@FindBy(xpath = "//*[@class='lookup__list  visible']/li[1]/a")
	WebElement campaignList;

	@FindBy(xpath = "//span[contains(text(),'Next')]")
	WebElement nextButton;

	@FindBy(xpath = "//button[@title='Save']")
	WebElement saveButton;

	@FindBy(xpath = "//a[contains(@class,'select')]")
	WebElement statusSave;

	@FindBy(xpath = "//a[contains(text(),'Responded')]")
	WebElement statusResponded;

	public AssociateCampaignToLeadPage(WebDriver rdriver) {
		driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	public void clickCampaignHistory() {
		waitforElement(driver, campaignHistory);
		campaignHistory.click();
	}

	public void clickAddCampaign() {
		pageRefresh(driver);
		waitForPageToLoad(driver);
		waitforElement(driver, addCampaign);
		if (addCampaign.isDisplayed()) {
			addCampaign.click();
		}
	}

	public void enterCampaignName(Map<String, String> testdata) {
		waitforElement(driver, searchCampaign);
		campaignName = testdata.get("CampaignName");
		searchCampaign.sendKeys(campaignName);
		waitforElement(driver, campaignList);
		campaignList.click();
		nextButton.click();
		waitForPageToLoad(driver);
		statusSave.click();
		statusResponded.click();
		saveButton.click();
	}

	public void validateCampaignAddedToLead() {
		if (driver.findElement(By.partialLinkText(campaignName)).isDisplayed()) {
			log("Campaign is added to Lead successfully");
		}
	}
}
