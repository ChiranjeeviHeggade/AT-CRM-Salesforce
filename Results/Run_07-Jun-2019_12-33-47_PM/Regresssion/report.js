$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6609183906,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 8119220804,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 32619464858,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Lead"
    },
    {
      "line": 8,
      "name": "@Aviation"
    },
    {
      "line": 8,
      "name": "@LeadCampaignAssociation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 11
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 14
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 6722578157,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 22209613759,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 13453474600,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1245960039,
  "status": "passed"
});
formatter.after({
  "duration": 1104142418,
  "status": "passed"
});
formatter.before({
  "duration": 5565836317,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 7386287742,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14416148694,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Lead"
    },
    {
      "line": 20,
      "name": "@Maritime"
    },
    {
      "line": 20,
      "name": "@LeadCampaignAssociation"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 23
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 26
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7311071023,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 18929571616,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 11418605154,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1229598809,
  "status": "passed"
});
formatter.after({
  "duration": 1004399214,
  "status": "passed"
});
formatter.before({
  "duration": 7200803953,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 8512099687,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14458295929,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Lead"
    },
    {
      "line": 31,
      "name": "@Enterprise"
    },
    {
      "line": 31,
      "name": "@LeadCampaignAssociation"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 34
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 35
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 37
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7545494006,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 18840819905,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 9883641273,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1290607538,
  "status": "passed"
});
formatter.after({
  "duration": 1008001984,
  "status": "passed"
});
formatter.before({
  "duration": 5176993698,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 7537449355,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 29820759193,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Lead"
    },
    {
      "line": 42,
      "name": "@G2"
    },
    {
      "line": 42,
      "name": "@LeadCampaignAssociation"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 45
    },
    {
      "cells": [
        "G2"
      ],
      "line": 46
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 48
    },
    {
      "cells": [
        "G2"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 8220084719,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 18866752682,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 12015503916,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1503058344,
  "status": "passed"
});
formatter.after({
  "duration": 1044872211,
  "status": "passed"
});
formatter.before({
  "duration": 6184691895,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 8148183483,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14614240756,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@Lead"
    },
    {
      "line": 53,
      "name": "@USG"
    },
    {
      "line": 53,
      "name": "@LeadCampaignAssociation"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 56
    },
    {
      "cells": [
        "USG"
      ],
      "line": 57
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 59
    },
    {
      "cells": [
        "USG"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7403306038,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 153635774319,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[contains(@class,\u0027forceActionsText\u0027)]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.Save(LeadPage.java:271)\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.existing_lead(AssociateCampaignToLeadStepDefs.java:67)\r\n\tat ✽.And existing lead(AssociateCampaignToLead.feature:58)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(@class,\u0027forceActionsText\u0027)]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51795}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: b1d0072c6ada75d34b73aa8a44783b76\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(@class,\u0027forceActionsText\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.Save(LeadPage.java:271)\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.existing_lead(AssociateCampaignToLeadStepDefs.java:67)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1203100556,
  "status": "passed"
});
formatter.uri("Lead.feature");
formatter.feature({
  "line": 1,
  "name": "Lead Creation, Updation, Conversion and Deletion",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5383930268,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 8686440090,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "###"
    },
    {
      "line": 7,
      "value": "### All BU\u0027s Lead Creation"
    },
    {
      "line": 8,
      "value": "###"
    }
  ],
  "line": 14,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Lead"
    },
    {
      "line": 11,
      "name": "@Aviation"
    },
    {
      "line": 12,
      "name": "@LeadCreation"
    },
    {
      "line": 13,
      "name": "@AviationLeadCreation"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 17,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 18
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 61313115039,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 27139477214,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 12550286321,
  "status": "passed"
});
formatter.after({
  "duration": 1128602912,
  "status": "passed"
});
formatter.before({
  "duration": 5736239443,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 7784585286,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Lead"
    },
    {
      "line": 23,
      "name": "@Maritime"
    },
    {
      "line": 24,
      "name": "@LeadCreation"
    },
    {
      "line": 25,
      "name": "@MaritimeLeadCreation"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 29,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 30
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 31
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 37781678267,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 23349417516,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 10419795269,
  "status": "passed"
});
formatter.after({
  "duration": 1077599791,
  "status": "passed"
});
formatter.before({
  "duration": 5548358928,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 8719932826,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Lead"
    },
    {
      "line": 35,
      "name": "@Enterprise"
    },
    {
      "line": 36,
      "name": "@LeadCreation"
    },
    {
      "line": 37,
      "name": "@EnterpriseLeadCreation"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 41,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 42
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 43
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 15259698694,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 73244599827,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8589536777,
  "status": "passed"
});
formatter.after({
  "duration": 990867634,
  "status": "passed"
});
formatter.before({
  "duration": 4474305017,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 10570626357,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@Lead"
    },
    {
      "line": 47,
      "name": "@G2"
    },
    {
      "line": 48,
      "name": "@LeadCreation"
    },
    {
      "line": 49,
      "name": "@G2LeadCreation"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 53,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 54
    },
    {
      "cells": [
        "G2"
      ],
      "line": 55
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12462894254,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20731934665,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 9440864051,
  "status": "passed"
});
formatter.after({
  "duration": 990729395,
  "status": "passed"
});
formatter.before({
  "duration": 6243809072,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 12359477738,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 58,
      "value": "###"
    },
    {
      "line": 59,
      "value": "### All BU\u0027s Lead Updation"
    },
    {
      "line": 60,
      "value": "###"
    }
  ],
  "line": 66,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@Lead"
    },
    {
      "line": 63,
      "name": "@Aviation"
    },
    {
      "line": 64,
      "name": "@LeadUpdation"
    },
    {
      "line": 65,
      "name": "@AviationLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 69,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 70
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 71
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13337855996,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22425810125,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 14417573191,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 7293983891,
  "status": "passed"
});
formatter.after({
  "duration": 1426206072,
  "status": "passed"
});
formatter.before({
  "duration": 4966829255,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 8162943292,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@Lead"
    },
    {
      "line": 76,
      "name": "@Maritime"
    },
    {
      "line": 77,
      "name": "@LeadUpdation"
    },
    {
      "line": 78,
      "name": "@MaritimeLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 81,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 82,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 83
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 84
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13697206303,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20964324440,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 13548301470,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 9243958120,
  "status": "passed"
});
formatter.after({
  "duration": 918915767,
  "status": "passed"
});
formatter.before({
  "duration": 5634356081,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 7062194863,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@Lead"
    },
    {
      "line": 89,
      "name": "@Enterprise"
    },
    {
      "line": 90,
      "name": "@LeadUpdation"
    },
    {
      "line": 91,
      "name": "@EnterpriseLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 94,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 95,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 96
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 97
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 15761760346,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22527001151,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 12799025380,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 9275888689,
  "status": "passed"
});
formatter.after({
  "duration": 1428847989,
  "status": "passed"
});
formatter.before({
  "duration": 5451789552,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 6906276773,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@Lead"
    },
    {
      "line": 102,
      "name": "@G2"
    },
    {
      "line": 103,
      "name": "@LeadUpdation"
    },
    {
      "line": 104,
      "name": "@G2LeadUpdation"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 107,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 108,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 109
    },
    {
      "cells": [
        "G2"
      ],
      "line": 110
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12991118515,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 23020147183,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 16758350428,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 21037389052,
  "status": "passed"
});
formatter.after({
  "duration": 1469051333,
  "status": "passed"
});
formatter.before({
  "duration": 5621958865,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 8484627498,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 114,
      "value": "###"
    },
    {
      "line": 115,
      "value": "### All BU\u0027s Lead Deletion"
    },
    {
      "line": 116,
      "value": "###"
    }
  ],
  "line": 122,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@Lead"
    },
    {
      "line": 119,
      "name": "@Aviation"
    },
    {
      "line": 120,
      "name": "@LeadDeletion"
    },
    {
      "line": 121,
      "name": "@AviationLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 124,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 125,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 126
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 127
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 15381203586,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 25677026125,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 4874187485,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8114521787,
  "status": "passed"
});
formatter.after({
  "duration": 1577363703,
  "status": "passed"
});
formatter.before({
  "duration": 5285121748,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 9193508529,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 131,
      "name": "@Lead"
    },
    {
      "line": 132,
      "name": "@Maritime"
    },
    {
      "line": 133,
      "name": "@LeadDeletion"
    },
    {
      "line": 134,
      "name": "@MaritimeLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 137,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 138,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 139
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 140
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 20258976206,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 23369576076,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 3751019733,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8322696826,
  "status": "passed"
});
formatter.after({
  "duration": 1016206493,
  "status": "passed"
});
formatter.before({
  "duration": 4495267417,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 6909594531,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 144,
      "name": "@Lead"
    },
    {
      "line": 145,
      "name": "@Enterprise"
    },
    {
      "line": 146,
      "name": "@LeadDeletion"
    },
    {
      "line": 147,
      "name": "@EnterpriseLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 150,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 151,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 152
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 153
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14738876810,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22848157427,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 3821654623,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 7397142132,
  "status": "passed"
});
formatter.after({
  "duration": 943561719,
  "status": "passed"
});
formatter.before({
  "duration": 4904657148,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 7864375298,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 157,
      "name": "@Lead"
    },
    {
      "line": 158,
      "name": "@G2"
    },
    {
      "line": 159,
      "name": "@LeadDeletion"
    },
    {
      "line": 160,
      "name": "@G2LeadDeletion"
    }
  ]
});
formatter.step({
  "line": 162,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 163,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 164,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 165
    },
    {
      "cells": [
        "G2"
      ],
      "line": 166
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13086692335,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 21976949780,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 2959372834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 7059885744,
  "status": "passed"
});
formatter.after({
  "duration": 1066604885,
  "status": "passed"
});
formatter.before({
  "duration": 5419244015,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 7450958406,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 170,
      "value": "###"
    },
    {
      "line": 171,
      "value": "### All BU\u0027s Lead Conversion"
    },
    {
      "line": 172,
      "value": "###"
    }
  ],
  "line": 178,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 174,
      "name": "@Lead"
    },
    {
      "line": 175,
      "name": "@Aviation"
    },
    {
      "line": 176,
      "name": "@LeadConversion"
    },
    {
      "line": 177,
      "name": "@AviationLeadConversion"
    }
  ]
});
formatter.step({
  "line": 179,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 180,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 181,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 182
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 183
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13431439845,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 24920756121,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138623128499,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:184)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54209}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: ddef9f1f0ce2100299e34bc46bd5433e\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor61.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1122722313,
  "status": "passed"
});
formatter.before({
  "duration": 5102959698,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 8311510774,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 187,
      "name": "@Lead"
    },
    {
      "line": 188,
      "name": "@Maritime"
    },
    {
      "line": 189,
      "name": "@LeadConversion"
    },
    {
      "line": 190,
      "name": "@MaritimeLeadConversion"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 193,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 194,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 195
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 196
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 46490878443,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 23359891320,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138669970771,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:197)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54506}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 5ff769e9c480364ce6ead18ca7a83515\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor61.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 921455854,
  "status": "passed"
});
formatter.before({
  "duration": 5844224133,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 9379346165,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 200,
      "name": "@Lead"
    },
    {
      "line": 201,
      "name": "@Enterprise"
    },
    {
      "line": 202,
      "name": "@LeadConversion"
    },
    {
      "line": 203,
      "name": "@EnterpriseLeadConversion"
    }
  ]
});
formatter.step({
  "line": 205,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 206,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 207,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 208
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 209
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 210,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13404732242,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22820635744,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138373926366,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:210)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54821}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 55fe19d85781b0b23adbbdc05f349bc2\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor61.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 998098775,
  "status": "passed"
});
formatter.before({
  "duration": 4643940144,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "duration": 7679269820,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 213,
      "name": "@Lead"
    },
    {
      "line": 214,
      "name": "@G2"
    },
    {
      "line": 215,
      "name": "@LeadConversion"
    },
    {
      "line": 216,
      "name": "@G2LeadConversion"
    }
  ]
});
formatter.step({
  "line": 218,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 219,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 220,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 221
    },
    {
      "cells": [
        "G2"
      ],
      "line": 222
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 36129286716,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22463211694,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138381327035,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:223)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55099}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 6d7e85a1cc6a06f60f0475c68692c4fa\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor61.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 952587133,
  "status": "passed"
});
});