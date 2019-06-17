$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5308753941,
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
  "duration": 8887369198,
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
  "duration": 27538626385,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.createlead(DataTable)"
});
formatter.result({
  "duration": 36700425642,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 421976955,
  "error_message": "java.lang.NullPointerException\r\n\tat com.inmarsat.sfdc.pages.TestBase.PageRefresh(TestBase.java:96)\r\n\tat com.inmarsat.sfdc.pages.AssociateCampaignToLeadPage.clickaddCampaign(AssociateCampaignToLeadPage.java:41)\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.associate_campaign_to_lead(AssociateCampaignToLeadStepDefs.java:69)\r\n\tat ✽.And Associate Campaign to Lead(AssociateCampaignToLead.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 954301764,
  "status": "passed"
});
});