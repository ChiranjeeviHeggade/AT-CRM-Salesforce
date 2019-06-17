$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8169886296,
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
  "duration": 8846030091,
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
      "value": "#And the user is a G2 Profile group member"
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
  "duration": 14222529612,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 9351303411,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 347592,
  "status": "passed"
});
formatter.after({
  "duration": 957850986,
  "status": "passed"
});
});