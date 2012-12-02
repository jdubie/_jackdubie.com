#!/bin/sh
cd /home/jdubie/www/jackdubie.com
git pull git@github.com:jdubie/jackdubie.com master
git push git@github.com:jdubie/jackdubie.com master
git push ../jackdubie.git
