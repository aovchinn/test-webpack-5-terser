# test-webpack-5-terser

* npm i
* npm run build
* -> error 

```
> webpack --config webpack.config.js

assets by status 78 bytes [cached] 1 asset
./index.js 26 bytes [built] [code generated]

ERROR in sourceMaps/index-entry.map.js
sourceMaps/index-entry.map.js from Terser plugin
Unexpected token: punc (:) [sourceMaps/index-entry.map.js:1,10]
    at js_error (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:550:11)
    at croak (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1274:9)
    at token_error (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1282:9)
    at unexpected (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1288:9)
    at semicolon (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1326:56)
    at simple_statement (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1583:73)
    at statement (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1369:47)
    at _embed_tokens_wrapper (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1339:26)
    at block_ (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:2172:20)
    at statement (C:\Users\petovchial\Desktop\test-webpack-5-terser\node_modules\terser\dist\bundle.min.js:1403:29)

webpack 5.66.0 compiled with 1 error in 268 ms
```

### issue: https://github.com/webpack-contrib/terser-webpack-plugin/issues/467
