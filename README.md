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
![This is an image](https://github.com/ctleow/sentimentdetection/blob/main/SolutionJourney.jpg)

## Business Value
- _Improves customers engagement_ - as Brands now understand customer sentiment better
- _Centralised Reporting_ - In countries where brands are highly regulated to provide monthly sentiment report, this will be useful
- _Ease of Use_ - Low maintainence, easy to manage and able to adjust to evolving business needs

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

## Demo Script

## Any other reference links
Google Sheets API: https://developers.google.com/sheets/api/guides/concepts#:~:text=The%20Google%20Sheets%20API%20is,Update%20spreadsheet%20formatting


