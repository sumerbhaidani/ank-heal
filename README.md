# Project Title

## Overview

An ankle recovery app that provides exercise to recover and strengthen ankles based on the responses a user provides to a survey of questions about ankle health.
The app is not meant to replace or be a physiotherapist or health professional, rather it is designed to provide immediate guidance of how to begin with recovery. It is always recommended to see a health professional for any injury.

### Problem Space

Ankle injuries are one of the most common injuries. In the US, there are approxiately 2 million ankle injuries every year. Ankle injuries also have a high recurrence rate with up to 40% of individuals experiencing additional sprains, injuries, and chronic pain after their first injury.

There are lots of ankle exercises, but there it is unclear which ones are best for specific injuries. This app provides instant recommendations to help users recover/strengthen their ankle.

After personally dealing with multiple ankle injuries due to sports and not having time to go for physio, I decided something needs to be done.

### User Profile

The app would be designed for regular people who enjoy sports who don't have immediate access to training staff, physiotherapists, and other health professionals.

### Features

There will be a login form that would accesss a specific user's credentials based on the data they provide.
There will be a survey form that will ask the user about their ankle's mobility and strength. Based on the results of the questionaire, the survey will give a list of 4 exercises that should help with recovery and strengthening.
There will be a section where users can access their past survey results and recent exercise lists.

## Implementation

### Tech Stack

React
Express
Supabase API (Login, store user data)
MySQL for survey and exercise data. Survey table in MySQL stores user id.

### APIs

Login will be done through Supabase API
Exercise list and survey data will be found in SQL

### Sitemap

Header - Each page will have a common header that will include the nav-bar to redirect to deifferent pages. Nav Bar will redirect to Questionnaire and Past Results Page.

Home Page - General page that shows the basic process of how the app works. Will have a button to redirect to a login form where users login to view their data.

Survey Page - This is where you can start the questionnaire about your ankle health and after submitting you would get a list of exercises to do

Past Results Page - See when you did your ankle evaluations, and your most recent exercise list

### Data

Based on your questionnaire responses, tags will be assigned to each question according to your ankle health. These tags will be matched with exercises that share the same characteristics. After completing the questionnaire, you'll receive a tailored set of exercises designed to support your recovery, with unsuitable exercises automatically filtered out.

### Endpoints

Login and sign up user.

POST Survey – Sends the user's questionnaire responses (tags) to the backend. The backend then filters the exercise list based on these tags.

GET Survey Results – Retrieves all of a user's past exercises, allowing them to review all completed workouts.

GET Exercise List – Fetches exercises tailored to the selected survey on the front end.

## Roadmap

Sprint 1 - Survey Questions and List of Exercises
Sprint 2 - Basic Design of Site & Connect Links
Sprint 3 - MySQL to set up list of exercises and their tags
Sprint 4 - Set up form, add logic and link with MySQL
Sprint 5 - Supabase API to create login and link with exercises
Sprint 6 - Website Final Styling

## Future Implementations

Incorporate Gemini AI
Add more functions to make it a hub for ankle recovery (tips, recovery resources, etc.)
Improve UI/UX

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/sumerbhaidani/ank-heal.git
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Check dependencies in the .env.sample file and create a .env file with the same content. Create a free Supabase account to get your free URL & key

4. Run the server:

   ```sh
   npm run dev
   ```
