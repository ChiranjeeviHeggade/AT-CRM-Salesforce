$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaign.feature");
formatter.feature({
  "line": 1,
  "name": "Campaign Creation, Updation and Deletion",
  "description": "",
  "id": "campaign-creation,-updation-and-deletion",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6189585474,
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
  "duration": 8658405838,
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
  "duration": 28293161278,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 12760991778,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 295254,
  "status": "passed"
});
formatter.after({
  "duration": 685015593,
  "status": "passed"
});
formatter.before({
  "duration": 6223551525,
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
  "duration": 17916997476,
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
      "value": "#And the user is a MBU Profile group member"
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
  "duration": 78488591512,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 8512997394,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 341333,
  "status": "passed"
});
formatter.after({
  "duration": 641248733,
  "status": "passed"
});
formatter.before({
  "duration": 5055096842,
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
  "duration": 8742641713,
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
      "value": "#And the user is a EBU Profile group member"
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
  "duration": 13853930507,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 8279801503,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 551253,
  "status": "passed"
});
formatter.after({
  "duration": 681340005,
  "status": "passed"
});
formatter.before({
  "duration": 6353370721,
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
  "duration": 7947066072,
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
  "duration": 14746932838,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 8729030489,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 353848,
  "status": "passed"
});
formatter.after({
  "duration": 659096469,
  "status": "passed"
});
formatter.before({
  "duration": 6382910820,
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
  "duration": 9281061022,
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
      "value": "#And the user is a USG Profile group member"
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
  "duration": 13484207089,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.create_Campaign(DataTable)"
});
formatter.result({
  "duration": 7376944319,
  "status": "passed"
});
formatter.match({
  "location": "CampaignsStepDefs.campaign_Created_Successfully()"
});
formatter.result({
  "duration": 364658,
  "status": "passed"
});
formatter.after({
  "duration": 661442565,
  "status": "passed"
});
});