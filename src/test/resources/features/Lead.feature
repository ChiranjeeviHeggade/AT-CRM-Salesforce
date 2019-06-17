Feature: Lead Creation, Updation, Conversion and Deletion

  Background: 
    Given user launch the salesforce application

  ###
  ### All BU's Lead Creation
  ###
  @Lead @Aviation @LeadCreation @AviationLeadCreation
  Scenario: Creation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Aviation |
    And logout the Application

  @Lead @Maritime @LeadCreation @MaritimeLeadCreation
  Scenario: Creation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Maritime |
    And logout the Application

  @Lead @Enterprise @LeadCreation @EnterpriseLeadCreation
  Scenario: Creation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU         |
      | Enterprise |
    And logout the Application

  @Lead @G2 @LeadCreation @G2LeadCreation
  Scenario: Creation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU |
      | G2 |
    And logout the Application

  ###
  ### All BU's Lead Updation
  ###
  @Lead @Aviation @LeadUpdation @AviationLeadUpdation
  Scenario: Updation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Aviation |
    Then able to 'Edit the Lead' information successfully
    And logout the Application

  @Lead @Maritime @LeadUpdation @MaritimeLeadUpdation
  Scenario: Updation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Maritime |
    Then able to 'Edit the Lead' information successfully
    And logout the Application

  @Lead @Enterprise @LeadUpdation @EnterpriseLeadUpdation
  Scenario: Updation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU         |
      | Enterprise |
    Then able to 'Edit the Lead' information successfully
    And logout the Application

  @Lead @G2 @LeadUpdation @G2LeadUpdation
  Scenario: Updation of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU |
      | G2 |
    Then able to 'Edit the Lead' information successfully
    And logout the Application

  ###
  ### All BU's Lead Deletion
  ###
  @Lead @Aviation @LeadDeletion @AviationLeadDeletion
  Scenario: Deletion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Aviation |
    Then able to 'Delete the Lead' successfully
    And logout the Application

  @Lead @Maritime @LeadDeletion @MaritimeLeadDeletion
  Scenario: Deletion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Maritime |
    Then able to 'Delete the Lead' successfully
    And logout the Application

  @Lead @Enterprise @LeadDeletion @EnterpriseLeadDeletion
  Scenario: Deletion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU         |
      | Enterprise |
    Then able to 'Delete the Lead' successfully
    And logout the Application

  @Lead @G2 @LeadDeletion @G2LeadDeletion
  Scenario: Deletion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU |
      | G2 |
    Then able to 'Delete the Lead' successfully
    And logout the Application

  ###
  ### All BU's Lead Conversion
  ###
  @Lead @Aviation @LeadConversion @AviationLeadConversion
  Scenario: Conversion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Aviation |
    And able to 'convert the lead'
    And logout the Application

  @Lead @Maritime @LeadConversion @MaritimeLeadConversion
  Scenario: Conversion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU       |
      | Maritime |
    And able to 'convert the lead'
    And logout the Application

  @Lead @Enterprise @LeadConversion @EnterpriseLeadConversion
  Scenario: Conversion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU         |
      | Enterprise |
    And able to 'convert the lead'
    And logout the Application

  @Lead @G2 @LeadConversion @G2LeadConversion
  Scenario: Conversion of Lead
    When user able to login
    #And the user is a ABU Profile group member
    Then user created the 'New Lead' under lead page
      | BU |
      | G2 |
    And able to 'convert the lead'
    And logout the Application
