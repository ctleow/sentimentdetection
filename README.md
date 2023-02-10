# Welcome to Twilio Messaging with Sentiment Detection

Hi! Welcome to this git repo. What this repo seeks to achieve is to help customers be able to add sentiment detection (or analysis in the future) as part of the 2 way conversation done via Twilio. This is to help filter profanities, understand customer's response sentiment and reporting for regulatory compliances. It's a straightforward setup so read more to understand more!


## Table of Content
- [Solution Description](#Solution-Description)
- [Architecture/Solution Diagram](#ArchitectureSolution-Diagram)
- [Business Value](#Business-Value)
- [Use Case & Industry](#use-case--industry)
- [Products Involved](#Products-Involved)
- [Demo Setup](#Demo-Setup)
- [Demo Script](#Demo-Script)
- [Any other reference links](#Any-other-reference-links)


## Solution Description
Currently, Twilio does not have the ability to conduct sentiment analysis on the responses or inbound messages. As many brands is looking for ways to improve their customer engagement, sentiment analysis becomes increasing important especially when there is rising need to automate engagement, we need to take into account the customer's sentiment to provide amazing experiences. 

So by leveraging the power of Twilio's ability to be programmable, this project seeks to empower our customers to add-on keyword based sentiment detection to all inbound messages. This means across all messaging channels, such as SMS and WhatsApp. 

The "Word Bank" is maintained using Google Sheet which is widely accessiable to all customers. Everytime an inbound message comes in, the Twilio Function will check against the word bank for any occurance of keyword that represents a negative sentiment, and returns the result back to the Twilio Function and pass on into the Twilio Studio flow for further actions.

## Architecture/Solution Diagram
![Solution Architecture](https://github.com/ctleow/sentimentdetection/blob/main/img/solution-journey.png)

## Business Value
- **Improves customers engagement** - as Brands now understand customer sentiment better
- **Centralised Reporting** - In countries where brands are highly regulated to provide monthly sentiment report, this will be useful
- **Ease of Use** - Low maintainence, easy to manage and able to adjust to evolving business needs
- **Unlock endless opportunities** - Ability to do more by integrating with a NLP chatbot or other platforms to support more use cases!

## Use Case & Industry
- Applicable to all B2C industries
- Enhance Automated customer service 
- Compliance to local regulatory requirements
- Can extend to voice if Text to Speech added


## Products Involved
- Twilio WhatsApp for Business API
- Twilio Studio
- Twilio Function
- Google Sheets


## Demo Setup
#### Prerequisites
- A Google account (you can use AirTable if you want but this changes the integration code base)
- A Twilio account
- A Twilio phone number with WhatsApp Business Sender registered. (You can do this with SMS too!)
- Installed Twilio CLI & Twilio Serverless toolkit
- Your **Account SID** and **Auth Token**, found in yuor Twilio account dashboard

### Step 1: Create the Google Sheet
- Create a gGoogle sheet and 2 tabs: **"Word Bank"** and **"Logs"**
- For the **Word Bank** tab, create 2 columns: **"Words"** and **"Count"**
- For the **Logs** tab, create 2 columns: **"Word"** and **"TextMsg"**

### Step 2: Download this repo 
- Download this github repo into your local machine

### Step 3: Download this repo 


## Demo Script
| Demo Screen  | Talk Track |
| ------------- | ------------- |
| ![demo_screen1](https://github.com/ctleow/sentimentdetection/blob/main/img/1_demo.png) | We start off from the marketer's view whereby the marketer can use the Google Sheet to upload words that are considered to be negative sentiment. The "count" next to each word indicates the number of times such words appeared in the customer's responses. The benefit of this is that it's easy for business users to manage this without the need for IT team to support and it can also support other languages as well! |
| ![demo_screen2](https://github.com/ctleow/sentimentdetection/blob/main/img/2_demo.png) | So let see how it will look like when a customer starts messaging into Owl Taxi. Here, a message has been sent to the WhatsApp Business Account of Owl Taxi. When Twilio receives the inbound message, it will do a lookup within Google Sheet to check if there is a match. This is currently on a "First Occurence" basis. As soon as there's a match, it will add the count by 1 and reply the customer that a negative sentiment has been detected  |
| ![demo_screen3](https://github.com/ctleow/sentimentdetection/blob/main/img/3_demo.png) | In addition, Twilio will log this message down and this can be used for future analysis by Owl Taxi by feeding this to a analytics tool such as Tableau.  |
| ![demo_screen4](https://github.com/ctleow/sentimentdetection/blob/main/img/4_demo.png) | The automated 2 way conversation is facilitated by Twilio Studio, which is a low/no code builder. When an inbound messages arrives, it routes to Twilio Function (I will touch on that in a second), which will run the logic to lookup in the Google Sheet and returns the result.  |
| ![demo_screen5](https://github.com/ctleow/sentimentdetection/blob/main/img/5_demo.png) | Twilio Function is a serverless environment that allows customers to host programming logics on Twilio. In this case, I've built the logic to check for a keyword match from the Google Sheet before parsing the results back to Studio for a response  |


## Any other reference links
Google Sheets API: https://developers.google.com/sheets/api/guides/concepts#:~:text=The%20Google%20Sheets%20API%20is,Update%20spreadsheet%20formatting
Twilio CLI: https://www.twilio.com/docs/twilio-cli/quickstart
Twilio Serverless Toolkit: https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit

