$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6254127001,
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
  "duration": 10041935609,
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
formatter.step({
  "line": 21,
  "name": "Validate Campaign is added to Lead",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 16073147102,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.createlead(DataTable)"
});
formatter.result({
  "duration": 15827190477,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 390257,
  "error_message": "java.lang.NullPointerException\r\n\tat com.inmarsat.sfdc.pages.AssociateCampaignToLeadPage.\u003cinit\u003e(AssociateCampaignToLeadPage.java:59)\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.associate_campaign_to_lead(AssociateCampaignToLeadStepDefs.java:63)\r\n\tat ✽.And Associate Campaign to Lead(AssociateCampaignToLead.feature:20)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 997233496,
  "status": "passed"
});
});