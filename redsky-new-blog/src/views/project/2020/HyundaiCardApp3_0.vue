<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대카드 앱 3.0 (2019.01.02 ~ 2020.08.31) 8개월</strong></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue-CLI, VueJs 2, TypeScript, vue-property-decorator, tslint vuex, vuex-class, vue-router, axios</strong>
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              프로젝트 느낌, 경험 메모
            </h2>
            <p class="panel-subtitle">프로젝트 기간동안 느꼈던 생각들 단순 나열.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li><strong>VueJs 첫 프로젝트</strong></li>
              <li><strong>코로나 시작</strong></li>
              <li>
                <strong>VDI업무pc, MAC장비</strong><br />
                vid업무pc는 그나마 빨리 지급이 되지만 mac은 2주걸림.
              </li>
              <li>
                <strong>모바일 메모리 이슈</strong><br />
                하이브리드 앱 개발 시 ios웹뷰에서 메모리가 1기가 넘어가면서 웹뷰가 초기화 되버리는 현상이 있었음.
              </li>
              <li>
                <strong>웹 접근성</strong><br />
                웹 접근성을 고려한 컴포넌트 코딩필요, 프로젝트 개발 시작전에 미리 인지하고 있어야 하며 필수사항임.
              </li>
              <li>
                <strong>TypeScript적용</strong><br />
                TypeScript코딩 시 js 함수형 코딩과 차이점, 장단점?<br />
                vue-property-decorator, class방식 코딩.<br />
                <strong>TypeScript를 사용했을때 장점</strong><br />
                <ul>
                  <li>안정성 : 런타임 에러 감소, 코드 어시스트가 잘됨.</li>
                </ul>
              </li>
              <li>
                <strong>ssr은 고려되지 않음.</strong><br />
                ssr, csr에 따른 seo(search engine optimization)를 생각해볼 필요가 있음.<br />
                <strong>SPA장단점</strong>
                <ul>
                  <li>자연스러운 사용자경험(UX)</li>
                  <li>async API를통한 필요한 리소스만 부분적으로 로딩(성능)</li>
                  <li>서버에서의 템플릿연산을 클라이언트로 분산(성능)</li>
                  <li>컴포넌트형태 개발 용이(생산성)</li>
                  <li>mobile app 개발 시 API로 공통화 설계 가능</li>
                  <li>JS파일의 번들링으로 인해 사이즈가 커져서 초기 로딩 구동 속도가 느림(webpack code splitting으로 개선가능)</li>
                  <li>검색엔진최적화(SEO)가 어려움(SSR, nuxt등으로 해결가능)</li>
                  <li>nuxt사용 시 nodejs필요</li>
                  <li>보안이슈 (비즈니스 로직이 프론트에 있을때) (프론트 비즈니스 로직의 최소화)</li>
                </ul>
                <strong>MPA (ssr) 장단점</strong>
                <ul>
                  <li>검색엔진최적화 (SEO)</li>
                  <li>페이지 이동시 깜빡임 (UX)</li>
                  <li>페이지 이동시 불필요한 탬플릿도 중복해서 로딩 (성능)</li>
                  <li>서버 렌더링에 따른 부하(성능)</li>
                  <li>모바일 앱 개발 시 추가적인 백엔드 작업 필요(생산성)</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              현대카드의 API 사용 구조
            </h2>
            <p class="panel-subtitle">api사용부분 대략 정리</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <b>화면부분</b>
                <pre class="prettyprint linenums">
&lt;template&gt;
 &lt;div&gt;API 사용 구조 정리&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Vue, Component, Mixins, Watch, Ref} from 'vue-property-decorator';
// api
import {Action, State, namespace} from 'vuex-class';
const Customer = namespace('common/customer');
import {IResponseError} from '@/API/commonInterface';
import {CustomerActions} from '@/store/Common/customer/actionConstructor';
import {SCTAI000} from '@/API/Common/interface/customer';

@Component({
  name: '파일명',
  components: {
    컴포넌트1,
  }
})
export default class 클래스명 extends Mixins(BaseviewMixin) {
  @Ref('term-full-popup') private readonly termFullPopup!: ITermFullPopup;
  @Customer.State('iqryTpList') private iqryTpList!: [];
  @Customer.Action(CustomerActions.SCT000)
  private regActionAPI!: (data: SCT000.Request) => Promise&lt;SCT000.Response&gt;;

