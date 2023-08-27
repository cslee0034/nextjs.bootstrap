#!/bin/bash

# tag = 0.0.1
docker build -t 0.0.1 .

# name = aid.center.page
docker run -d -p 8000:8000 --name=aid.center.page 0.0.1

