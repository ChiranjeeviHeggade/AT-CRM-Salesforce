Feature: Login 
	As ifferent type of Profile users, check whether we are able to login.
	
Background: 
	Given user launch the salesforce application
	
	
@Admincredentials 
Scenario: Login as admin 
	Then user able to login 
		|profile|
		|Admin|
		
	And logout the Application 
	
	
@ABU_credentials 
Scenario: Login as ABU user 
	Then user able to login 
		|profile|
		|ABU|
		
	And logout the Application 
	
	
@MBU_credentials 
Scenario: Login with MBU user profile Credentials 
	Then Login page is displayed 
	When Entered valid profile username and password details 
		|profile|
		|MBU|
	And  Click on Login button 
	Then The Inmarsat Homepage get displayes 
	
@EBU_credentials 
Scenario: Login with EBU user profile Credentials 
	Then Login page is displayed
	When Entered valid profile username and password details 
		|profile|
		|EBU|
	And  Click on Login button 
	Then The Inmarsat Homepage get displayes 
	
@G2_credentials 
Scenario: Login with G2 user profile Credentials 
	Then Login page is displayed
	When Entered valid profile username and password details 
		|profile|
		|G2|
	And  Click on Login button 
	Then The Inmarsat Homepage get displayes 
	
@USG_credentials 
Scenario: Login with USG user profile Credentials 
	Then Login page is displayed
	When Entered valid profile username and password details 
		|profile|
		|USG|
	And  Click on Login button 
	Then The Inmarsat Homepage get displayes