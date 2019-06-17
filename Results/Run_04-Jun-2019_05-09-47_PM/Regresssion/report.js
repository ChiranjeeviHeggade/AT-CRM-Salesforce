$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6157399744,
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
  "name": "user lunch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 8790751679,
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
      "value": "### All BU\u0027s Campaign Creation"
    },
    {
      "line": 8,
      "value": "###"
    }
  ],
  "line": 14,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Aviation"
    },
    {
      "line": 11,
      "name": "@ABU"
    },
    {
      "line": 12,
      "name": "@Campaign"
    },
    {
      "line": 13,
      "name": "@AviationCampaignCreation"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 17,
  "name": "user created the new campaign under Campaigns page",
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
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 55249399964,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 7074064276,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 351005,
  "status": "passed"
});
formatter.after({
  "duration": 961142012,
  "status": "passed"
});
formatter.before({
  "duration": 6023334704,
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
  "name": "user lunch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 8784727710,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Maritime"
    },
    {
      "line": 24,
      "name": "@MBU"
    },
    {
      "line": 25,
      "name": "@Campaign"
    },
    {
      "line": 26,
      "name": "@MaritimeCampaignCreation"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 30,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 31
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14441724963,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 7470311086,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 385139,
  "status": "passed"
});
formatter.after({
  "duration": 1109379222,
  "status": "passed"
});
formatter.before({
  "duration": 6125635236,
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
  "name": "user lunch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 8259423226,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Enterprise"
    },
    {
      "line": 37,
      "name": "@EBU"
    },
    {
      "line": 38,
      "name": "@Campaign"
    },
    {
      "line": 39,
      "name": "@EnterpriseCampaignCreation"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 43,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 44
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 45
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13415319964,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 6932863089,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 489814,
  "status": "passed"
});
formatter.after({
  "duration": 897553833,
  "status": "passed"
});
formatter.before({
  "duration": 6227998914,
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
  "name": "user lunch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 10963641142,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@G2"
    },
    {
      "line": 50,
      "name": "@Campaign"
    },
    {
      "line": 51,
      "name": "@G2CampaignCreation"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 55,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 56
    },
    {
      "cells": [
        "G2"
      ],
      "line": 57
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 15789031926,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 24946478888,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on XP (c33985fce3699a3ffba3b663fba32a29)] -\u003e xpath: //a[@title\u003d\u0027Webinar\u0027]] (tried for 20 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0552\u0027, ip: \u002710.20.12.64\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\MADHU~1.BOY\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50306}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: c33985fce3699a3ffba3b663fba32a29\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:47)\r\n\tat com.inmarsat.sfdc.pages.CampaignsPage.create_campaign(CampaignsPage.java:109)\r\n\tat com.inmarsat.sfdc.stepdefinitions.CampaignsStepDefs.create_Campaign(CampaignsStepDefs.java:32)\r\n\tat ✽.When user created the new campaign under Campaigns page(Campaign.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 941894208,
  "status": "passed"
});
formatter.before({
  "duration": 5292555343,
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
  "name": "user lunch the salesforce application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.Launch_Inmarsat_Salesforce_Application()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 9095100668,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@USG"
    },
    {
      "line": 61,
      "name": "@Campaign"
    },
    {
      "line": 62,
      "name": "@USGCampaignCreation"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 65,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 66,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 67
    },
    {
      "cells": [
        "USG"
      ],
      "line": 68
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13891869490,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 7033548544,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 385138,
  "status": "passed"
});
formatter.after({
  "duration": 928745468,
  "status": "passed"
});
});