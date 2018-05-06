#!/bin/sh
ssh ec2-user@54.172.130.156 <<EOF
ssh ec2-user@34.229.18.122 <<EOF
cd /home/ec2-user/tempfiles
git pull
npm install --production server
pm2 restart all
exit
EOF
