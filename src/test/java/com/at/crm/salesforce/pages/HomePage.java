package com.at.crm.salesforce.pages;

import static org.testng.Assert.assertTrue;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.at.crm.salesforce.base.TestBase;

public class HomePage extends TestBase {
	
		
	@FindBy(xpath="//div[@data-component-id='home_newsPanel']")
	WebElement cmpHomeNewsPanel;
	
	public HomePage(WebDriver rdriver){
		driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	public void getHomepageTitleAndValidate()
	{	
		waitforElement(driver, cmpHomeNewsPanel);
		assertTrue(driver.getTitle().contains("Home"));
	}
}
