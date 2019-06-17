package com.at.crm.salesforce.runners;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;

import com.at.crm.salesforce.framework.Settings;
import com.at.crm.salesforce.framework.TimeStamp;
import com.at.crm.salesforce.framework.Util;
import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.github.mkolisnyk.cucumber.reporting.CucumberDetailedResults;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@ExtendedCucumberOptions(jsonReport = "C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion/cucumber.json", jsonUsageReport = "C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion/cucumber-usage.json", outputFolder = "C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion", detailedReport = true, detailedAggregatedReport = true, overviewReport = true, usageReport = true)

/**
 * Please notice that com.at.crm.salesforce.stepDefinations.CukeHooks class is in
 * the same package as the steps definitions. It has two methods that are
 * executed before or after scenario. I'm using to take a screenshot if scenario
 * fails.
 */
@CucumberOptions(features = "C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/src/test/resources/features", glue = { "com.at.crm.salesforce.stepdefinitions" }, tags = {
"@Campaign" }, monochrome = true, plugin = { "pretty", "pretty:C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion/pretty.txt",
        "html:C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion", "json:C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion/cucumber.json",
        "junit:C:/Jenkins/workspace/SFDC/AT-SFDC-Regression/SFDC_Cucumber/target/cucumber-report/Regresssion/cucumber-junitreport.xml",
        "com.cucumber.listener.ExtentCucumberFormatter:" })

public class RunCucumberTests_Api extends AbstractTestNGCucumberTests {

	static String resultFolder;
	Properties properties = Settings.getInstance();

	@BeforeSuite
	private void beforeSuite() {

		if ((Boolean.parseBoolean(properties.getProperty("SaveReports")))) {
			resultFolder = TimeStamp.getInstance();
		}
	}

	@BeforeClass
	private void beforeClass() {

		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath("target/ExtentReport/InmarsatTestExecutionReport.html");
		new File("target/ExtentReport/screenshots").mkdir();
	}

	@AfterClass
	private void afterClass() {
		Properties properties = Settings.getInstance();
		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		Reporter.setSystemInfo("Project Name", properties.getProperty("ProjectName"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 7");
	}

	@AfterTest
	private void afterTest() {
		generateCustomReports();
	}

	@AfterSuite()
	private void afterSuite() {
		if ((Boolean.parseBoolean(properties.getProperty("SaveReports")))) {
			copyReportsFolder();
		}
	}

	private void generateCustomReports() {

		CucumberResultsOverview results1 = new CucumberResultsOverview();
		results1.setOutputDirectory("target/cucumber-report/API");
		results1.setOutputName("cucumber-results");
		results1.setSourceFile("target/cucumber-report/API/cucumber.json");
		try {
			results1.executeFeaturesOverviewReport();
		} catch (Exception e) {
			e.printStackTrace();
		}

		CucumberDetailedResults detailedResults = new CucumberDetailedResults();
		detailedResults.setOutputDirectory("target/cucumber-report/API");
		detailedResults.setOutputName("cucumber-results");
		detailedResults.setSourceFile("target/cucumber-report/API/cucumber.json");
		detailedResults.setScreenShotLocation("./API");
		try {
			detailedResults.executeDetailedResultsReport(false, true);
		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	private void copyReportsFolder() {

		File sourceCucumber = new File(Util.getTargetPath());
		File sourceExtent = new File(Util.getTargetExtentReportPath());
		File destination = new File(resultFolder);
		try {
			FileUtils.copyDirectory(sourceCucumber, destination);
			FileUtils.copyDirectory(sourceExtent, destination);
			// try {
			// FileUtils.cleanDirectory(sourceCucumber);
			// } catch (Exception e) {
			//
			// }
		} catch (IOException e) {
			e.printStackTrace();
		}
		// TimeStamp.reportPathWithTimeStamp = null;
	}
}