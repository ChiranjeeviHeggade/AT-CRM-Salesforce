package com.at.crm.salesforce.pages;

import static org.testng.Assert.assertTrue;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.at.crm.salesforce.base.TestBase;

public class CommonPage extends TestBase {

	WebDriver driver;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Home']/span[contains(text(),'Home')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_home;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Accounts']/span[contains(text(),'Accounts')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_accounts;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Contacts']/span[contains(text(),'Contacts')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_contacts;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Opportunities']/span[contains(text(),'Opportunities')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_opportunities;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Opportunity Groups']/span[contains(text(),'Opportunity Groups')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_opportunityGroups;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Leads']/span[contains(text(),'Leads')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_leads;

	@FindBy(xpath = "//ul[contains(@class,'oneActionsRibbon ')]//a[@title='New' and @role='button']")
	WebElement btn_leads_A;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Campaigns']/span[contains(text(),'Campaigns')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_campaigns;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Reports']/span[contains(text(),'Reports')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_reports;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Dashboards']/span[contains(text(),'Dashboards')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_dashboards;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Chatter']/span[contains(text(),'Chatter')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_chatter;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Tasks']/span[contains(text(),'Tasks')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_tasks;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Notes']/span[contains(text(),'Notes')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_notes;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='SCAP']/span[contains(text(),'SCAP')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_sCAP;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Demo Requests']/span[contains(text(),'Demo Requests')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_demoRequests;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Calendar']/span[contains(text(),'Calendar')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_calendar;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='vPlaybook']/span[contains(text(),'vPlaybook')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_vPlaybook;

	@FindBy(xpath = "//nav[@aria-label='Global Navigation']//a[@title='Cases']/span[contains(text(),'Cases')]/parent::a/parent::one-app-nav-bar-item-root")
	WebElement btn_cases;

	public CommonPage(WebDriver rdriver) {
		driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	public void clickHomeTab() {
		btn_home.click();
		assertTrue(driver.getTitle().contains("Home"));
	}

	public void clickAccountsTab() {
		btn_accounts.click();
		assertTrue(driver.getTitle().contains("Accounts"));
	}

	public void clickContactsTab() {
		btn_contacts.click();
		assertTrue(driver.getTitle().contains("Contacts"));
	}

	public void clickOpportunitiesTab() {
		btn_opportunities.click();
		assertTrue(driver.getTitle().contains("Opportunities"));
	}

	public void clickOpportunityGroupsTab() {
		btn_opportunityGroups.click();
		assertTrue(driver.getTitle().contains("Opportunity Groups"));
	}

	public void clickLeadsTab() {
		waitforElement(driver, btn_leads);
		btn_leads.click();
		waitforApexpageload();
		waitforElement(driver, btn_leads_A);
		assertTrue(driver.getTitle().contains("Leads"));
		
		log("Click on Lead Tab and landed in Leads Home Page");
	}

	public void clickCampaignsTab() {
		btn_campaigns.click();
		assertTrue(driver.getTitle().contains("Campaigns"));
	}

	public void clickReportsTab() {
		btn_reports.click();
		assertTrue(driver.getTitle().contains("Reports"));
	}

	public void clickDashboardsTab() {
		btn_dashboards.click();
		assertTrue(driver.getTitle().contains("Dashboards"));
	}

	public void clickChatterTab() {
		btn_chatter.click();
		assertTrue(driver.getTitle().contains("Chatter"));
	}

	public void clickTasksTab() {
		btn_tasks.click();
		assertTrue(driver.getTitle().contains("Tasks"));
	}

	public void clickNotesTab() {
		btn_notes.click();
		assertTrue(driver.getTitle().contains("Notes"));
	}

	public void clickSCAPTab() {
		btn_sCAP.click();
		assertTrue(driver.getTitle().contains("SCAP"));
	}

	public void clickDemoRequestsTab() {
		btn_demoRequests.click();
		assertTrue(driver.getTitle().contains("Demo Requests"));
	}

	public void clickCalendarTab() {
		btn_calendar.click();
		assertTrue(driver.getTitle().contains("Calendar"));
	}

	public void clickvPlaybookTab() {
		btn_vPlaybook.click();
		assertTrue(driver.getTitle().contains("vPlaybook"));
	}

	public void clickCasesTab() {
		btn_cases.click();
		assertTrue(driver.getTitle().contains("Cases"));
	}
}