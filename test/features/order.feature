@create-order
Feature: Order

        Background: Start login the application
            Given I start the open application
             When user is on "splash" page
              And I click on the native element "btnNext"
             When user is on "home" page
              And I waiting loading for "5" seconds
              And I click on the native element "btnLogin"
             When user is on "login" page
              And I success login on the application
                  | username      | password    |
                  | 0895403495533 | Imamutama15 |

        @create-order-01
        Scenario: Create order and payment product
             When user is on "home" page
              And I click on the native element "searchInput"
             When user is on "search" page
              And I set "Indomaret beras merah 2kg" on the filed "searchInput"
              And I waiting loading for "5" seconds
              And I click on the native element "chooseItem"
              And I click on the native element "chooseItem"
             When user is on "product" page
              And I click on the native element "addCart"
              And I click on the native element "iconCart"
             When user is on "cart" page
              And I click on the native element "choosePengiriman"
              And I click on the native element "regular"
              And I click on the native element "btnSubmit"
              And I click on the native element "btnCloseAddress"
              And I click on the native element "btnSubmit"
              And I waiting loading for "10" seconds
             When user is on "payment" page
              And I click on the text element "BCA Virtual Account"
              And I click on the native element "btnPayment"
             Then I verify text value "Pembayaran" is passed on applicatiion














