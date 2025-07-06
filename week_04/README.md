# JavaScript 4주차 과제

## 📝 과제 개요

- **주제** : `GSAP Timeline`을 활용한 **애니메이션 구현하기**

---

## 🧩 HTML 마크업

```html
<!-- <svg aria-hidden="true"></svg>-->
```

> 접근성을 고려해 `aria-hidden="true"` 속성을 추가하여 스크린 리더가 이 SVG를 무시하도록 설정했다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="./js/main.js"></script>
```

> GSAP 라이브러리를 불러오기 위한 설정으로, 반드시 내가 작성한 스크립트보다 먼저 불러와야 정상적으로 동작한다.

---

## 🎨 timeline을 활용한 애니메이션

```js
const tl = gsap.timeline({
  defaults: { opacity: 0, ease: "back.out(1.4)" },
})
```

> - 타임라인 내 모든 애니메이션에 기본으로 적용될 속성들을 설정했다.

> - 초기 상태는 `opacity: 0`으로 시작하며, `back.out(1.4)`을 통해 튕기듯 자연스럽게 나타나도록 구성했다.

```js
tl.from(".text__logotitle", { x: 80, duration: 1 })
  .from(".text__bigtitle .thin", { x: 160, duration: 1 })
  .from(".text__bigtitle", { x: -80, duration: 1 }, "<")
  .from(".text__description", { y: 30 }, "-=0.5")
  .from(".text__link", { y: 40 }, "-=0.4")
  .from(
    "#items > path",
    { scale: 0, transformOrigin: "center", stagger: 0.1 },
    "-=0.2"
  )
  .from(
    "#items > rect",
    { scale: 0, transformOrigin: "center", stagger: 0.1 },
    "-=0.4"
  )
```

> - `<`는 이전 애니메이션과 **동시에 시작**되도록 하는 설정이다.
> - `-=`는 **앞선 애니메이션보다 일찍 시작**하도록 시간차를 조절하는 기능이다.
> - `stagger: 0.1`은 여러 요소가 순차적으로 일정 시간 간격을 두고 애니메이션되도록 한다.

---

## 📝 연습하지 않으면, 누구나 발전하지 않는다.

이번 주 수업을 통해 애니메이션 구현을 다시 한번 체계적으로 복습할 수 있었다.  
CSS 트랜지션과 애니메이션만으로도 다양한 효과를 낼 수 있지만, JavaScript를 활용하면 **보다 세밀하고 역동적인 제어**가 가능하다는 점을 직접 체감했다.  
특히 GSAP(GreenSock Animation Platform)을 적용해보면서 애니메이션 표현의 깊이가 훨씬 넓어진 것을 느꼈다.

사실 이전 CSS 수업에서 애니메이션 관련 내용을 깊이 이해하지 못한 채 넘어갔던 터라, 이번 기회에 부족했던 부분들을 다시 채울 수 있었다.  
결과적으로 이 수업은 **GSAP 사용법 학습뿐 아니라 CSS 애니메이션 개념까지 함께 복습할 수 있는 좋은 계기**가 되었다.

매번 다짐만 했던 **복습의 습관화**가 여전히 어렵지만,  
이번에 제공된 시안의 슬로건처럼 꾸준한 연습만이 발전을 이끈다는 점을 다시금 느낀다.  
앞으로도 조금씩이라도 실습과 회고를 반복해보며 성장해 나가고 싶다.
