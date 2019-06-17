package com.at.crm.salesforce.pages;

import static org.testng.Assert.assertTrue;

import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.at.crm.salesforce.base.TestBase;
import com.at.crm.salesforce.framework.Settings;

import org.apache.commons.codec.binary.*;


public class LoginPage extends TestBase {

	private static Properties properties = Settings.getInstance();
	public static final String ADMINUSERNAME = properties.getProperty("Admin_username");
	public static final String ADMINPASSWORD = properties.getProperty("Admin_password");	
	byte[] decodeUsername = Base64.decodeBase64(ADMINUSERNAME.getBytes());
	byte[] decodePassword = Base64.decodeBase64(ADMINPASSWORD.getBytes());

	@FindBy(xpath = "//input[@id='username']")
	WebElement username;

	@FindBy(xpath = "//input[@id='password']")
	WebElement password;

	@FindBy(xpath = "//input[@id='Login']")
	WebElement loginButton;

	@FindBy(xpath = "//button[contains(@class,'userProfile')]")
	WebElement profileImage;

	@FindBy(xpath = "//a[contains(@class,'profile-link-label logout')]")
	WebElement logoutButton;

	@FindBy(xpath = "//div[@data-component-id='home_newsPanel']")
	WebElement homePageNewsCmpt;

	public LoginPage(WebDriver rdriver) {
		driver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	
	public void entercred() {
		username.sendKeys(new String(decodeUsername) );
		password.sendKeys(new String(decodePassword));
		loginButton.click();
		waitForPageToLoad(driver);
		waitforElement(driver, homePageNewsCmpt);
		assertTrue(driver.getTitle().contains("Home"));
	}

	public void logout() {
		pageRefresh(driver);
		waitforApexpageload();
		waitforElement(driver, profileImage);
		profileImage.click();
		waitforElement(driver, logoutButton);
		logoutButton.click();
		waitforElement(driver, loginButton);
		loginButton.isDisplayed();
	}
}
