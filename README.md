# wasm-clang-fmt-demo

1. get dependencies
```
pnpm i
```
(you can also use npm, `npm install`)

1. create the bundle
```
webpack build --mode production
```

1. run any basic webserver:
```
python -m http.server 8000
```
(if you're using the command above make sure you're in the root of this project)
then visit http://127.0.0.1:8000/demo.html


alternatively, demo2.html contains the use of wasm-fmt/clang-format without the webpack build step (because it doesnt `require()` any node stuff)


<sub><sub><sub>I LOVE THE WEB I LOVE WEBPACK I LOVE THE WEB I LOVE WEBPACK I LOVE THE WEB I LOVE WEBPACK I LOVE THE WEB I LOVE WEBPACK </sub></sub></sub>
