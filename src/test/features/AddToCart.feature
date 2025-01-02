Feature: Add to cart Functionality

Background:
Given User launch the Browser
 Given User navigate into Application
 And User click the login button

Scenario Outline:
    When User enter the username "<username>"
    And User enter the Password "<password>"
    And user click the submit button
    And User search for a "<book>"
    When User add the book to the cart
    Then cart bag should be updated

    Examples:
    |username|password    |book   |
    |Thivakar|Thivakar12!@|roomies|
    |Thivakar|Thivakar12!@|bbieee33 | 
