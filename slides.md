---
theme: geist
layout: center
class: 'text-center'
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
aspectRatio: 4/3
download: true
fonts:
  sans: 'Pretendard'
  mono: 'Hack'
---

# 엣지 컴퓨팅

웹 개발의 미래를 가르키는 새로운 키워드

<!--

안녕하세요. 김혜성 이라고 합니다. 반갑습니다.

2년 전 연사로 참가했을 땐 발표를 녹화 했었는데, 이 번엔 이렇게 오랜만에 오프라인으로 청중들 앞에서서 발표를 하게 되서 두근거리고 떨립니다.
조금 긴장하는 모습 보이더라도 양해 부탁드리겠습니다.

매년 해마다 있는 FEConf 에선 정말 다양한 주제가 등장했습니다. (앞선 발표들도 그렇고요)
어떤 프레임워크, 프로그래밍 언어, TDD나 DDD 같은 개발방법론 얘기까지 정말 다양합니다.

저도 이 주제의 다양함에 기여하는 차원에서, 이번에는 여러분들께 한 가지 주목할만한 기술 트렌드를 소개하러 왔습니다.

이전 발표에서 제가 소개드렸던 상태차트가 다소 진부하고 오래된 방법론의 재발견이였다면,
이번에 소개할 엣지 컴퓨팅은 앞으로 우리들의 미래를 함께할 새로운 패러다임이라고 볼 수 있습니다.

-->

---
layout: center
class: 'text-center'
---

## 시작하기 전에,<br/> <strong>Front-end</strong>가 정확히 뭐죠 ?

<figure>

  ![](/images/jazz.png)

  <figcaption>
    <small>(출처: 침착맨 유튜브)</small>
  </figcaption>
</figure>

<style>
  h2 strong {
    font-size: 1.5em;
  }

  p {
    @apply text-center;
  }

  img {
    @apply m-auto mt-8;
    height: 400px;
  }
</style>

<!--

그 전에 앞서서, "프론트엔드" 라는 단어를 먼저 짚어보고 싶네요.

프론트엔드가 정확히 어떤 의미인지 생각해본 적 있으신가요? 프론트엔드가 뭐죠 클라이언트?

-->

---
layout: center
class: 'text-center'
---

## 반댓말은? <strong>Back-end</strong> ?

<style>
  h2 strong {
    font-size: 1.5em;
  }
</style>

<!--

질문을 바꿔보죠, 프론트엔드의 반댓말은 무엇이죠? 백엔드?

그럼 벡엔드는 어떤 의미인가요? 서버?

-->

---
layout: center
---

# Client & Server ?

<!--

그럼 저희가 얘기하는 프론트엔드=클라이언트, 백엔드=서버 겠군요.

사실, 최근 채용시장에선 일반적으로 "프론트엔드 엔지니어" 라고 하면 "웹 클라이언트 개발자" 를 지칭합니다.
이렇게 이미 용어가 한 가지 의미로 정착한 상태에서 단어 하나하나 엄밀하게 따지면 피곤하다고 느끼실 수도 있겠습니다.

그럼에도 불구하고 한 번만 돌아봅시다.

-->

---
layout: center
class: 'text-center'
---

![Client & Server Model Visualized](/images/server-client-architecture.webp)

<!--

서버-클라이언트 모델은 일종의 시스템 아키텍처입니다. 중앙화된 서버와, 분산화된 클라이언트들로 시스템이 구성되어있죠.
그리고 아키텍처라는건 이런 잘 정의된 제약사항들의 집합입니다.

이 아키텍처 안에서, 우리는 클라이언트 개발자 또는 서버 개발자일 수 있습니다.

프론트엔드와 백엔드, 각각 앞단과 뒷단으로 직역할 수 있습니다.
보통은 이 사이에 인터넷 네트워크를 두고, 앞단은 접속하는 클라이언트, 뒷단은 애플리케이션 서버가 있다고 말해요.
그래서 보통은 프론트엔드 엔지니어링은 클라이언트 개발이다 라고 얘기해도 틀리지 않습니다.

