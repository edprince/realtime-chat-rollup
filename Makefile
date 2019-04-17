npm = ./node_modules/.bin/

clean:
	rm -rf build/js build/css

rollup: clean
	$(npm)/rollup --config rollup.production.js

webpack: clean
	$(npm)/webpack --config webpack.config.js

start:
	$(npm)/rollup --watch --config rollup.development.js

serve:
	cd build && python -m SimpleHTTPServer 8081

