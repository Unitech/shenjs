#!/bin/bash

wrk -t 100 -c 100 http://localhost:8000
