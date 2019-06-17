$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5958265778,
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
  "duration": 8085453296,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 72,
      "value": "#And logout the Application"
    },
    {
      "line": 75,
      "value": "###"
    },
    {
      "line": 76,
      "value": "### All BU\u0027s Campaign Updation"
    },
    {
      "line": 77,
      "value": "###"
    }
  ],
  "line": 84,
  "name": "Updation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;updation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@Aviation"
    },
    {
      "line": 81,
      "name": "@Campaign"
    },
    {
      "line": 82,
      "name": "@AviationCampaignUpdation"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 87
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 88
    }
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 89,
      "value": "#And the user belongs to ABU profile"
    }
  ],
  "line": 90,
  "name": "their is a need to update few fields details",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "user has option to update the details for existing campaign",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13665672819,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 9045986094,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.need_to_Update_Campaign()"
});
formatter.result({
  "duration": 405049,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.update_Campaign()"
});
formatter.result({
  "duration": 5016957995,
  "status": "passed"
});
formatter.after({
  "duration": 1127119252,
  "status": "passed"
});
});