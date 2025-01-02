Feature: SauceDemo Application

Scenario: Validate the login Functionality
Given User launch the Application
And User Navigate into Login Page
When User Enter the username "standard_user"
And User Enter the password "secret_sauce"
And User click the login button in Application
Then User Observe that MainPage displays