# Instructions on how to run the app in your computer

You can run this project on your computer by cloning the project to your local machine from github or by using docker if you have docker installed in your computer. below are the instructions for both

# Github
- Open your IDE and create a new folder for the project then clone the repository from - git@github.com/StormTrooper-007/coding-challenge.git into the folder

- cd into the cloned folder in your terminal and run => `npm install` 

- run the command => `npm run dev`

- run `http://localhost:5173` in your browser

# Note: make sure you have node and npm installed in your computer

 
# Docker 
This project was also deployed to docker-hub and the repository is public which means you can pull the image and run it in you computer if you have docker installed

- in your terminal run => `docker pull chadwick007/coding-challenge:v3`

- after pulling the image in your terminal run => `docker run -p 5173:5173 chadwick007/coding-challenge:v3`

- run `http://localhost:5173` in your browser

# Note: make sure you have docker installed in your computer

