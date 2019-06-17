$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssociateCampaignToLead.feature");
formatter.feature({
  "line": 1,
  "name": "Associate Campaign To Lead",
  "description": "",
  "id": "associate-campaign-to-lead",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5661770244,
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
  "duration": 8887927846,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 16321706392,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "###"
    },
    {
      "line": 8,
      "value": "### All BU\u0027s Lead Creation"
    },
    {
      "line": 9,
      "value": "###"
    }
  ],
  "line": 11,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Lead"
    },
    {
      "line": 10,
      "name": "@Aviation"
    },
    {
      "line": 10,
      "name": "@AviationAssociation"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user has a existing campaign",
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
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 16
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 6848369054,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 19948355742,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 13445749664,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1170096494,
  "status": "passed"
});
formatter.after({
  "duration": 979436960,
  "status": "passed"
});
formatter.before({
  "duration": 5347977090,
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
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 7925644579,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 28013613499,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Lead"
    },
    {
      "line": 21,
      "name": "@Maritime"
    },
    {
      "line": 21,
      "name": "@MaritimeAssociation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 24
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 27
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7405702765,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 17103699823,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 13729076000,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1104226613,
  "status": "passed"
});
formatter.after({
  "duration": 953988306,
  "status": "passed"
});
formatter.before({
  "duration": 6332888463,
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
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 7917295573,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13681438423,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Lead"
    },
    {
      "line": 32,
      "name": "@Enterprise"
    },
    {
      "line": 32,
      "name": "@EnterpriseAssociation"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 35
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 36
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 38
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7028612811,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 16838424885,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 10878283482,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 1168540585,
  "status": "passed"
});
formatter.after({
  "duration": 1000714523,
  "status": "passed"
});
formatter.before({
  "duration": 5383773255,
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
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 8502497420,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 72577750547,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Associating Campaign to Lead",
  "description": "",
  "id": "associate-campaign-to-lead;associating-campaign-to-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Lead"
    },
    {
      "line": 43,
      "name": "@G2"
    },
    {
      "line": 43,
      "name": "@G2Association"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user has a existing campaign",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 46
    },
    {
      "cells": [
        "G2"
      ],
      "line": 47
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "existing lead",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 49
    },
    {
      "cells": [
        "G2"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Campaign added to Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Validate adding Campaign to Lead is success",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaignsStepDefs.checking_the_Existing_campaign(DataTable)"
});
formatter.result({
  "duration": 7422049205,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.existing_lead(DataTable)"
});
formatter.result({
  "duration": 22004126716,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.associate_campaign_to_lead()"
});
formatter.result({
  "duration": 19735417399,
  "status": "passed"
});
formatter.match({
  "location": "AssociateCampaignToLeadStepDefs.validate_adding_campaign_to_lead_is_success()"
});
formatter.result({
  "duration": 4332518685,
  "status": "passed"
});
formatter.after({
  "duration": 2030561823,
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
  "duration": 4649782627,
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
  "duration": 8296410769,
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
  "line": 10,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Lead"
    },
    {
      "line": 9,
      "name": "@Aviation"
    },
    {
      "line": 9,
      "name": "@LeadCreation"
    },
    {
      "line": 9,
      "name": "@AviationLeadCreation"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 13,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 14
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13164950899,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 21895541849,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 7507074127,
  "status": "passed"
});
formatter.after({
  "duration": 1400855836,
  "status": "passed"
});
formatter.before({
  "duration": 4463997898,
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
  "duration": 7160639294,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Lead"
    },
    {
      "line": 18,
      "name": "@Maritime"
    },
    {
      "line": 18,
      "name": "@LeadCreation"
    },
    {
      "line": 18,
      "name": "@MaritimeLeadCreation"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 22,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 23
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13868392219,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20990030230,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8551298943,
  "status": "passed"
});
formatter.after({
  "duration": 1211105384,
  "status": "passed"
});
formatter.before({
  "duration": 5640516005,
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
  "duration": 7722360273,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Lead"
    },
    {
      "line": 27,
      "name": "@Enterprise"
    },
    {
      "line": 27,
      "name": "@LeadCreation"
    },
    {
      "line": 27,
      "name": "@EnterpriseLeadCreation"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 31,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 32
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 16539916624,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 21436959201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 9816010113,
  "status": "passed"
});
formatter.after({
  "duration": 1049867051,
  "status": "passed"
});
formatter.before({
  "duration": 4943897363,
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
  "duration": 6837179019,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Creation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;creation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Lead"
    },
    {
      "line": 36,
      "name": "@G2"
    },
    {
      "line": 36,
      "name": "@LeadCreation"
    },
    {
      "line": 36,
      "name": "@G2LeadCreation"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 40,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 41
    },
    {
      "cells": [
        "G2"
      ],
      "line": 42
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12212341579,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 21062500925,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8815740460,
  "status": "passed"
});
formatter.after({
  "duration": 971452611,
  "status": "passed"
});
formatter.before({
  "duration": 4461828726,
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
  "duration": 12798157826,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "###"
    },
    {
      "line": 46,
      "value": "### All BU\u0027s Lead Updation"
    },
    {
      "line": 47,
      "value": "###"
    }
  ],
  "line": 49,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Lead"
    },
    {
      "line": 48,
      "name": "@Aviation"
    },
    {
      "line": 48,
      "name": "@LeadUpdation"
    },
    {
      "line": 48,
      "name": "@AviationLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 52,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 53
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13490264613,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20632751816,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 67023889331,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.editLead(LeadPage.java:374)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.edit_the_lead_information(LeadStepDefs.java:59)\r\n\tat ✽.Then able to \u0027Edit the Lead\u0027 information successfully(Lead.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1002223785,
  "status": "passed"
});
formatter.before({
  "duration": 4579965799,
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
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 7163565087,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@Lead"
    },
    {
      "line": 58,
      "name": "@Maritime"
    },
    {
      "line": 58,
      "name": "@LeadUpdation"
    },
    {
      "line": 58,
      "name": "@MaritimeLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 61,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 62,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 63
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 64
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 14314280123,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22533687864,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 23680940645,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8710166718,
  "status": "passed"
});
formatter.after({
  "duration": 989729289,
  "status": "passed"
});
formatter.before({
  "duration": 4863267672,
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
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 6100986225,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@Lead"
    },
    {
      "line": 68,
      "name": "@Enterprise"
    },
    {
      "line": 68,
      "name": "@LeadUpdation"
    },
    {
      "line": 68,
      "name": "@EnterpriseLeadUpdation"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 71,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 72,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 73
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 74
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12719657484,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22661171205,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 12784676877,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8709623999,
  "status": "passed"
});
formatter.after({
  "duration": 1026410644,
  "status": "passed"
});
formatter.before({
  "duration": 4633321842,
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
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 12037904466,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Updation of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;updation-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@Lead"
    },
    {
      "line": 78,
      "name": "@G2"
    },
    {
      "line": 78,
      "name": "@LeadUpdation"
    },
    {
      "line": 78,
      "name": "@G2LeadUpdation"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 81,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 82,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 83
    },
    {
      "cells": [
        "G2"
      ],
      "line": 84
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "able to \u0027Edit the Lead\u0027 information successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13791074028,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 24718033876,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.edit_the_lead_information()"
});
formatter.result({
  "duration": 22645972782,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 10652711265,
  "status": "passed"
});
formatter.after({
  "duration": 1040651627,
  "status": "passed"
});
formatter.before({
  "duration": 4747092696,
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
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 6666850987,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 88,
      "value": "###"
    },
    {
      "line": 89,
      "value": "### All BU\u0027s Lead Deletion"
    },
    {
      "line": 90,
      "value": "###"
    }
  ],
  "line": 92,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@Lead"
    },
    {
      "line": 91,
      "name": "@Aviation"
    },
    {
      "line": 91,
      "name": "@LeadDeletion"
    },
    {
      "line": 91,
      "name": "@AviationLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 94,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 95,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 96
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 97
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12953244200,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22272606771,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 3994312822,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 6861291923,
  "status": "passed"
});
formatter.after({
  "duration": 1603375557,
  "status": "passed"
});
formatter.before({
  "duration": 4700033110,
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
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 6348673409,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@Lead"
    },
    {
      "line": 101,
      "name": "@Maritime"
    },
    {
      "line": 101,
      "name": "@LeadDeletion"
    },
    {
      "line": 101,
      "name": "@MaritimeLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 104,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 105,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 106
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 107
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12935668962,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 33505514235,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 4962022717,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 7127193776,
  "status": "passed"
});
formatter.after({
  "duration": 1020687058,
  "status": "passed"
});
formatter.before({
  "duration": 4534148664,
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
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 6602992126,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@Lead"
    },
    {
      "line": 111,
      "name": "@Enterprise"
    },
    {
      "line": 111,
      "name": "@LeadDeletion"
    },
    {
      "line": 111,
      "name": "@EnterpriseLeadDeletion"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 114,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 115,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 116
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 117
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "able to \u0027Delete the Lead\u0027 successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 12497651060,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 22510522729,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 3021155253,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 8465713096,
  "status": "passed"
});
formatter.after({
  "duration": 931220823,
  "status": "passed"
});
formatter.before({
  "duration": 4905666925,
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
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 6325537287,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Deletion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;deletion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@Lead"
    },
    {
      "line": 121,
      "name": "@G2"
    },
    {
      "line": 121,
      "name": "@LeadDeletion"
    },
    {
      "line": 121,
      "name": "@G2LeadDeletion"
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
        "G2"
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
  "duration": 78929664344,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 27281134978,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.delete_the_lead()"
});
formatter.result({
  "duration": 3778396918,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "duration": 9283151118,
  "status": "passed"
});
formatter.after({
  "duration": 989230943,
  "status": "passed"
});
formatter.before({
  "duration": 4471533962,
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
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 7029372277,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 131,
      "value": "###"
    },
    {
      "line": 132,
      "value": "### All BU\u0027s Lead Conversion"
    },
    {
      "line": 133,
      "value": "###"
    }
  ],
  "line": 135,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 134,
      "name": "@Lead"
    },
    {
      "line": 134,
      "name": "@Aviation"
    },
    {
      "line": 134,
      "name": "@LeadConversion"
    },
    {
      "line": 134,
      "name": "@AviationLeadConversion"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 137,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 138,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 139
    },
    {
      "cells": [
        "Aviation"
      ],
      "line": 140
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 16773287162,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 21003161312,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138819969576,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:141)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59018}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 0735190357f2aa655ae0fd9c71c5a324\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor88.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy43.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1018194189,
  "status": "passed"
});
formatter.before({
  "duration": 4494473818,
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
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 6975737479,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 144,
      "name": "@Lead"
    },
    {
      "line": 144,
      "name": "@Maritime"
    },
    {
      "line": 144,
      "name": "@LeadConversion"
    },
    {
      "line": 144,
      "name": "@MaritimeLeadConversion"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 147,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 148,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 149
    },
    {
      "cells": [
        "Maritime"
      ],
      "line": 150
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13032088151,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20443231195,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138439703519,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:151)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59287}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 3837f4dca527be6649548963369bfeba\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor88.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy43.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 957765724,
  "status": "passed"
});
formatter.before({
  "duration": 4916743751,
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
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 6980414310,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 154,
      "name": "@Lead"
    },
    {
      "line": 154,
      "name": "@Enterprise"
    },
    {
      "line": 154,
      "name": "@LeadConversion"
    },
    {
      "line": 154,
      "name": "@EnterpriseLeadConversion"
    }
  ]
});
formatter.step({
  "line": 156,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 157,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 158,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 159
    },
    {
      "cells": [
        "Enterprise"
      ],
      "line": 160
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 13197101058,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 20969959279,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138486563424,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:161)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59550}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: e45da7e9484557b15d388995e8b80206\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor88.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy43.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 982672797,
  "status": "passed"
});
formatter.before({
  "duration": 6296744138,
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
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 8054529660,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "Conversion of Lead",
  "description": "",
  "id": "lead-creation,-updation,-conversion-and-deletion;conversion-of-lead",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 164,
      "name": "@Lead"
    },
    {
      "line": 164,
      "name": "@G2"
    },
    {
      "line": 164,
      "name": "@LeadConversion"
    },
    {
      "line": 164,
      "name": "@G2LeadConversion"
    }
  ]
});
formatter.step({
  "line": 166,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 167,
      "value": "#And the user is a ABU Profile group member"
    }
  ],
  "line": 168,
  "name": "user created the \u0027New Lead\u0027 under lead page",
  "rows": [
    {
      "cells": [
        "BU"
      ],
      "line": 169
    },
    {
      "cells": [
        "G2"
      ],
      "line": 170
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "able to \u0027convert the lead\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "logout the Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_able_to_login()"
});
formatter.result({
  "duration": 17088392742,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.create_lead(DataTable)"
});
formatter.result({
  "duration": 23847558388,
  "status": "passed"
});
formatter.match({
  "location": "LeadStepDefs.i_click_on_converted_button()"
});
formatter.result({
  "duration": 138412103328,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\u0027 (tried for 120 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat ✽.And able to \u0027convert the lead\u0027(Lead.feature:171)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027QT-INBG-LT0548\u0027, ip: \u002710.20.12.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\CHIRAN~1.HEG\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59832}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 928a68bb1461a0872e20ed9f0b63cb11\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027uiOutputText\u0027][text()\u003d\u0027Your lead has been converted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor88.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy43.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.inmarsat.sfdc.pages.TestBase.WaitforElement(TestBase.java:49)\r\n\tat com.inmarsat.sfdc.pages.LeadPage.clickConvertButton(LeadPage.java:427)\r\n\tat com.inmarsat.sfdc.stepdefinitions.LeadStepDefs.i_click_on_converted_button(LeadStepDefs.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefs.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 956302544,
  "status": "passed"
});
});