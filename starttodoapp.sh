#!/bin/bash

#set -e

#Run the Backend
cd todo_backend/
npm install
npm run create
npm run migrate
npm run add-seed
npm start &
BACKEND_PID=$!

#Run the Frontend
cd ..
cd todo_frontend/
npm install
npm run serve &
FRONTEND_PID=$!
google-chrome http://localhost:8080

# Kill running processes
kill -9 $BACKEND_PID
kill -9 $FRONTEND_PID