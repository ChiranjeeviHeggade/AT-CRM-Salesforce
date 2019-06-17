package com.at.crm.salesforce.pages;

import static org.testng.Assert.assertTrue;

import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.at.crm.salesforce.base.TestBase;

/*
 * Author : Siva Surya && Chiranjeevi Heggade M S
 * Functionality : Lead creation Conversion
 * Date : 27-05-2019
 * 
 */

public class LeadPage extends TestBase {
	
	static Logger leadLog = Logger.getLogger(LeadPage.class);
	private static String runtimeLead = "";
	public static final String COMPANYNAM = "CompanyName";
	public static final String EMAIL = "Email";
	public static final String LASTNAME = "LastName";

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Leads']/span[contains(text(),'Leads')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btnLeads;

	@FindBy(xpath = "//ul[contains(@class,'oneActionsRibbon ')]//a[@title='New' and @role='button']")
	WebElement btnLeadsActive;
	
	@FindBy(xpath = "//ul[contains(@class,'oneActionsRibbon ')]//a[@title='New' and @role='button']")
	WebElement newLeadButton;

	//New Lead Popup Objects
	@FindBy(xpath = "//div[contains(@class,'fade-in-open')]")
	WebElement newLeadPopupComponent;

	@FindBy(xpath = "//div[contains(@class,'fade-in-open')]//h2")
	WebElement popUpTitle;

	@FindBy(xpath = "//h2[contains(@class,'title') and contains(@class,'heading')]")
	WebElement editPopUpTitle;

	@FindBy(xpath = "//label[@class='slds-radio']//span[text()='Inmarsat Leads']/parent::div/preceding-sibling::div")
	WebElement recordTypeValue;

	// Name Type
	@FindBy(xpath = "//span[contains(text(),'Salutation')]/parent::span/parent::div//following-sibling::div//a[@class='select']")
	WebElement selectSalution;

	@FindBy(xpath = "//a[@title='Mr.']")
	WebElement saluationValue;

	@FindBy(xpath = "//span[contains(text(),'Last Name')]/parent::label//following-sibling::input")
	WebElement leadName;

	@FindBy(xpath = "//span[contains(text(),'Company Name')]/parent::label//following-sibling::input")
	WebElement companyName;

	@FindBy(xpath = "//span[contains(text(),'Email')]/parent::label//following-sibling::input")
	WebElement emailTextbox;

	// Lead Source
	@FindBy(xpath = "//span[contains(text(),'Lead Source')]/parent::span/parent::div//following-sibling::div//a[@class='select']")
	WebElement selectLeadSource;

	@FindBy(xpath = "//a[@title='Collateral Download']")
	WebElement leadSourceValue;

	// Lead Country
	@FindBy(xpath = "//span[contains(text(),'Lead Country')]/parent::span/parent::div//following-sibling::div//a[@class='select']")
	WebElement selectCountry;

	@FindBy(xpath = "//a[@title='United Kingdom']")
	WebElement countryValue;

	// Business Unit
	@FindBy(xpath = "//span[contains(text(),'Business Unit')]/parent::span/parent::div//following-sibling::div//a[@class='select']")
	WebElement selectBusinessUnit;

	@FindBy(xpath = ".//div[@class='select-options']//a[@title='Aviation']/parent::li/parent::ul")
	WebElement businessUnitValue;

	// Vertical Market
	@FindBy(xpath = "//span[contains(text(),'Vertical Market')]/parent::span/parent::div//following-sibling::div//a[@class='select']")
	WebElement selectVertical;

	@FindBy(xpath = "//a[contains(text(),'Enterprise - Agriculture')]/parent::li")
	WebElement verticalValue;

	@FindBy(xpath = ".//div[contains(@class,'fade-in-open')]//button[@type='button']//*[text()='Next']/parent::button")
	WebElement nextButton;

	@FindBy(xpath = "//div[contains(@class,'fade-in-open')]//button[@type='button']//*[text()='Save']")
	WebElement saveButton;

	@FindBy(xpath = "//span[contains(@class,'forceActionsText')]")
	WebElement forceActionFlashMsgComponent;

	// Leads Details Page - ldp

	@FindBy(xpath = "//nav[@class='entityNameTitle']/parent::h1/*[contains(@class,'title')]/*[contains(@class,'uiOutputText')]")
	WebElement leadTitle;
	
	@FindBy(xpath = "//span[@title='Email']/parent::div//span[@data-aura-class='uiOutputEmail']")
	WebElement emailLink;

	/* LIST OF LEAD CONVERSION XPATH */

