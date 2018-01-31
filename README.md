# Project Overview

#Puppy Finder App
A CRUD App, using React and utilizing the Pet Finder API. A user can search for dogs to adopt by breed and zipcode. When the user finds a dog they may like, they can save it to a favorites list and edit their interest in the dog, add notes and/or remove from the puppy from the favorites list.

## Project Schedule

This schedule will be used to keep track of our progress throughout the week and align with our expectations.  

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Tue| Project Idea, Wireframes, Project Setup, Webpack|
|Day 2: Wed| Set up Database, Routes and 3rd Party API|
|Day 3: Thurs| Basic Clickable Model |
|Day 4: Fri| Working Prototype and Styling|
|Day 5: Sat| Additional Styling and Deploy |
|Day 6: Sun| App Completed/Slides |
|Day 7: Mon| Project Presentations |

# Trello Board

image placeholder
https://trello.com/b/dYEDr2VX

## Priority Matrix

![Time Priority Matrix](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70d14fc8231d31403396e0/cefbb478b8ad7ee1375cd7ff427a02f9/Image_uploaded_from_iOS_(9).jpg) 

## MVP 

1. Functional Components (Header, Footer, About) 
2. API 3rd Party (puppy API) and Components to render
3. API (local database) and Components to render
4. CRUD functionality
5. Mobile and Desktop responsive; styling like wireframes
6. Deploy on Heroku

## POST MVP

1. Show location of shelters on a map
2. Add in registration (auth) for multiple users
3. Fun styling with loading placeholders

## Wireframes

image placeholder

## Table Structures
    
1. Puppies    
    CREATE TABLE puppies(
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255),
      photourl VARCHAR(255),
      sex VARCHAR(255),
      description VARCHAR(255),
      altered VARCHAR(255),
      housetrained VARCHAR(255),
      shelternumber VARCHAR(255),
      op_ID INTEGER,
      notes VARCHAR(255)
    );

2. Opinions
    CREATE TABLE IF NOT EXISTS opinons (
        id SERIAL PRIMARY KEY,
        opinion VARCHAR
    );


## Functional Components

1. Header
2. Footer
3. SearchForm
4. Search Results
5. Single Result
6. Favorites
7. Single Favorites
8. About

## React Routes

image placeholder

## Architecture Diagram

image placeholder

## Additional Libraries
Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
