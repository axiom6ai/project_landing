git clone https://github.com/axiom6ai/project_landing.git
cd project_landing
git checkout front_proto
cd frontend/
sudo npm install
npm run build
sudo mv build/ /var/www/
cd /var/www/
sudo rm -rf html/
sudo mv build/ html/
rm -rf /home/ubuntu/project/project_landing/