	@FindBy(xpath = "//ul[@role='listbox']//li//a//span[text()='Converted']")
	WebElement convertedButton;

	@FindBy(xpath = "//*[text()='Convert Lead ']")
	WebElement convertLeadWindow;
	
	@FindBy(xpath = "//span[text()='Select Converted Status']")
	WebElement selectConvertLeadStatusButton;

	@FindBy(xpath = "//span[contains(text(),'Account Name')]/following::input[1]")
	WebElement accountNameInConvertLeadWindowTextBox;

	@FindBy(css = "[class^='modal-footer'] > button:last-child")
	WebElement convertButton;

	@FindBy(xpath = "//span[@class='uiOutputText'][text()='Your lead has been converted']")
	WebElement convertSuccessWindowMsg;

	@FindBy(xpath = "//div[@class='headerConvertedItem slds-text-heading_large'][contains(text(),'Account')]")
	WebElement accountTextbox;

	@FindBy(xpath = "//div[@class='headerConvertedItem slds-text-heading_large'][contains(text(),'Contact')]")
	WebElement contactTextbox;

	@FindBy(xpath = "//div[@class='headerConvertedItem slds-text-heading_large'][contains(text(),'Opportunity')]")
	WebElement opportunityTextbox;

	@FindBy(xpath = "//button[@title='Close this window']")
	WebElement closeWindowButton;

	@FindBy(xpath = "//a[@title='Edit']")
	WebElement leadEditButton;

	@FindBy(xpath = "//div[@title='Change Owner']/parent::a/parent::li/following-sibling::li//a[contains(@title,'Show')]")
	WebElement showButton;

	@FindBy(xpath = "//a[@title='Delete']")
	WebElement deleteLeadButton;

	@FindBy(xpath = "//button[@title='Delete']")
	WebElement deleteButton;

	@FindBy(xpath = "//a[contains(@class,'slds-truncate outputLookupLink')]")
	WebElement firstLeadNameOfRecentlyViewedPage;
	

