$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5494686582,
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
  "duration": 7945739993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 30522374381,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@AssociateCampaignToLead"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 10
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 13
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 8816308779,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 27794750,
  "error_message": "java.lang.NullPointerException\r\n\tat com.inmarsat.sfdc.stepdefinitions.AssociateCampaignToLeadStepDefs.existing_lead(AssociateCampaignToLeadStepDefs.java:58)\r\n\tat ✽.And existing lead(AssociateCampaignToLead.feature:12)\r\n",
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
  "duration": 917301830,
  "status": "passed"
});
});