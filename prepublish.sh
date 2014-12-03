#!/bin/sh
# {{Name}} / prepublish.sh
# prepublish script for {{Name}}
# (c) 2014 David (daXXog) Volm ><> + + + <><
# Released under Apache License, Version 2.0:
# http://www.apache.org/licenses/LICENSE-2.0.html  
#################################################

if [ ! -f com-npm-install ]; then
	node make
	rm npm-debug.log >> /dev/null
	mv {{name}}.js ../.tmp.js
	mv {{name}}.h ../.tmp.h
else
	rm com-npm-install
fi