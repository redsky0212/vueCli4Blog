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
* publicPath가 설정되면 화면에서 경로 설정시 아래와 같이 publicPath를 사용하여 작업해줄 수 있다.
```javascript
export default class App extends Vue {
  private publicPath = process.env.BASE_URL;
  private mounted() {
    const themeInitJs1 = document.createElement('script');
    themeInitJs1.setAttribute('src', `${this.publicPath}assets/javascripts/theme.js`);
    document.body.appendChild(themeInitJs1);
  }
}
```
* 또한 vue페이지에서 process를 사용할때 빨간줄이 뜰때가 있다. 이럴때는 ...... (추가설명 작성중...)

## Cannot find name 'process' 에러
* js에서 process를 사용할때 "cannot find name process" 에러가 나면서 @types/node를 설치하라고 하면 설치해준다.
* 가끔 vscode를 재시작 해야할때도 있다.
```
npm i -D @types/node
```

## eslint + prettier 의 [eslint] Delete 'cr' [prettier/prettier] 에러 대처
* ..