  private onClick() {
    const form: SCT000.Request = {
      a: '',
      b: '',
    };
    this.regActionAPI(form)
    .then((res) => {
      // 성공
    })
    .catch((err: IResponseError) => {
      // 실패
    });
  }
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                <b>Action file</b>
                <pre class="prettyprint linenums">
import URL from '@/API/Common/url';
import {IRequest, IResponse, IResponseError} from '@/API/commonInterface';
import makeRequestConfig, { RequestMethod } from '@/store/request';
import { ActionConstructor } from '@/store/actionConstructor';
import setServerTime from '@/store/response';
import commit from '@/store/commit';
import Moment from 'moment';

import {
  SCT000,
} from '@/API/Common/interface/customer';

export const enum CustomerActions {
  SCT000 = 'SCT000',
}

const actionConstructor: ActionConstructor&lt;CustomerState, CustomerActions&gt; = (api) => {
  return {
    [CustomerActions.SCT000](store, data: SCT000.Request) {
      return new Promise((resolve, reject) => {
        const reqConfig = makeRequestConfig&lt;SCT000.Request&lt;true&gt;&gt;(
          URL.SCT000,
          data,
        );
        api.instance.request&lt;IResponse&lt;SCT000.Response&lt;true&gt;&gt;&gt;(reqConfig)
        .then((res) => {
          // 관련소스추가
          const {bdy} = res.data;
          commit(store, CustomerMutations.set어쩌고, bdy);
          resolve(res.data);
        })
        .catch((error: IResponseError) => {
          // 에러추가
          reject(error);
        });
      })
    }
  };
};

export default actionConstructor;</pre
                >
              </li>
              <li>
                <b>API/url.ts</b>
                <pre class="prettyprint linenums">
const CUSTOMER_PREFIX = '/web/sct';

export default {
  SCT000: `${CUSTOMER_PREFIX}/aa/SCT000.do`,
}</pre
                >
              </li>
              <li>
                <b>API/commonInterface.ts</b>
                <pre class="prettyprint linenums">
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Indexable } from '@/types';

export type IRequest&lt;DataType extends Indexable|void = Indexable&gt; = DataType;

export interface IResponseHeader {
  rsltCd: string;
  rsltMsg: string;
}

export interface IResponse&lt;DataType extends Indexable|void = Indexable&gt; {
  hdr: IResponseHeader;
  bdy: DataType;
}

export interface IResponseError extends AxiosError {
  hdr?: IResponseHeader;
}
export class ResponseError implements IResponseError {
  public name: string = 'Error';
  public message: string = 'Error';
  public config: AxiosRequestConfig;
  public hdr?: IResponseHeader;

  constructor(config: AxiosRequestConfig, request?: AxiosResponse, hdr?: IResponseHeader) {
    this.config = config;
    this.request: request;
    this.hdr = hdr;
  }

  public toJSON(): object {
    return {
      message: this.message,
      name: this.name,
      config: this.config,
      code: this.code,
      hdr: this.hdr,
    };
  }
}
                </pre>
              </li>
              <li>
                <b>store/actionConstructor.ts</b>
                <pre class="prettyprint linenums">
import { AxiosResponse } from 'axios';
import { IRequest, IResponse, IResponseError } from '@/API/commonInterface';

export type ApiResult&lt;T&gt; = Promise&lt;AxiosResponse&lt;IResponse&lt;T&gt;&gt;&gt;;
// Actions 제네릭에 들어있는 키값이 ActionConstructor 내부에서 method로 반드시 구현되어야 함
export type ActionTree&lt;State, Actions extends Key&gt; = {
  [K in Actions] : Action&lt;State, RootState&gt;
};
// State 모듈화 가능성이 있으므로 state도 제너릭으로 받을 수 있도록
export type ActionConstructor&lt;State, Actions extends Key&gt; = (api: AxiosApi) => ActionTree&lt;State, Actions&gt;;
                </pre>
              </li>
              <li>
                <b>store/request.ts</b>
                <pre class="prettyprint linenums">
import { AxiosRequestConfig } from 'axios';
import { CommonRequestHeader, CommonRequestConfig } from '@/API';

export type RequestMethod = 'post' | 'get';
type ExclusiveProperties = Omit&lt;CommonRequestConfig, keyof AxiosRequestConfig&gt;;
export interface RequestConfigOptions extends ExclusiveProperties {
  headers?: CommonRequestHeader;
  method?: RequestMethod;
}