	public LeadPage(WebDriver rdriver) {
		driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	public void clickNewButton() {
		// Click New button
		newLeadButton.click();
		waitforElement(driver, newLeadPopupComponent);
		// verifying the new lead pop up window
		assertTrue(popUpTitle.getText().contains("New Lead"));
		log("Click on New button to create Lead");
	}

	public void selectRecordTypeAndClickNext() {

		waitforElement(driver, recordTypeValue);
		// Selecting the record type
		recordTypeValue.click();
		// click Next
		nextButton.click();
		waitforElement(driver, selectSalution);
		log("New Lead Pop up - Selecting the Record Type and Clicking Next");
	}

	public void inputLeadCreateData(Map<String, String> testdata, String businessUnit) {

		log("Running the Bussiness unit as : " + businessUnit);
		
		// Validating the Lead Type Header
		assertTrue(popUpTitle.getText().contains("New Lead: Inmarsat Leads"));

		// Select the name Type
		selectSalution.click();

		saluationValue.click();
		
		// Enter Last name and store it					
		
		String leadRand =  testdata.get(LASTNAME)+ machineTimeStamp();
		runtimeLead = leadRand;
		leadName.sendKeys(runtimeLead);
		log("Created Lead name is : " + runtimeLead);

		// Enter the Company name
		
		String createcompany = testdata.get(COMPANYNAM)+ machineTimeStamp();
		companyName.sendKeys(createcompany);

		// Enter the email id
		emailTextbox.sendKeys(testdata.get(EMAIL));

		// Select Lead Source
		selectLeadSource.click();
		leadSourceValue.click();

		// Select Lead Country
		selectCountry.click();
		countryValue.click();

		//Select Business Unit 
		selectBusinessUnit.click();
		selectDropDrownListFromulList(driver, businessUnitValue, businessUnit);

		// Select Vertical Market
		selectVertical.click();
		verticalValue.click();
		
		log("User entered all the mandatory fields to create a lead");
		}
	
	public void save() {
		waitforElement(driver, saveButton);
		saveButton.click();
		log("Save button clicked");
	}
	
	public void leadCreationValidation() {

		waitforElement(driver, convertedButton);
		pageRefresh(driver);
		waitForPageToLoad(driver);
		waitforElement(driver, convertedButton);
		assertTrue(leadTitle.getText().contains(runtimeLead));
		log("Lead Created successfully");
	}

	public void createlead(Map<String, String> testdata, String businessUnit) {

		log("Running the Bussiness unit as : " + businessUnit);

		// Validating the Lead Type Header
		assertTrue(popUpTitle.getText().contains("New Lead: Inmarsat Leads"));

		// Select the name Type
		selectSalution.click();

		saluationValue.click();

		// Enter Last name and store it
		String newLeadNameText = testdata.get(LASTNAME);
		String leadRand = newLeadNameText + machineTimeStamp();
		runtimeLead = leadRand;
		leadName.sendKeys(runtimeLead);
		log("Created Lead name is : " + runtimeLead);

		// Enter the Company name
		String leadCompanyText = testdata.get(COMPANYNAM);
		String company = leadCompanyText + machineTimeStamp();
		companyName.sendKeys(company);

		// Enter the email id
		emailTextbox.sendKeys(testdata.get(EMAIL));

		// Select Lead Source
		selectLeadSource.click();
		leadSourceValue.click();

		// Select Lead Country
		selectCountry.click();
		countryValue.click();

		// Select Business Unit
		selectBusinessUnit.click();
		selectDropDrownListFromulList(driver, businessUnitValue, businessUnit);

		// Select Vertical Market
		selectVertical.click();
		verticalValue.click();

		// Click save button
		saveButton.click();

		waitforElement(driver, forceActionFlashMsgComponent);

		waitforElement(driver, emailLink);

	}

	public void editLead(Map<String, String> testdata) {

		// click edit lead button
		leadEditButton.click();

		// Waiting for the lead pop up to be displayed
		waitforElement(driver, selectBusinessUnit);

		// Validating the Lead Type Header
		assertTrue(editPopUpTitle.getText().contains("Edit Lead"));

		// Edit the last name
		String editlastName = testdata.get(LASTNAME)+machineTimeStamp();

		leadName.clear();
		leadName.sendKeys(editlastName);

		// Edit the Company name
		
		String editcompany = testdata.get(COMPANYNAM)+ machineTimeStamp();
		companyName.clear();
		companyName.sendKeys(editcompany);

		// Edit the email id
		emailTextbox.clear();
		emailTextbox.sendKeys(testdata.get(EMAIL));

		// Click save button
		saveButton.click();

		waitforElement(driver, forceActionFlashMsgComponent);
		pageRefresh(driver);
		waitForPageToLoad(driver);
		waitforElement(driver, emailLink);

		// validate the Leads Details Page
		assertTrue(emailLink.getText().contains(testdata.get(EMAIL)));
		log("User is able to edit the Lead");
	}

	public void deleteLead() {
		// click show button
		showButton.click();

		waitforElement(driver, deleteLeadButton);

		// click edit delete button
		deleteLeadButton.click();

		// Waiting for the delete pop up to be displayed
		waitforElement(driver, newLeadPopupComponent);

		// Validating the Delete pop up Header
		assertTrue(popUpTitle.getText().contains("Delete Lead"));

		deleteButton.click();

		waitforElement(driver, firstLeadNameOfRecentlyViewedPage);

		assertTrue(!firstLeadNameOfRecentlyViewedPage.getText().contains(runtimeLead));
		
		log("User is able to delete the Lead");
	}

	public void clickConvertedButton() {
		waitforElement(driver, convertedButton);
		convertedButton.click();
		waitforElement(driver, selectConvertLeadStatusButton);
	}

	public void clickSelectConvertedStatusButton() {
		selectConvertLeadStatusButton.click();
		waitForTextToAppear(driver, convertLeadWindow.getText(), convertLeadWindow);
	}

	public void convertLeadWindow() {
		assertTrue(convertLeadWindow.getText().contains("Convert Lead"));
	}

	public void clickConvertButton() {

		accountNameInConvertLeadWindowTextBox.sendKeys(Keys.TAB);

		for (int counter = 0; counter < 3; counter++) {

			if (convertButton.isEnabled()) {
				convertButton.click();
			}
		}
		waitforElement(driver, convertSuccessWindowMsg);
	}

	public void validateSuccessMessageAndClickClose() {
		assertTrue(convertSuccessWindowMsg.getText().contains("Your lead has been converted"));
		assertTrue(accountTextbox.getText().contains("ACCOUNT"));
		assertTrue(contactTextbox.getText().contains("CONTACT"));
		assertTrue(opportunityTextbox.getText().contains("OPPORTUNITY"));
		closeWindowButton.click();
		pageRefresh(driver);
		waitForPageToLoad(driver);
	}

	public void clickLeadsTab() {
		waitforElement(driver, btnLeads);
		btnLeads.click();
		waitforApexpageload();
		waitforElement(driver, btnLeadsActive);
		assertTrue(driver.getTitle().contains("Leads"));
		
		log("Click on Lead Tab and landed in Leads Home Page");
	}
}