근데 이 자리는 엄밀하게 말하자면 클라이언트 컨퍼런스는 아니잖아요? 프론트엔드 컨퍼런스죠.
그래서 저는 이 엣지 컴퓨팅이라는 주제가, 프론트엔드 개발자 여러분들께 서버-클라이언트라는 제약사항을 넘어서서 생각해보는 계기가 되면 합니다.

-->

---
layout: center
class: 'text-center'
---

# Edge Computing ?

<!--

엣지 컴퓨팅이라는 단어도 살펴보죠.

여기서 주의하셔야 할 게, 엣지 컴퓨팅은 특정 플랫폼이나 기능을 지칭하는 말은 아닙니다.

-->

---
layout: center
class: 'text-center'
---

# ⚠ Buzz Word Alert ⚠️

<style>
  p {
    font-size: 1.5em;
  }
</style>

<!--

엣지 컴퓨팅은 꽤 오랫동안 인터넷의 미래다, 클라우드 컴퓨팅의 미래다 하며 언급되어 온 광범위한 개념입니다.
그러다보니 뭐 클라우드, IoT, AI, 블록체인, 자율주행 자동차 등 혁신적인 기술 주제가 언급될 때마다 항상 따라다닙니다.
우리나라 식으로 표현하자면 약간 "4차 산업혁명" 같은 단어라고 할 수 있겠네요.

그래서 기술 영업, 컨설팅, 마케팅 측면에서 언급이 정말 끊이질 않습니다.
하지만 이걸 일일히 다 짚고 있으면 재미도 없고 FEConf 의 주제를 멀리 벗어난 얘기가 될 겁니다.

그래서 이 Edge Computing 이라는 주제를 "프론트엔드 개발자 관점"으로 많이 좁혀서 소개해보고자 합니다.

-->

---
layout: center
class: 'text-center'
---

## 🌩️ Edge Computing

from a front-end dev perspective

<style>
  p {
    font-size: 1.5em;
  }
</style>

<!--

발표의 부제목은 "프론트엔드 개발자 관점에서 본 엣지 컴퓨팅" 입니다.

-->

---
layout: center
class: 'text-center'
---

## 전체 맥락이 궁금하신 분들은...

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Hhobq4fs87w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <figcaption>
    <small>Stanford Seminar - The Future of Edge Computing from an International Perspective</small>
  </figcaption>
</figure>

<!--

