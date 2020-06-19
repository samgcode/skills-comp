#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# https://samgcode.github.io/skills-comp

git push -f git@github.com:samgcode/skills-comp.git master:gh-pages

cd -