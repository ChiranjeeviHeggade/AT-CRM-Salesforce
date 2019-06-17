##
##Author : Madhu
##@Category Feature File for Campaign workflows
##@param Secnario files related to Campaign
##

Feature: Campaign Creation, Updation and Deletion 

Background: 
	Given user launch the salesforce application
	
	###
	### All BU's Campaign Creation 
	###
	
@Aviation 
@Campaign 
@AviationCampaignCreation 
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Aviation|
	Then the new campaign should created successfully
	And logout the Application 
		
	
@Maritime 
@MBU 
@Campaign 
@MaritimeCampaignCreation 
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a MBU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Maritime|
	Then the new campaign should created successfully 
	#And logout the Application 
	
@Enterprise 
@EBU 
@Campaign 
@EnterpriseCampaignCreation 
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a EBU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Enterprise|
	Then the new campaign should created successfully  
	#And logout the Application 
	
@G2
@Campaign 
@G2CampaignCreation 
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a G2 Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|G2|
	Then the new campaign should created successfully  
	#And logout the Application
	
	
@USG 
@Campaign 
@USGCampaignCreation 
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a USG Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|USG|
	Then the new campaign should created successfully 
	#And logout the Application
	
	
###
### All BU's Campaign Updation 
###

	
@Aviation
@Campaign 
@AviationCampaignUpdation

Scenario: Updation of Campaign
  Given user able to login 
  When the user has a existing campaign
    |BU|
		|Aviation|
	#And the user belongs to ABU profile
	When their is a need to update few fields details   
	Then user has option to update the details for existing campaign
	#And logout the Application 
    	
			
@Maritime
@Campaign 
@MaritimeCampaignUpdation

Scenario: Updation of Campaign
	Given user able to login 
  When the user has a existing campaign
    |BU|
		|Maritime|
	#And the user belongs to MBU profile
	When their is a need to update few fields details   
	Then user has option to update the details for existing campaign
	#And logout the Application 
    
		
			
@Enterprise
@Campaign 
@EnterpriseCampaignUpdation

Scenario: Updation of Campaign
	Given user able to login 
  When the user has a existing campaign
		|BU|
		|Enterprise|
	#And the user belongs to EBU profile
	When their is a need to update few fields details   
	Then user has option to update the details for existing campaign
	#And logout the Application 
    
			
@G2
@Campaign 
@G2CampaignUpdation

Scenario: Updation of Campaign
	Given user able to login 
  When the user has a existing campaign
		|BU|
		|G2|
	#And the user belongs to G2 profile
	When their is a need to update few fields details   
	Then user has option to update the details for existing campaign
	#And logout the Application 
   		
			
@USG
@Campaign 
@USGCampaignUpdation

Scenario: Updation of Campaign
	Given user able to login 
  When the user has a existing campaign
		|BU|
		|USG|
	#And the user belongs to USG profile
	When their is a need to update few fields details   
	Then user has option to update the details for existing campaign 
	#And logout the Application    
		

###
### All BU's Campaign Deletion 
###		
		
@Aviation
@Campaign 
@AviationCampaignDeletion
		
Scenario: Deletion of Campaign
	Given user able to login 
  When the user has a existing campaign
		|BU|
		|Aviation|
	#And the user belongs to ABU profile
	When there is a need to delete any of the existing campaign
	Then user has option to delete the campaign successfully
	#And logout the Application 
		
@Maritime
@Campaign 
@MaritimeCampaignDeletion
		
Scenario: Deletion of Campaign
  Given user able to login 
  When the user has a existing campaign
	  |BU|
		|Maritime|
	#And the user belongs to ABU profile
	When there is a need to delete any of the existing campaign
	Then user has option to delete the campaign successfully
	#And logout the Application 
	
		
@Enterprise
@Campaign 
@EnterpriseCampaignDeletion
		
Scenario: Deletion of Campaign
	Given user able to login 
  When the user has a existing campaign
	  |BU|
		|Enterprise|
	#And the user belongs to ABU profile
	When there is a need to delete any of the existing campaign
	Then user has option to delete the campaign successfully
	#And logout the Application 
	
		
@G2
@Campaign 
@G2CampaignDeletion
		
Scenario: Deletion of Campaign
  Given user able to login 
  When the user has a existing campaign
	  |BU|
		|G2|
	#And the user belongs to ABU profile
	When there is a need to delete any of the existing campaign
	Then user has option to delete the campaign successfully
	#And logout the Application 
	
		
@USG
@Campaign 
@USGCampaignDeletion
		
Scenario: Deletion of Campaign
	Given user able to login 
  When the user has a existing campaign
	  |BU|
		|USG|
	#And the user belongs to ABU profile
	When there is a need to delete any of the existing campaign
	Then user has option to delete the campaign successfully
	#And logout the Application 
	
	

###
### All BU's Campaign Activate Check Flag True
###		



@Aviation 
@Campaign 
@AviationCampaignActiveCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Aviation|
	And the campaign Activate status to be
		|Active|
		|Yes|
	Then the campaign is visible globally
	And logout the Application  
	
	

@Maritime
@Campaign 
@MaritimeCampaignActiveCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Maritime|
	And the campaign Activate status to be
		|Active|
		|Yes|
	Then the campaign is visible globally
	And logout the Application  
	


@Enterprise
@Campaign 
@EnterpriseCampaignActiveCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Enterprise|
	And the campaign Activate status to be
		|Active|
		|Yes|
	Then the campaign is visible globally
	And logout the Application
	


@G2
@Campaign 
@G2CampaignActiveCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|G2|
	And the campaign Activate status to be
		|Active|
		|Yes|
	Then the campaign is visible globally
	And logout the Application
	
	

@USG
@Campaign 
@USGCampaignActiveCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|USG|
	And the campaign Activate status to be
		|Active|
		|Yes|
	Then the campaign is visible globally
	And logout the Application
	
	
	
###
### All BU's Campaign Activate Check Flag False
###		
	
	
@Enterprise
@Campaign 
@EnterpriseCampaignActiveUnCheck
Scenario: Creation of Campaign 
	Given user able to login 
	#And the user is a ABU Profile group member
	When user created the new campaign under Campaigns page 
		|BU|
		|Aviation|
	And the campaign Activate status to be
	|Active|
	|No|
	Then the campaign is visible globally
	#And logout the Application 
	
	
	
