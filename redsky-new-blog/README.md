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
* 또한 현재 프로젝트 실행 폴더가 vscode의 workspace의 루트인지 여부에 따라 vscode자체에서 editor 해당 라인에 빨간줄을 표시할때가 있다. 실행에는 문제가 없으나 거슬리면 루트를 다시 확인해보는게 좋음.
  - `@/components/...` 이런 부분의 빨간줄도 같은 현상임.
* vscode상에 워크밴치 루트가 현재 프로젝트 폴더 이어야 한다. (모든 다른 프로젝트를 워크밴치에서 삭제하고 사용하는 프로젝트만 워크밴치에 포함하여 진행하니 해결되었다.)

## vetur에러가 vscode우측 하단에 alert으로 뜰때
* vscode의 File>Preferences>Settings의 Vetur.ignoreProjectWarning: true 로 셋팅하면 alert창이 뜨지 않는다.
## eslint + prettier 의 [eslint] Delete 'cr' [prettier/prettier] 에러 대처
* ..