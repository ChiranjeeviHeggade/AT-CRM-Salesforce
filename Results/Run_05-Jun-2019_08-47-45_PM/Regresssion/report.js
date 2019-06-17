$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6104756817,
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
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 8489566587,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create Lead and Associate Campaign to it",
  "description": "",
  "id": "associate-campaign-to-lead;create-lead-and-associate-campaign-to-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@CreateLeadForAviation"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Create a lead for associate campaign",
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
  "name": "Associate Campaign to Lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14147917243,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.createlead(DataTable)"
});
formatter.result({
  "duration": 16537989230,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 18886497093,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63296}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: dd2537b6bc11235908431e4ca8b6df39\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy25.click(Unknown Source)\r\n\tat com.inmarsat.sfdc.pages.AssociateCampaignToLeadPage.enterCampaignName(AssociateCampaignToLeadPage.java:81)\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.associate_campaign_to_lead(AssociateCampaignToLeadStepDefs.java:71)\r\n\tat ✽.And Associate Campaign to Lead(AssociateCampaignToLead.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1435745192,
  "status": "passed"
});
});