$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8319594678,
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
  "duration": 9037353213,
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
  "line": 13,
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
      "name": "@Campaign"
    },
    {
      "line": 12,
      "name": "@AviationCampaignCreation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 16,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 17
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the new campaign should created successfully",
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
  "duration": 16771882577,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 8475943985,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 14413319611,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8893783415,
  "status": "passed"
});
formatter.after({
  "duration": 1130335178,
  "status": "passed"
});
formatter.before({
  "duration": 5763040913,
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
  "duration": 8071831833,
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
  "duration": 14662418208,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7200641820,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.need_to_Update_Campaign()"
});
formatter.result({
  "duration": 133688,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.update_Campaign()"
});
formatter.result({
  "duration": 4947968329,
  "status": "passed"
});
formatter.after({
  "duration": 1025396316,
  "status": "passed"
});
formatter.before({
  "duration": 5842167032,
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
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 8243980876,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 153,
      "value": "#And logout the Application"
    },
    {
      "line": 156,
      "value": "###"
    },
    {
      "line": 157,
      "value": "### All BU\u0027s Campaign Deletion"
    },
    {
      "line": 158,
      "value": "###"
    }
  ],
  "line": 164,
  "name": "Deletion of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;deletion-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 160,
      "name": "@Aviation"
    },
    {
      "line": 161,
      "name": "@Campaign"
    },
    {
      "line": 162,
      "name": "@AviationCampaignDeletion"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 167
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 168
    }
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 169,
      "value": "#And the user belongs to ABU profile"
    }
  ],
  "line": 170,
  "name": "there is a need to delete any of the existing campaign",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "user has option to delete the campaign successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 31215116047,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7817308316,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.need_to_delete_campaign()"
});
formatter.result({
  "duration": 108658,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.delete_the_Campaign()"
});
formatter.result({
  "duration": 13143264305,
  "status": "passed"
});
formatter.after({
  "duration": 1086289562,
  "status": "passed"
});
});