좀 더 거시적인 관점에서 기술 트렌드에 관심있으신 분들은, 이후 제가 뒷쪽에 첨부해둔 참고자료들을 추가로 살펴보시면 좋을 것 같습니다.
[Stanford Seminar - The Future of Edge Computing from an International Perspective](https://youtu.be/Hhobq4fs87w)

-->

---

## 발표자 소개

<div class="flex">
  <div>
    <h3>김혜성 <small>(Hyeseong Kim)</small></h3>
    <img src="/images/speaker.jpg" width="200" />
  </div>

  - 당근마켓 미니앱 팀에서 **웹 프론트엔드 개발자**로 일하고 있습니다.
  - **클라이언트 개발**도 하고요.
  - 미니앱에 필요한 **시스템 컴포넌트를 설계**합니다.
  - 종종 **서버 코드**를 짭니다.
</div>

<style>
  ul {
    @apply flex flex-col justify-center p-10 ml-8 mt-16;

    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

## 왜 프론트엔드 개발자가 그런걸 해요?

<figure>

  ![몰루콘](/images/molu-removebg.png)

  <figcaption>
    <small>(몰?루콘 by 코코넛콘 - edited by remove.bg)</small>
  </figcaption>

</figure>

<!--

글쎄요... 하다보니까 재밌어서? 뭐 그런 것도 있지만요...

-->

---
layout: center
---

당연히 **제품**을 더 **개선**하고 더 **확장**하기 위해서 입니다.

<style>
  p {
    font-size: 1.5em;
  }
</style>

<!--

아쉽지만 제품에 대한 자세한 얘기를 이 자리에서 들려드리진 못할 것 같아요.

하지만 여기서 시스템도 설계하고 클라이언트도 만들고 하다보니 느낀 점이 하나 있습니다.

-->

---
layout: center
class: 'text-center'
---

# 느낀점

엣지 컴퓨팅은 **프론트엔드 개발자가 가질 수 있는 가장 강력한 무기** 중 하나

<style>
  p {
    font-size: 1.5em;
  }
</style>

---
layout: center
class: 'text-center'
---

# 근데 요즘 엣지 컴퓨팅이라는 단어

어디서 많이 들어본 것 같기도 합니다... 🤔

<!--

엣지 컴퓨팅이 무엇인지 더 자세히 알 필요가 있겠죠?

사실 앞서 얘기한 거시적인 기술 트렌드에 크게 관심이 없더라도, 최근 프론트엔드 개발을 하다보면 한 번씩은 들리는 것 같습니다.

왜냐면 요즘 프론트엔드 개발에 주요한 도구나 유명한 플랫폼들이 하나 같이 다들 엣지라는 단어를 붙인 기능을 출시하고 있거든요.

뭐가 있을까요? 예를 들어 봅시다.

-->

<style>
  p {
    font-size: 1.5em;
  }
</style>

---
layout: center
class: 'text-center'
---

# Vercel Edge Middleware & Functions

<figure class="mt-8">

  ![Vercel Edge Middleware Layers](/images/vercel-edge-middleware.avif)

  <figcaption class="text-center">

  [Vercel Edge Middleware: Dynamic at the speed of static](https://vercel.com/blog/vercel-edge-middleware-dynamic-at-the-speed-of-static)

  </figcaption>

</figure>

<!--

참고로 Vercel Edge Middlware는 2022년 6월 중순에 GA

-->

---
layout: center
class: 'text-center'
---

# Netlify Edge Handlers & Functions

<figure class="mt-8">

  ![Netlify Edge](/images/netlify-edge-product.png)

  <figcaption class="text-center">

  [Netlify Edge](https://www.netlify.com/products/edge/)

  </figcaption>

</figure>

<!--

그보다 훨씬 앞서서 Netlify Edge Handlers 는 2020년 10월 6일 Early Access 발표

https://www.netlify.com/press/netlify-edge-handlers-make-personalized-web-content-fast-and-easier-to-develop/

이후 2022년 4월 Deno와 협력해서 Netlify Edge Functions 출시

https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions/

-->

---
layout: center
---

# 그 밖에 다양한 서비스들

<div class="mt-8">

- [AWS Lambda@Edge](https://aws.amazon.com/lambda/edge/)
- [Akamai EdgeWorkers](https://www.akamai.com/products/serverless-computing-edgeworkers)
- [Fastly Compute@Edge](https://www.fastly.com/products/edge-compute)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- 등등...

</div>

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

<!--

주로 메이저로 손꼽히는 CDN 회사들입니다.

이들은 앞서 언급한 플랫폼 서비스들 포함 밑단에서 더 기반이 되는 엣지 플랫폼을 제공해주고 있습니다.

-->

---
layout: center
---

# 대체 엣지가 뭐길래...?

<!--

대체 엣지가 뭐길래, 다들 엣지라는 단어를 못붙여서 난리인걸까요?

-->

---
layout: center
class: 'text-center'
---

# 엣지 컴퓨팅이란

> Edge computing is the concept of **computing as close to your end user** as possible.
>
> 엣지 컴퓨팅이란 컴퓨팅 작업을 가능한 엔드유저와 가까운 곳에서 수행하는 것을 말합니다.
>
> — [What is edge computing?](https://youtu.be/QVXbp5-YUPY) by Fauna Inc.

<!--

일단 사전적인 정의부터 봐야겠죠

-->

---
layout: center
---

![Client & Server Visualized](/images/server-client-1.jpg)

<!--

아까 네트워크를 사이에 두고 앞단에 클라이언트, 뒷단에 애플리케이션 서버가 있다고 단순하게 설명했습니다. 그럼 이 그림에서 사용자와 가까운 컴포넌트는 무엇이죠? 클라이언트 입니다.

여기서는 정의에 따라 우리가 만드는 클라이언트가 곧 엣지라고 볼 수 있겠습니다.

-->

---
layout: center
class: 'text-center'
---

<figure>

  ![Client & Server in the Real-world](/images/server-client-realworld.png)

  <figcaption>

  (출처: [freeCodeCamp](https://www.freecodecamp.org/news/an-introduction-to-the-akamai-content-delivery-network-807aa16d8781/))

  </figcaption>

</figure>

<!--

그런데, 사실은 인터넷은 그물망 처럼 퍼져있잖아요? 이 사이 경로에 수많은 중개자들이 더 있을 겁니다.

현실 세계에선 상당히 복잡합니다.

이 중엔 아까 언급했던 CDN 회사의 POP 서버도 있을테고요. 그럼 이 것도 우리 애플리케이션 서버보단 사용자에 가까우니 엣지라고 볼 수 있겠네요.

지나서 더 들어가보면 어떤 라우터 장비가 나올 겁니다. 이것도 애플리케이션 서버 보단 앞단이니 엣지라고 볼 수 있습니다.

내부망으로 들어가다보니 리버스 프록시가 하나 있으면, 그것도 애플리케이션 서버보다 앞단이니까 엣지입니다.

-->

---
layout: center
---

![Client & Server Re-architecture](/images/server-client-architecture-2.webp)

<!--

이걸 다시 단순하게 그려보면 이렇게 될 겁니다.

여기서 어디를 앞단, 어디를 뒷단이라고 부를 수 있을까요? 분명 네트워크를 어떻게 그리느냐에 따라 달라질 것 입니다.

네트워크가 그렇 듯 앞단 위치도 항상 상대적입니다. 심지어 애플리케이션 서버 자체도 중앙 DBMS 에 비하면 앞단이라고 할 수 있겠죠.

어떤 사람들은 네트워크의 앞단, 즉 사용자와 가까운 가장자리 부분을 모두 엣지라고 부르기 시작했습니다.

앞단 즉, 프론트엔드가 엣지입니다. 조금 이해가 되시나요?

-->

---
layout: center
class: 'text-center'
---

# Before the Edge

<!--

엣지를 더 이해하기 위해, 엣지가 아닌 것을 살펴봅시다.

-->

---
layout: center
class: 'text-center'
---

# CGI

<figure>

  ![CGI](/images/common-gateway-interface.png)

  <figcaption>

  (출처: [Wikipedia](https://ko.wikipedia.org/wiki/%EA%B3%B5%EC%9A%A9_%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4))

  </figcaption>
</figure>

<!--

그렇게 멀지도 않은 옛날에는 웹으로 뭔가 만들고 배포한다고 하면 이런 구성이였습니다.

자바 서블릿이나 PHP 등으로 웹 앱을 개발하고 웹 서버를 통해 HTTP로 서빙합니다. 일반적으로 단일 머신에서요.

-->

---
layout: center
class: 'text-center'
---

# FTSE

> We can solve any problem by introducing an extra level of indirection.
>
> 모든 문제는 추가적인 간접(추상)화 도입으로 해결할 수 있습니다.
>
> — [Fundamental Theorem of Software Engineering](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering)

<!--

웹은 상당히 복잡합니다. 계속 자라나는 애플리케이션의 복잡성과 웹의 복잡성을 함께 다루는 것은 어렵습니다.
-->

---
layout: center
class: 'text-center'
---

## 웹은 복잡하지만 자주 변하지 않는다

그럼 계층을 나누면 되겠네!

<!--
다행히 애플리케이션과 다르게 웹은 잘 바뀌지 않습니다. 복잡성을 해소하기 위해 우리는 소프트웨어 공학의 기본 정리에 따라 계층을 나눌 수 있습니다.

Apache httpd, NGINX, HAProxy 같은 웹 서버에 네트워크 관심사를 전부 위임해서 애플리케이션과 분리하는 겁니다.
-->

---
layout: center
class: text-center
---

# 엣지 x / 컴퓨팅 x

준비 됐나요? Scale-up!

<!--

3-tier 아키텍처라고도 하죠?

요즘 이 정도 구성은 docker-compose 같은 도구 하나로 끝낼 수 있습니다.

그렇게 웹 서비스 하나를 출시했다고 가정해봅시다. 그리고, 성장합니다. 어떤 문제가 발생할까요?

-->

---
layout: center
class: text-center
---

# 문제 1. c = c<sub>0</sub>

정보 통신의 최종 한계

<!--

사실 수 많은 문제가 있겠지만, 그 중에는 저희가 얼마나 엔지니어링을 잘하냐랑 관계없이 최종적으로 갖게 되는 한계가 있습니다.

바로 빛의 속도입니다. 모든 정보 통신 기술은 빛의 속도를 뛰어넘을 수가 없습니다. (적어도 아직까지는요)

그나마 다행인 점은 빛의 속도가 엄청나게 빠르다는 겁니다.
...불행인점은 그게 충분치 않다는 거고요.

-->

---
layout: center
class: text-center
---

# 이건 빛 입장도 들어봐야...

<figure>

  ![Photon Character](/images/photon-sd.png)

  <figcaption>
    (Mr. Photon generated by DALL-E)
  </figcaption>

</figure>

<style>
  img {
    @apply text-center;
    max-height: 40vh;
  }
</style>

---
layout: center
---

- 광케이블에선 더 느리다 (대략 68% 정도)
- 경로가 너무 복잡하다
- HTTP Round-trip 과정이 너무 비효율적이다
- TLS Handshake까지 더하면...

<style>
  ul {
    list-style: initial;
  }
</style>

<!--

몇 가지 문제점들... 물론 HTTP/2, HTTP/3 등 프로토콜의 진화로 많은 부분들이 개선되고 있습니다.

하지만 프로토콜로 개선할 수 없는 물리적인 제약은 여전히 우리를 괴롭힙니다.

-->

---
layout: center
---

# 엣지 솔루션 = 컨텐츠 캐싱

물류 창고(DC)가 너무 멀어서 배송시간(Latency)이 길어진다면, <br/> 가까운 곳(Edge Location)에 하나 더 짓는다.

---
layout: center
class: 'text-center'
---

<!--

물류와 비슷한 이치입니다.

중앙 센터가 너무 멀어서 운송 시간이 증가한다면, 더 가까운 곳에 창고를 설치하고 물건을 미리 옮겨두면 되는 겁니다.

-->

# CDN (Content Delivery Network)

<figure>

  ![What is CDN](/images/what-is-a-cdn.webp)

  <figcaption>

  (출처: [Cloudflare](https://www.cloudflare.com/ko-kr/learning/cdn/what-is-caching/))

  </figcaption>

</figure>

<!--

이렇게 물류 창고에 해당하는 PoP 서버를 전세계 100~200여개가 넘는 위치에 배치해서 구축한 것을 CDN 이라고 합니다.

-->

---
layout: center
class: text-center
---

# 문제 2. Advanced Networking

---
layout: center
class: text-center
---

# 흔한 웹 서버

- Handling HTTP-specific
- Static assets serving
- Caching
- Access logging
- Basic access control
- Request limiting
- Load balancing
- ...

<!--

두 번째 문제는 네트워킹 그 자체입니다.

단순 네트워킹의 경우, 효율적으로 처리하기 위해 설계된 L4 스위치 등 전용 컨트롤러로 충분히 다룰 수 있을 것 입니다.

하지만 아까 HTTP 처리를 모두 웹 서버에 위임했던 것과 같이, 애플리케이션과 네트워크 사이의 모호한 공통 관심사들을 어디에 위임할지 고민하기 시작하면서 소프트웨어 기반의 컨트롤러가 점점 확장되고 대중화되기 시작했습니다.

NGINX 설정 직접 해보셨나요? 굉장히 많은 것들을 지원합니다.

-->

---
layout: center
---

# 네트워크 (L4) 관심사 ?

<!--

이것들을 어디까지 네트워크의 관심사고 어디까지 애플리케이션의 관심사라 봐야하는 걸까요?

-->

---
layout: center
class: 'text-center'
---

# 네트워크는 애플리케이션입니다

정말로요 (진지)

<!--

요즘은 저수준 네트워킹이나 전문 장비를 직접 다루시는 분들이 아니라면 이런 네트워크 프로토콜을 모두 소프트웨어로 다루고 계실겁니다.

거칠게 요약하면, 네트워크 요구사항 자체가 애플리케이션으로 추상화되었다고 볼 수 있을겁니다.

-->

---
layout: center
class: 'text-center'
---

# 컴퓨팅 솔루션 = VM

![](/images/nginx-luajit.webp)

<!--

요구사항이 어느정도 복잡하다면, 단순한 DSL 보다 코드가 더 효율적일 것 입니다.

이를 위해 실제로 LuaJIT과 같이 작은 VM을 통합해서 코드를 통해 복잡한 네트워크 요구사항을 처리할 수 있습니다.

-->

---
layout: center
class: 'text-center'
---

# 웹 애플리케이션 아키텍처 ver. 201x

![](/images/web-architecture-201x.webp)

Satisfying?

<!--

자, 웹 서비스 버전 2015를 완성하신 걸 축하합니다. 어때요, 만족스럽나요?

여기서 저 같은 사람들은 생각할거에요. 이 컴퓨팅 레이어 이 앞으로 땡기고 싶다.

-->

---
layout: center
class: 'text-center'
---

## 엣지에서 더 효율적으로 할 수 있는 것들

- Handling HTTP-specific
- Static assets serving
- Caching
- Access logging
- Basic access control
- Request limiting
- Load balancing
- ...

---
layout: center
class: 'text-center'
---

# Road to Edge Computing

두 마리 토끼를 한꺼번에 잡으려면?

---
layout: center
class: 'text-center'
---

# Limit 1. Cache Efficiancy

---
layout: center
class: 'text-center'
---

## 🤔

컴퓨팅 레이어에서 동적으로 캐시 정책을 결정할 수 있어야 함

---
layout: center
class: 'text-center'
---

# Limit 2. Global Scale

---
layout: center
class: 'text-center'
---

## 🤔

글로벌 규모 컴퓨팅 인프라 구축이 필요함

---
layout: center
class: 'text-center'
---

# Limit 3. Security

---
layout: center
class: 'text-center'
---

## 🤔

배포된 코드가 호스트를 손상시킬 수 없게 격리해야 함

---
layout: center
class: 'text-center'
---

# FTSE+

> We can solve any problem by introducing an extra level of indirection.\
> …except for the problem of too many levels of indirection
>
> 모든 문제는 추가적인 간접(추상)화 도입으로 해결할 수 있습니다.\
> ...너무 많은 간접화 계층 자체를 제외하면
>
> — [Fundamental Theorem of Software Engineering](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering)

---
layout: center
---

# 거인의 어깨 위에서

- Cloud Infrastructure
- Structured Concurrency
- Containers / Isolation
- Web APIs

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: text-center
---

# + 클라우드 인프라

<figure>

  ![Top 10 Cloud Providers](/images/top10-cloud-providers.webp)

  <figcaption>

  (출처: [AllCode](https://allcode.com/cloud-providers/))

  </figcaption>

</figure>



---
layout: center
---

# + 발전한 프로그래밍 모델

```jsx
<Suspense fallback="loading from client...">
  <Client>
    <Suspense fallback="loading from edge network...">
      <Network>
        <Suspense fallback="loading from origin...">
          <Server />
        </Suspense>
      </Network>
    </Suspense>
  </Client>
</Suspense>
```

---
layout: center
---

# + 발전한 가상화 기술

- [Docker](https://www.docker.com/)
- [Firecracker](https://firecracker-microvm.github.io/)
- [V8 Isolate](https://v8.github.io/api/head/classv8_1_1Isolate.html)
- ... 등 많은 Micro-VM 기술

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: text-center
---

# 가상화는 우리 주변에도 있습니다

![](/images/many-many-tabs.jpeg)

---
layout: center
---

# + 더 발전한 API 표준

- [Web Security Model](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Service Worker](https://w3c.github.io/ServiceWorker/)
- [Fetch API](https://fetch.spec.whatwg.org/)
- [Cache API](https://web.dev/cache-api-quick-guide/)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

<!--

웹은 처음부터 서드파티 코드를 격리하기 위한 보안 모델과 적극적인 캐시 활용을 위한 아키텍처를 가지고 있었습니다.

Service Worker와 Fetch API에는 클라이언트 뿐 아니라 서버에 해당하는 추상화도 제공됩니다.

그럼 웹이 엣지를 위한 최적의 추상화가 될 수 있지 않을까요?

-->

---
layout: center
class: 'text-center'
---

# => 발전한 플랫폼

---
layout: center
class: 'text-center'
---

# 서버리스?

Q. `엣지 컴퓨팅` == `서버리스 컴퓨팅` 인가요?

---
layout: center
class: 'text-center'
---

# ☁️ + ⚡ = 🌩️

---
layout: center
---

# 현실 세계의 엣지 컴퓨팅 - AWS

- AWS Lambda
- AWS Lambda@Edge ?
- AWS CloudFront Functions ??

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

<figure>

  ![](/images/cloudfront-function-and-lambda-edge.png)

  <figcaption>

  (출처: [AWS 블로그](https://aws.amazon.com/ko/blogs/korea/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/))

  </figcaption>
</figure>

---
layout: center
---

**AWS**는 사용자에게 엣지 구성에 대해 **더 많은 자유도**를 부여함
- 장점: 어떤 네트워크에서 어떤 일이 일어날지 더 명시적으로 제어 가능
- 단점: 프로비저닝과 구성이 복잡하고 어려움

<style>
  ul {
    @apply pl-4;

    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

# 현실 세계의 엣지 컴퓨팅 - Cloudflare

<figure>

  ![](/images/cloudflare-r2-region-earth.png)

  <figcaption>

  (Cloudflare R2)

  </figcaption>

</figure>

---
layout: center
---

**Cloudflare**는 네트워크 **패턴을 분석해서 구성을 자동화**함
- 장점: 사용자가 구성에 대해 전혀 신경쓰지 않음 (It just works)
- 단점: 실제로 어떤 식으로 동작할지 파악이 어려움

<style>
  ul {
    @apply pl-4;

    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

# 엣지 컴퓨팅의 활용 사례

그래서 프론트엔드 개발이랑 무슨 상관이죠...?

---
layout: center
---

## 예시: Edge-side Rendering

- [Remix on Edge](https://remix.run/blog/remix-and-the-edge)
- [Next.js on Edge](https://github.com/vercel/next.js/discussions/34179)
- [Vitedge](https://vitedge.js.org/)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
---

## 예시: BFF (Backend For Frontend)

- [OpenGraph API](https://github.com/cometkim/metagrab)
- [주소검색 Proxy](https://github.com/daangn/juso-edge)
- [GraphQL Mesh](https://the-guild.dev/graphql/mesh)
- 세션 캐시 / API 게이트웨이

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
---

## 예시: Advanced Cache

- [Stellate](https://stellate.co/) (formally GraphCDN)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
---

## 예시: Edge Middleware

- [Early Hints Worker](https://github.com/KianNH/cloudflare-worker-early-hints)
- Example: [Edge Localization](https://developers.cloudflare.com/workers/tutorials/localize-a-website/)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
---

## 예시: Others

- [Image Resizing](https://developers.cloudflare.com/images/image-resizing/)
- [OpenGraph Image Rendering](https://og-playground.vercel.app/)
- Edge Storages
- AI Models / Hardwares

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

# 다가오는 미래?

이거 진짜 믿어도 되는거 맞아요?

---
layout: center
class: 'text-center'
---

# WinterCG

- [Web-interoperable Runtimes Community Group](https://wintercg.org/)

진정한 [위치 투명성 (Location transperency)](https://en.wikipedia.org/wiki/Location_transparency)의 구현이 될 지도

---
layout: center
---

# Open Sources

- [workerd](https://github.com/cloudflare/workerd), Cloudflare Workers runtime
- [Edge Runtime](https://github.com/vercel/edge-runtime) by Vercel
- [Roll your own JavaScript runtime](https://github.com/denoland/roll-your-own-javascript-runtime) by Deno

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
---

# WebAssembly

- [Wasmtime](https://wasmtime.dev/)
- [Wasmer](https://wasmer.io/)
- [Lunatic](https://lunatic.solutions/)
- [WasmEdge](https://wasmedge.org/)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: text-center
---

## 예전에 만든 것들은 어떡해요?

웹의 가장 큰 장점: 이전 세대의 것들을 절대 그냥 버리지 않는다는 것

<!--

그럼 지금까지 만들어 온 것들은 어떻게 할까요?

세상엔 엣지가 아니지만 여전히 위대한 소프트웨어가 많이 있습니다. 예를들면 워드프레스 같은 것들이요.
이 것들은 엣지가 아니니까 이제 용도 폐기인 걸까요?

그렇지 않습니다.

-->

---
layout: center
class: text-center
---

# CGI? WASI!

[WASI (WebAssembly System Interface)](https://wasi.dev/)

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: text-center
---

# Wordpress on Browser

<figure>

  ![](/images/wordpress-on-browser.gif)

  <figcaption>

  ([https://github.com/WordPress/wordpress-wasm])

  </figcaption>
</figure>

<style>
  figure {
    max-height: 40vh;
  }
</style>

---
layout: center
class: text-center
---

# Flash on Browser

https://ruffle.rs/demo/

---
layout: center
class: 'text-center'
---

## 미래는 생각보다 그리 놀랍지 않습니다

<figure>

  ![](/images/back-to-the-future-poster.jpg)

  <figcaption>

  익숙하고 편안한 집으로 돌아갈 뿐

  </figcaption>
</figure>

---
layout: center
---

# 미래를 대비하는 자세

- Keep eyes on **WebAssembly** & **JavaScript**
- **Zero-trust** security model
- Always bet on **Web**

<style>
  ul {
    @apply ml-8;
    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

# 레퍼런스

- [Stanford Seminar - The Future of Edge Computing from an International Perspective](https://youtu.be/Hhobq4fs87w)
- [What is edge computing?](https://youtu.be/QVXbp5-YUPY)
- [Evolution of Edge @Netflix](https://youtu.be/k01PHa5YDpQ)
- [Is "edge" computing really faster?](https://youtu.be/yOP5-3_WFus)

<style>
  ul {
    @apply ml-8 text-left;
    list-style: initial;
  }
</style>

---
layout: center
class: 'text-center'
---

# 마무리

감사합니다!
