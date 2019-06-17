$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16764786832,
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
  "duration": 12394200410,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 17446212171,
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
      "name": "@Aviation"
    },
    {
      "line": 7,
      "name": "@LeadCampaignAssociation"
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
  "duration": 12421907551,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 21492376895,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 10584866772,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1258349860,
  "status": "passed"
});
formatter.after({
  "duration": 1106161971,
  "status": "passed"
});
formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5694662802,
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
  "duration": 8566137259,
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
  "duration": 13992159580,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 6921465525,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 16055041091,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 10570449433,
  "status": "passed"
});
formatter.after({
  "duration": 1109757916,
  "status": "passed"
});
formatter.before({
  "duration": 4942778360,
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
  "duration": 7740479368,
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
  "duration": 13386517003,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 8671572761,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.need_to_Update_Campaign()"
});
formatter.result({
  "duration": 117760,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.update_Campaign()"
});
formatter.result({
  "duration": 5206705032,
  "status": "passed"
});
formatter.after({
  "duration": 1052576097,
  "status": "passed"
});
formatter.before({
  "duration": 6141211187,
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
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 19524658468,
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
  "duration": 39795845863,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 8580401567,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.need_to_delete_campaign()"
});
formatter.result({
  "duration": 98986,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.delete_the_Campaign()"
});
formatter.result({
  "duration": 14483599516,
  "status": "passed"
});
formatter.after({
  "duration": 1032894835,
  "status": "passed"
});
formatter.before({
  "duration": 6861104758,
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
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 10593504205,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 231,
      "value": "#And logout the Application"
    },
    {
      "line": 235,
      "value": "###"
    },
    {
      "line": 236,
      "value": "### All BU\u0027s Campaign Activate Check Flag True"
    },
    {
      "line": 237,
      "value": "###"
    }
  ],
  "line": 244,
  "name": "Creation of Campaign",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion;creation-of-campaign",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 241,
      "name": "@Aviation"
    },
    {
      "line": 242,
      "name": "@Campaign"
    },
    {
      "line": 243,
      "name": "@AviationCampaignActiveCheck"
    }
  ]
});
formatter.step({
  "line": 245,
  "name": "user able to login",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 246,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 247,
  "name": "user created the new campaign under Campaigns page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 248
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 249
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "the campaign Activate status tobe",
  "rows": [
    {
      "cells": [
        "Active"
      ],
      "line": 251
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 252
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "the campaign is visible globally",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 22996199825,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 10209786701,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CampaignsStepDefs.Campaign_ActiveCheckGlobally()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 992027598,
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
  "duration": 6163354599,
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
  "duration": 9791441529,
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
  "duration": 21166098347,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 34159536219,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8368586779,
  "status": "passed"
});
formatter.after({
  "duration": 1038488145,
  "status": "passed"
});
formatter.before({
  "duration": 5690263589,
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
  "duration": 9884366036,
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
  "duration": 14293395092,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 25947402854,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 25938204497,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 13113512579,
  "status": "passed"
});
formatter.after({
  "duration": 1119030227,
  "status": "passed"
});
formatter.before({
  "duration": 5073639760,
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
  "duration": 8315447482,
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
  "duration": 14141980323,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 24487853094,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 4933768875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8237695798,
  "status": "passed"
});
formatter.after({
  "duration": 1536033960,
  "status": "passed"
});
formatter.before({
  "duration": 5601956749,
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
  "duration": 8569511336,
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
  "duration": 13518141283,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 24914778810,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 62971773464,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //ul[@role\u003d\u0027listbox\u0027]//li//a//span[text()\u003d\u0027Converted\u0027]\u0027 (tried for 50 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertedButton(LeadPage.java:404)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:74)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:184)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//ul[@role\u003d\u0027listbox\u0027]//li//a//span[text()\u003d\u0027Converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63802}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 0ca0124d7052a590bda38fa5ab38cef7\n*** Element info: {Using\u003dxpath, value\u003d//ul[@role\u003d\u0027listbox\u0027]//li//a//span[text()\u003d\u0027Converted\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy43.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertedButton(LeadPage.java:404)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:74)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1085280922,
  "status": "passed"
});
});