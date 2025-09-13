#!/bin/bash
cd ./server || exit 1
screen -dmS mc bash ./run.sh nogui
screen -r mc
