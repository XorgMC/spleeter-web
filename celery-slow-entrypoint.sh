#!/bin/bash

CELERY_SLOW_QUEUE_CONCURRENCY="${CELERY_SLOW_QUEUE_CONCURRENCY:-1}"

echo "Running ldconfig..."
ldconfig

echo "Starting Celery (slow)"

mkdir -p celery

celery -A api worker -l INFO -Q slow_queue \
    --concurrency $CELERY_SLOW_QUEUE_CONCURRENCY \
    --statedb=./celery/celery-slow.state 
