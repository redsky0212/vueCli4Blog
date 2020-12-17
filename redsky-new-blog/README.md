# vue2, vue-cli4, TypeScript, eslint+prettier
* `블로그 작업중 겪었던 내용 정리`

## npm run build 시 static file (image, js, css)등의 경로 맞추기
* 빌드 후 서버에 올릴때 서브 디렉토리로 인하여 사이트의 루트가 달라질 경우 맞추기 위한 작업 필요.
* vue.config.js파일에 publicPath에 루트경로를 지정해 준다.
```
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/redsky/cli4/' : '/',
}
```

## Cannot find name 'process' 에러
* js에서 process를 사용할때 "cannot find name process" 에러가 나면서 @types/node를 설치하라고 하면 설치해준다.
```
npm i -D @types/node
```
