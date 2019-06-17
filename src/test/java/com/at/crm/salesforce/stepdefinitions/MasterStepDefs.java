package com.at.crm.salesforce.stepdefinitions;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.remote.DriverCommand;
import org.openqa.selenium.remote.RemoteExecuteMethod;
import org.openqa.selenium.remote.RemoteWebDriver;
import com.at.crm.salesforce.base.TestBase;
import com.at.crm.salesforce.framework.DriverFactory;
import com.at.crm.salesforce.framework.HeadersForAPI;
import com.at.crm.salesforce.framework.SeleniumTestParameters;


import cucumber.api.Scenario;

public abstract class MasterStepDefs extends TestBase{

	 Logger log = Logger.getLogger(DriverFactory.class);

	protected static Scenario currentScenario;
	protected static SeleniumTestParameters currentTestParameters;
	protected static Properties properties;
	protected HeadersForAPI headers = new HeadersForAPI();

	Map<String, Object> perfectoCommand = new HashMap<>();
	private static HttpURLConnection httpURLConnect;
	int responseStatus;
	int responseCode;

	/**
	 * Function Applicable only when the ExecutionMode used is <b>PERFECTO
	 * 
	 * @param type
	 *            - Type of report like pdf
	 */
	protected byte[] downloadReport(final String type, RemoteWebDriver driver) throws IOException {
		final String command = "mobile:report:download";
		final Map<String, String> params = new HashMap<>();
		params.put("type", type);
		final String report = (String) (driver).executeScript(command, params);
		final byte[] reportBytes = OutputType.BYTES.convertFromBase64Png(report);
		return reportBytes;
	}

	/**
	 * Function Applicable to Pause the Script, Generic Application
	 * 
	 * @param How_Long_To_Pause
	 */
	protected void pauseScript(int howLongToPause) {
		// convert to seconds
		howLongToPause = howLongToPause * 1000;

		try {
			Thread.sleep(howLongToPause);
		} catch (final InterruptedException ex) {
			Thread.currentThread().interrupt();
		}
	}

	/**
	 * All reusuable Selenium Functions with Perfecto
	 */

	/**
	 * Function to switch the Context
	 * 
	 * @param driver
	 * @RemoteWebDriver
	 * @param context
	 */
	protected static void switchToContext(RemoteWebDriver driver, String context) {
		RemoteExecuteMethod executeMethod = new RemoteExecuteMethod(driver);
		Map<String, String> params = new HashMap<String, String>();
		params.put("name", context);
		executeMethod.execute(DriverCommand.SWITCH_TO_CONTEXT, params);
	}
	
	/**
	 * Function to check the broken links
	 * 
	 * @param Url
	 */
	protected void brokenLinkValidator(String Url) {
		urlLinkStatus(validationOfLinks(Url));
	}

	private String[] validationOfLinks(String urlToValidate) {
		String[] responseArray = new String[3];
		try {
			URL url = new URL(urlToValidate);
			httpURLConnect = (HttpURLConnection) url.openConnection();
			httpURLConnect.setConnectTimeout(3000);
			httpURLConnect.connect();
			responseStatus = httpURLConnect.getResponseCode();
			responseCode = responseStatus / 100;
		} catch (Exception e) {
		}
		responseArray[0] = urlToValidate;
		responseArray[1] = String.valueOf(responseCode);
		responseArray[2] = String.valueOf(responseStatus);
		return responseArray;
	}

	private void urlLinkStatus(String[] responseArray) {
		try {
			String linkValue = responseArray[0];
			String responseValue = responseArray[1];
			responseCode = Integer.valueOf(responseValue);
			String responseStatus = responseArray[2];
			switch (responseCode) {
			case 2:
				/*
				 * System.out.println("It's a Non- Broken Link with URL " +
				 * linkValue + " - " + responseCode + " - with Response code " +
				 * HttpURLConnection.HTTP_OK + " OK ");
				 */
				currentScenario.write(linkValue + ": Response code : " + responseStatus + " - OK" + " & STATUS:PASS");
				break;
			case 3:
				currentScenario.write(linkValue + ": Unknown Responce Code" + " & STATUS:FAIL");
				break;
			case 4:
				/*
				 * System.out.println("It's a Broken link with URL " + linkValue
				 * + " - " + responseCode + " - Client Error " +
				 * HttpURLConnection.HTTP_CLIENT_TIMEOUT + " Bad Request ");
				 */
				currentScenario
						.write(linkValue + ": Response code : " + responseStatus + " - Client error & STATUS:FAIL");
				break;

			case 5:
				/*
				 * System.out.println("It's a Broken link with URL " + linkValue
				 * + " - " + responseCode + " - Internal Server Error " +
				 * HttpURLConnection.HTTP_SERVER_ERROR);
				 */
				currentScenario.write(
						linkValue + ": Response code : " + responseStatus + " - Internal Server Error & STATUS:FAIL");
				break;
			default:
				currentScenario.write(linkValue + ": Unknown Responce Code & STATUS:FAIL");
				break;
			}

		} catch (Exception e) {

		} finally {
			httpURLConnect.disconnect();

		}
	}
}