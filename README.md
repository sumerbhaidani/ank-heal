# Project Title

## Overview

An ankle recovery app that provides exercise to recover and strengthen ankles based on the responses a user provides to a survey of questions about ankle health.
The app is not meant to replace or be a physiotherapist or health professional, rather it is designed to provide immediate guidance of how to begin with recovery. It is always recommended to see a health professional for any injury.

### Problem Space

Ankle injuries are one of the most common injuries. In the US, there are approxiately 2 million ankle injuries every year. Ankle injuries also have a high recurrence rate with up to 40% of individuals experiencing additional sprains, injuries, and chronic pain after their first injury.

There are lots of ankle exercises, but there is no clarity about what to use when your ankle is hurting in certain places. This app is designed to give people an immediate suggestion about exercises they can do to recover/strengthen their ankle

After personally dealing with multiple ankle injuries due to sports and not having time to go for physio, I decided something needs to be done

### User Profile

The app would be designed for regular people who enjoy sports who don't have immediate access to training staff, physiotherapists, and other health professionals.

### Features

There will be a login form that would accesss a specific user's credentials based on the data they provide.
There will be a survey form that will ask the user about their ankle's mobility and strength. Based on the results of the questionaire, the survey will give a list of 3-5 exercises that should help with recovery
There will be a section where users can access their past survey results and most recent exercise list

## Implementation

### Tech Stack

React
Express
Firebase API (Login, store user data)
MySQL for API data

### APIs

Login will be done through Firebase API
Exercise list will be on SQL

### Sitemap

Header - Each page will have a common header that will include the nav-bar to redirect to deifferent pages. Nav Bar will redirect to General Tips, Survey for Exrecises, and Past Results Page.

Home Page - General page that shows the basic process of how the app works. Will have a login form where users login to view their data.

Survey Page - This is where you can start the questionnaire about your ankle health and after submitting you would get a list of exercises to do

Past Results Page - See when you did your ankle evaluations, how you responded to each, and your most recent exercise list

### Data

Based on it will eliminate certain exercises and only provide the exercises that would help them in their recovery. Will assign tags to certain exercises and eliminate exercises based on exercises. Questions will be true/false and require ratings on a scale of 1-10.

### Endpoints

Login user

POST Survey - sends results of questionaire filled out by user to back end

GET Survey Results - User would be able to see results of all the past exercises they have done

GET List of Exercises - Get the most recent list of exercises

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.
Sprint 1 - Survey Questions and List of Exercises
Sprint 2 - Basic Design of Site & Connect Links
Sprint 3 - MySQL to set up list of exercises and their tags
Sprint 4 - Set up form, add logic and link with MySQL
Sprint 5 - Firebase API to create login and link with exercises
Sprint 6 - Website Final Styling

---

## Future Implementations

If scaling switch to Supabase (free version of Firebase has good features)
Incorporate Gemini
GET Past Results list and most recent exercise
Improve UI/UX

General Tips - Page that includes general tips to avoid ankle injuries and provides(maybe have a CTA at end of page for survey).
