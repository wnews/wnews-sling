#!/usr/bin/env bash
: ${SLING_HOST?"Need to set SLING_HOST variable"}
: ${SLING_PORT?"Need to set SLING_PORT variable"}
: ${SLING_PASSWORD?"Need to set SLING_PASSWORD variable"}
./gradlew build bundleInstall -Psling_host=$SLING_HOST -Psling_port=$SLING_PORT -Psling_password=$SLING_PASSWORD
