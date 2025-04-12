# use the officially supported node image
FROM node:12

# add the app source code to the image
#  means copy the current directory (.) to /usr/src/app in the image
WORKDIR /app

# docker will cache the layers (from node, workdir) until package.json changes

#  install dependencies first to be cached
COPY package*.json ./

RUN npm install

# now that we have the dependencies, copy the rest of the app (src code)
#  note: add .dockerignore file to ignore files not needed in the image 
# (e.g. node_modules, .git, etc.) before we copy over to image
COPY . .

# can set the environment variable in the container instructions
ENV PORT 5137

# tells the container how to run the app
# by starting process to run the app (same as running npm start in terminal)
CMD ["npm", "start"]
