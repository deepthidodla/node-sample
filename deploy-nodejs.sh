
# deploy goal is copy build to remote server and replace and restart
su - ec2-user
cd /home/ec2-user
ssh -i mykey ec2-user@52.55.213.77 <<EOF        
 cd /home/ec2-user/tempfiles 
 git pull       
 npm install --production       
 pm2 restart all
 exit       
EOF

