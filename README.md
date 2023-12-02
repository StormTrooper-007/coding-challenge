#Instructions on how to run the app in your computer

You can run this project on your computer by cloning the project to your local machine from github or by using docker if you have docker installed in your computer. below are the instructions for both -

#Github
- create a new folder in your computer clone the repository from - git@github.com:StormTrooper-007/coding-challenge.git

- cd to the cloned folder and run `=> npm install`

- run the command `=> npm run dev`

#Note: make sure you have node and npm installed in your computer


#Docker 
This project was also deployed to docker-hub and the repository is public which means you can pull the image and run it in you computer if you have docker installed

- run `=> docker pull chadwick007/coding-challenge:v3`

- after pulling the image run `=> docker run -p 5173:5173 chadwick007/coding-challenge:v3`

