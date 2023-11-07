#!/bin/bash -xe
# this command makes a log of the ec2 user data and stores it at /var/log/user-data.log for debugging
# exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1
echo "EC2 User Data Script Started"
# update packages
sudo yum update -y
# install docker
sudo yum install -y docker
# start the docker service
sudo systemctl start docker.service
# autostart the docker service on reboot
sudo systemctl enable docker
# check docker is running
# sudo systemctl status docker # how to exit from this elegantly?
# Add ec2-user to the docker group
sudo usermod -a -G docker ec2-user
# Make changes to the group take affect immediately
newgrp docker
# download docker compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
# fix permissions after download
sudo chmod +x /usr/local/bin/docker-compose
# check docker compose installed correctly
docker-compose version
# pull the images
docker pull bazmurphy/lhfb-server:latest
# get the docker-compose file from github repo
sudo wget -O /home/ec2-user/docker-compose.yml https://raw.githubusercontent.com/bazmurphy/lentegeur-hospital-facility-board/development/server/docker-compose.yml
# change directory
cd /home/ec2-user/
# make an .env file and add the variables to it
cat << EOF >.env
NODE_ENV=${NODE_ENV}
HOST=${HOST}
PORT=${PORT}
APP_KEYS=${APP_KEYS}
API_TOKEN_SALT=${API_TOKEN_SALT}
ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
JWT_SECRET=${JWT_SECRET}
DATABASE_CLIENT=${DATABASE_CLIENT}
DATABASE_HOST=${DATABASE_HOST}
DATABASE_PORT=${DATABASE_PORT}
DATABASE_NAME=${DATABASE_NAME}
DATABASE_USERNAME=${DATABASE_USERNAME}
DATABASE_PASSWORD=${DATABASE_PASSWORD}
DATABASE_SSL=${DATABASE_SSL}
CLOUDINARY_NAME=${CLOUDINARY_NAME}
CLOUDINARY_KEY=${CLOUDINARY_KEY}
CLOUDINARY_SECRET=${CLOUDINARY_SECRET}
EOF
# run docker compose
docker-compose up -d
echo "EC2 User Data Script Finished"