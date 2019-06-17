$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6125646969,
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
  "duration": 8471322336,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Creation of Campaign",
  "description": "",
  "id": "associate-campaign-to-lead;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@CreateCampaignForAviation"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user created the new campaign under Campaigns page",
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
  "name": "the new campaign should created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 15146634399,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 9567528760,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 366364,
  "status": "passed"
});
formatter.after({
  "duration": 940887375,
  "status": "passed"
});
formatter.before({
  "duration": 5238332383,
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
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 11613011388,
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
  "duration": 15058924324,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLead.createlead(DataTable)"
});
formatter.result({
  "duration": 14275777187,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLead.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 72818,
  "status": "passed"
});
formatter.after({
  "duration": 919486362,
  "status": "passed"
});
});