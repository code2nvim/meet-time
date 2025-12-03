#!/bin/sh

if ! [ -e 'pom.xml' ]; then
    echo 'Wrong path!'
    exit 1
fi

if [ "$1" = 'dev' ]; then
    rm -rf src/main/resources/static/*
    rm -rf src/main/resources/templates/*
    cp src/main/front/index.html src/main/resources/templates/app.html
    echo 'Done!'
    exit 0
fi

if [ "$1" = 'build' ]; then
    (cd src/main/front && deno run build)
    rm -rf src/main/resources/static/*
    cp -r src/main/front/dist/* src/main/resources/static
    rm -rf src/main/resources/templates/*
    cp src/main/resources/static/index.html src/main/resources/templates/app.html
    echo 'Done!'
    exit 0
fi

echo '???'
exit 1
