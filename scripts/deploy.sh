#!/usr/bin/env sh

set -o errexit

script_path=$(cd $(dirname $0); pwd)

pushd "${script_path}/../"

# build
yarn build

# navigate into the build output directory
pushd "dist"

echo 'beta.astrograph.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:astroband/astrograph.git master:gh-pages

popd
popd
