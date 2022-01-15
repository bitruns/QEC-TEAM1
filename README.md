# Hab!t
We built a React web app with an expressJS backend and a mongoDB database.

1. User signs up or logs in
2. User selects habits and schedules reminders
3. User information is uploaded to the database
4. Reminders are scheduled
5. User receives push notification about habit with Yes/No option. If yes, provide an encouraging comment. If no, return a suggestion from the database and provide suggestion to the user
6. Update habit score in the database based on response to notification

# Installation Requirements
```Node``` and ```npm``` must be installed for 

Run ```cd web-app && npm i && cd client && npm i```

# Running servers
Build front-end with ```cd web-app/client && npm run build```.
Run back-end with ```npm run dev```.

# Note on External Resources
## Commenting
For the web application, ```npx create-react-app``` was run to initialize it. This generated a sizable amount of code that sets up the application. As this code was not written by the team, comments explaining the code line by line are not provided. This holds true for other template code, and the link it was sourced from will be included in the file that uses it. The breakdown of library components used is not  provided for the same reason.
## The dotenv Package
This package allows all constants in the front end to be stored in one file, so that they can be easily changed. This file can be found in ```/web_app/client/.env```

# Team Members
The following should be a list by name of your team. If you think you're in the wrong team EMAIL ME ASAP.    
  Andrew Fryer  
Kyle Singer  
Jamie Won  
Tristan Lawson  