function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
): CommonRequestConfig;
function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
  timeout: number,
): CommonRequestConfig;
function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
  method: RequestMethod,
): CommonRequestConfig;
function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
  isStatic: boolean,
): CommonRequestConfig;
function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
  options: RequestConfigOptions,
): CommonRequestConfig;
function makeRequestConfig&lt;RequestData&gt;(
  url: string,
  data: RequestData,
  options?: any,
): CommonRequestConfig {
  const reqConfig: CommonRequestConfig = {
    url,
    data: {
      ...data,
    },
  };

  let pMethod: RequestMethod = 'post';
  let pTimeout: number = 0;
  let pIsStatic: boolean = false;
  let pAllowDuplicate: boolean = false;
  let pSkipCommonPopup: boolean = false;
  let pDisableLoadingSpinner: boolean = false;

  if (options === 'post' || options === 'get') {
    pMethod = options;
  } else if (typeof options === 'number' && options > 0) {
    pTimeout = options;
  } else if (typeof options === 'boolean') {
    pIsStatic = options;
  } else if (typeof options === 'object') {
    const {
      method,
      timeout,
      isStatic,
      headers,
      allowDuplicate,
      skipCommonPopup,
      disableLoadingSpinner,
    } = options;
    if (method === 'post' || method === 'get') {
      pMethod = method;
    }
    if (typeof timeout === 'number' && timeout > 0) {
      pTimeout = timeout;
    }
    if (typeof isStatic === 'boolean') {
      pIsStatic = isStatic;
    }
    if (typeof headers === 'object') {
      reqConfig.headers = headers;
    }
    if (typeof allowDuplicate === 'boolean') {
      pAllowDuplicate = allowDuplicate;
    }
    if (typeof skipCommonPopup === 'boolean') {
      pSkipCommonPopup = skipCommonPopup;
    }
    if (typeof disableLoadingSpinner === 'boolean') {
      pDisableLoadingSpinner = disableLoadingSpinner;
    }
  }

  reqConfig.method = pMethod;
  reqConfig.isStatic = pIsStatic;
  reqConfig.allowDuplicate = pAllowDuplicate;
  reqConfig.skipCommonPopup = pSkipCommonPopup;
  reqConfig.disableLoadingSpinner = pDisableLoadingSpinner;
  if (pTimeout > 0) {
    reqConfig.timeout = pTimeout;
  }

  return reqConfig;
}

export default makeRequestConfig;
                </pre>
              </li>
              <li>
                <b>store/commit.ts</b>
                <pre class="prettyprint linenums">
import { ActionContext } from 'vuex';
import { RootState } from '@/store/types';

function commit(
  store: ActionContext&lt;any, RootState&gt;,
  key: string,
  data?: any,
): void;
function commit(
  store: ActionContext&lt;any, RootState&gt;,
  path: string,
  key: string,
  data?: any,
): void;
function commit(
  store: ActionContext&lt;any, RootState&gt;,
  param1: string,
  param2?: any,
  param3?: any,
): void {
  if (typeof param2 === 'string' && param3 !== undefined) {
    let path = param1;
    const key = param2;
    const data = param3;

    if (path.toLowerCase() === 'root' || path === '/') {
      store.commit(key, data, { root: true });
    } else {
      if (path.charAt(path.length - 1) !== '/') {
        path += '/';
      }
      if (data === 'EMPTY_DATA') {
        store.commit(`${path}${key}`, undefined, { root: true });
      } else {
        store.commit(`${path}${key}`, data, { root: true });
      }
    }
  } else {
    const key = param1;
    const data = param2;

    if (data === 'EMPTY_DATA') {
      store.commit(key, undefined);
    } else {
      store.commit(key, data);
    }
  }
}
export default commit;
                </pre>
              </li>
              <li>
                <b>API/Common/interface/customer/SCT000.ts</b>
                <pre class="prettyprint linenums">
import { RP, Iaatype } from '@/types/Common/customer';

export interface Request&lt;IS_API extends boolean = false&gt; {
  ctgrCd: string;
  iqryCn: string;
  pushDlvYn: 'Y'|'N';
}
export type Response&lt;IS_API extends boolean = false&gt; = void;
// export interface Response&lt;IS_API extends boolean = false&gt; {
//  aaabbb: RP&lt;IS_API, boolean&gt;
//  ccaa: Array&lt;Iaatype&gt;
// }
                </pre>
              </li>
              <li>
                <b>types/Common/customer/index.ts</b>
                <pre class="prettyprint linenums">
export type RP&lt;IS_API extends boolean, R&gt; = IS_API extends true ? string : R;

export interface Iaatype {
  aa: string;
  bb: string;
}
                </pre>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HyundaiCardApp3 extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
