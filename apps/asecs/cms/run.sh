#!/bin/bash -x

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

exec ls -la
exec node server.js