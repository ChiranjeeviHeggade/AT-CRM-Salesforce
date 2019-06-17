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
import com.at.crm.salesforce.base.TestBase;
import com.at.crm.salesforce.framework.Settings;
import com.at.crm.salesforce.framework.TimeStamp;
import com.at.crm.salesforce.framework.Util;
import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.github.mkolisnyk.cucumber.reporting.CucumberDetailedResults;
import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;


@ExtendedCucumberOptions(jsonReport = "./target/cucumber-report/Regresssion/cucumber.json", jsonUsageReport = "./target/cucumber-report/Regresssion/cucumber-usage.json", outputFolder = "./target/cucumber-report/Regresssion", detailedReport = true, detailedAggregatedReport = true, overviewReport = true, usageReport = true)				   

@CucumberOptions(features = "./src/test/resources/features", glue = { "com.at.crm.salesforce.stepdefinitions" }, tags = {
        "@AviationCampaignCreation" }, monochrome = true, plugin = { "pretty", "pretty:./target/cucumber-report/Regresssion/pretty.txt",
                "html:./target/cucumber-report/Regresssion", "json:./target/cucumber-report/Regresssion/cucumber.json",
                "junit:./target/cucumber-report/Regresssion/cucumber-junitreport.xml",
                "com.cucumber.listener.ExtentCucumberFormatter:" })

public class RunCucumberTestUSG extends TestBase {

	static String resultFolder;
	Properties properties = Settings.getInstance();

	@BeforeSuite
	private void beforeSuite() {
          initiateLogs();
		if ((Boolean.parseBoolean(properties.getProperty("SaveReports")))) {
			resultFolder = TimeStamp.getInstance();
		}
	}

	@BeforeClass
	private void beforeClass() {

		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath("./target/ExtentReport/InmarsatTestExecutionReport.html");
		new File("./target/ExtentReport/screenshots").mkdir();
	}

	@AfterClass
	private void afterClass() {
		Properties prop = Settings.getInstance();
		Reporter.loadXMLConfig(new File("./src/test/resources/extent-config.xml"));
		Reporter.setSystemInfo("Project Name", prop.getProperty("ProjectName"));
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
		results1.setOutputDirectory("./target/cucumber-report/Regresssion");
		results1.setOutputName("cucumber-results");
		results1.setSourceFile("./target/cucumber-report/Regresssion/cucumber.json");
		try {
			results1.executeFeaturesOverviewReport();
		} catch (Exception e) {
			e.printStackTrace();
		}

		CucumberDetailedResults detailedResults = new CucumberDetailedResults();
		detailedResults.setOutputDirectory("./target/cucumber-report/Regresssion");
		detailedResults.setOutputName("cucumber-results");
		detailedResults.setSourceFile("./target/cucumber-report/Regresssion/cucumber.json");
		detailedResults.setScreenShotLocation("./Regresssion");
		try {
			detailedResults.executeDetailedResultsReport(false, false);
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

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}