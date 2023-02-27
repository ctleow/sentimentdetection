# Welcome to Twilio Messaging with Sentiment Detection

Hi! Welcome to this git repo. What this repo seeks to achieve is to help customers be able to add sentiment detection (or analysis in the future) as part of the 2 way conversation done via Twilio. This is to help filter profanities, understand customer's response sentiment and reporting for regulatory compliances. It's a straightforward setup so read more to understand more!


## Table of Content
- [Solution Description](#solution-description)
- [Architecture/Solution Diagram](#architecturesolution-diagram)
- [Business Value](#business-value)
- [Use Case & Industry](#use-case--industry)
- [Products Involved](#products-involved)
- [Demo Setup](#demo-setup)
- [Demo Script](#demo-script)
- [Any other reference links](#any-other-reference-links)


## Solution Description
Currently, Twilio does not have the ability to conduct sentiment analysis on the responses or inbound messages. As many brands is looking for ways to improve their customer engagement, sentiment analysis becomes increasing important especially when there is raising need to automate engagement. We need to take into account the customer's sentiment to provide top-notch experiences. 

By leveraging the power of Twilio's "programmability", this project seeks to empower our customers to add-on keyword based sentiment detection to all inbound messages. This includes all messaging channels, such as SMS, WhatsApp, FB Messenger, etc. 

The "Word Bank" is maintained using Google Sheet which is widely available to all our customers. When an inbound message arrives, Twilio Studio routes the message to a Twilio Function which will check against the word bank for any occurance of keyword that represents a negative sentiment. Once proceesed, the function returns the result back to Twilio Studio flow for further actions.


## Architecture/Solution Diagram
![Solution Architecture](https://github.com/ctleow/sentimentdetection/blob/main/img/solution-journey.png)


## Business Value
- **Improves customers engagement** - Brands now are able to understand customer sentiment better.
- **Centralised Reporting** - In countries where brands are highly regulated to provide monthly sentiment report, this will be useful for reporting purposes.
- **Ease of Use** - Low maintainence, easy to manage and able to adjust to evolving business & regulatory requirements.
- **Unlock endless opportunities** - Ability to do more by integrating with a NLP chatbot or other platforms to support more use cases!


## Use Case & Industry
- Applicable to all B2C industries
- Enhanced Automated customer service 
- Compliance to local regulatory requirements
- Extensible to other channels such as voice (Text to Speech)


## Products Involved
- Twilio WhatsApp for Business API
- Twilio Studio
- Twilio Function
- Google Sheets & API


## Demo Setup
#### Prerequisites
- A Google account (you can use AirTable if you want but this changes the integration code base)
- A Twilio account
- A Twilio phone number with WhatsApp Business Sender registered. (You can do this with SMS too!)
- Installed Twilio CLI & Twilio Serverless toolkit
- Your **Account SID** and **Auth Token**, found in your Twilio account dashboard


#### Step 1: Setup service account for Google Sheet API
- Go to the [Google APIs Console](https://console.developers.google.com/)
- Create a new project
- Click Enable API. Search for and enable the Google Drive API
- Create credentials for a Web Server to access Application Data
- Name the service account and grant it a Project Role of Editor
- Download the JSON file (keep it we will need it later)


#### Step 2: Create the Google Sheet
- Create a Google sheet with 2 tabs: **"Word Bank"** and **"Logs"**
- For the **Word Bank** tab, create 2 columns: **"Words"** and **"Count"**
- Start building your word bank by inserting keywords. The solution ignores case senstitivity. Hence, feel free to simply insert the keywords!
- For the **Logs** tab, create 2 columns: **"Word"** and **"TextMsg"**

We need to give access to our service account to this sheet so we can use it through the API. Click the Share button and enter the client_email from the JSON file you downloaded earlier. We also need the sheet ID so that we can access it from the API. The ID is available in the URL of the sheet, the URL looks like this:

```https://docs.google.com/spreadsheets/d/{GOOGLE_SPREADSHEET_KEY}/edit```

Grab the ```GOOGLE_SPREADSHEET_KEY``` from your URL and keep it safe too.


#### Step 3: Download this repo 
- Download this github repo into your local machine


#### Step 4: Setting up Credentials
- Open up the .env file in the repo you just downloaded and include your Twilio Credentals and the ```GOOGLE_SPREADSHEET_KEY``` you saved earlier
- Remember the JSON file at step 2 which continas the Google Sheet API credentials? We need to store that as a private asset in Twilio Function. Go into the assets folder, either copy and paste or replace the ```credentials.private.json```


#### Step 5: Time to deploy!
- We will be using Twilio serverless Function to deploy and the command is just one line in the terminal! <br />```npm run deploy```
- The functions and asset will be deployed to your Twilio Account (**pro-tip**: do make sure you have configure your Twilio CLI proper and using the right profile!)


#### Step 5: Upload the Studio Workflow
- Go to Twilio Studio and create a new flow (select import from JSON)
- Paste the ```Example-Studio-Flow.json``` into the flow definition
- Configure the ```SentimentAnalysis``` widget by pointing the Function URL to the Function you just deployed
- If you're configuring WhatsApp messaging, please setup the webhook for your WhatsApp Sender to be pointing to the Studio Flow's Webhook URL which can be found in the Trigger widget


#### Step 6: WOOOHOO! You're now ready to test! 
- Try sending a WhatsApp messaging to the Twilio WhatsApp number and check if a postive or negative sentiment has been detected. Do take note if the detected keyword count has incremeted by 1 or if the Google Sheet logs down the word and message. If so, the solution is functioning properly! **Congratulations on setting up Sentiment Detection!** 


## Demo Script
| Demo Screen  | Talk Track |
| ------------- | ------------- |
| ![demo_screen1](https://github.com/ctleow/sentimentdetection/blob/main/img/1_demo.png) | We'll start off from the marketer's view whereby the marketer can use the Google Sheet to upload words that are considered to be negative sentiment. The "count" next to each word indicates the number of times such words appeared in the customer's responses. The benefit of this is that it's easy for business users to manage this without the need for IT team to support and it can also support other languages as well! |
| ![demo_screen2](https://github.com/ctleow/sentimentdetection/blob/main/img/2_demo.png) | So let's see how it will look like when a customer starts messaging into Owl Taxi. Here, a message has been sent to the WhatsApp Business Account of Owl Taxi. When Twilio receives the inbound message, it will do a look-up within Google Sheet to check if there is a match. This is currently on a "First Occurence" basis. As soon as there's a match, it will add the count by 1 and reply the customer that a negative sentiment has been detected  |
| ![demo_screen3](https://github.com/ctleow/sentimentdetection/blob/main/img/3_demo.png) | In addition, Twilio will log this message down and this can be used for future analysis by Owl Taxi by feeding this to an analytics tool such as Tableau.  |
| ![demo_screen4](https://github.com/ctleow/sentimentdetection/blob/main/img/4_demo.png) | The automated 2 way conversation is facilitated by Twilio Studio, which is a low/no code builder. When an inbound messages arrives, it routes to Twilio Function (I will touch on that in a second), which will run the logic to lookup in the Google Sheet and returns the result.  |
| ![demo_screen5](https://github.com/ctleow/sentimentdetection/blob/main/img/5_demo.png) | Twilio Function is a serverless environment that allows customers to host programming logics on Twilio. In this case, I've built the logic to check for a keyword match from the Google Sheet before parsing the results back to Studio for a response  |


## Any other reference links
- Google Sheets API: https://developers.google.com/sheets/api/guides/concepts#:~:text=The%20Google%20Sheets%20API%20is,Update%20spreadsheet%20formatting
- Twilio CLI: https://www.twilio.com/docs/twilio-cli/quickstart
- Twilio Serverless Toolkit: https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit


## Credits to these blogs that helped me build this project!
- https://www.twilio.com/blog/community-sms-group-chat-twilio-functions-google-sheets
