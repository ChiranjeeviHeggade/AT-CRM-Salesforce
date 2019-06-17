Feature: Associate Campaign To Lead

  Background: 
    Given user launch the salesforce application
    And user able to login

  ###
  ### All BU's Lead Creation
  ###
  @Lead @Aviation @AviationAssociation
  Scenario: Associating Campaign to Lead
    When the user has a existing campaign
      | BU       |
      | Aviation |
    And existing lead
      | BU       |
      | Aviation |
    Then Campaign added to Lead
    And Validate adding Campaign to Lead is success

  @Lead @Maritime @MaritimeAssociation
  Scenario: Associating Campaign to Lead
    When the user has a existing campaign
      | BU       |
      | Maritime |
    And existing lead
      | BU       |
      | Maritime |
    Then Campaign added to Lead
    Then Validate adding Campaign to Lead is success

  @Lead @Enterprise @EnterpriseAssociation
  Scenario: Associating Campaign to Lead
    When the user has a existing campaign
      | BU         |
      | Enterprise |
    And existing lead
      | BU         |
      | Enterprise |
    Then Campaign added to Lead
    Then Validate adding Campaign to Lead is success

  @Lead @G2 @G2Association
  Scenario: Associating Campaign to Lead
    When the user has a existing campaign
      | BU |
      | G2 |
    And existing lead
      | BU |
      | G2 |
    Then Campaign added to Lead
    Then Validate adding Campaign to Lead is success
