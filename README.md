# vue 2, cli 4, nuxt X, 
* vue.js 끝장내기 실무 강좌 이 후 블로그 작성 예정 
## vue cli 4를 사용한 환경설정.
* vue cli가 설치되어있지 않다면 설치한다.
```
// cli가 설치되어있지 않다면 설치한다.
npm i @vue/cli -g
```
* vue프로잭트를 생성한다.
```
// vue 프로젝트 생성
vue create 생성프로젝트 폴더명
// vue 2, vue 3 선택 여부에 따라 코딩 방식과 지원되는 vue api가 다르기 때문에 상황에 맞게 메뉴얼로 선택하여 설치한다.
```
  - 여기서는 vue2, typescript, class방식코딩, eslint+prettier선택.
  - 프로잭트를 vue3으로 생성하면 새로운 api와 코딩방식이 좀 달라지므로 유의한다.
* typescript, class방식으로 진행할것이므로 아래 라이브러리를 추가 설치한다.
```
npm i vue-class-component vue-property-decorator
```
