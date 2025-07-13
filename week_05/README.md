# JavaScript 5주차 과제

## 📝 과제 개요

- **주제** : 타입어헤드(Typeahead, 검색어 자동 완성) 컴포넌트 구현

---

## 🎨 타입어헤드(Typeahead, 검색어 자동 완성)

```js
const typeahead = document.querySelector(".typeahead")
const searchInput = typeahead.querySelector('[type="search"]')
const predictionList = typeahead.querySelector("ul")
```

> - 각 `html` 요소들을 변수에 할당했다.

```js
searchInput.addEventListener("input", (e) => {
  predictionList.innerHTML = ""
  const search = e.currentTarget.value.trim()
  const searchedList = COUNTRIES.filter(({ name }) =>
    name.startsWith(search)
  ).map(({ name }) => name)
})
```

> - 이벤트리스너가 작동할 때마다 `ul`요소 내부의 값을 초기화시킨다.
> - 인풋요소에 이벤트리스터를 연결 후 입력값을 담을 변수를 설정했다.
> - COUNTRIES 배열의 **name값이 인풋에 입력한 값으로 시작하는 객체들을 필터링**을 한 후
>   **name의 값만 추출해서 새로운 배열로 생성**헸다.

```js
searchInput.addEventListener("input", (e) => {
  // ... 윗 내용 생략
  if (!search) {
    predictionList.setAttribute("hidden", "true")
    return
  }
})
```

> - 입력값이 없을 때 자동 완성 닫기

```js
searchInput.addEventListener("input", (e) => {
  // ... 윗 내용 생략
  const listTemplate = searchedList.reduce((template, name) => {
    const [toBold, restName] = boldSearchTerms(name, search)
    template += `<li><strong>${toBold}</strong>${restName}</li>`
    return template
  }, "")
  predictionList.innerHTML = listTemplate
  predictionList.removeAttribute("hidden")

  // ... 중간 내용 생략
  function boldSearchTerms(string, searchTerm) {
    const searchLength = searchTerm.length
    const toBold = string.substring(0, searchLength)
    const restString = string.substring(searchLength)
    return [toBold, restString]
  }
})
```

> - searchedList 배열을 `reduce` 순환하여 li 태그가 추가된 텍스트로 변환했다.
> - 이때 `boldSearchTerms()`함수를 사용하여 입력한 값의 길이만큼 볼드체로 변환했다.
> - li태그가 추가된 텍스트를 `innerHTML`을 사용하여 ul요소에 추가했다.
> - ul요소의 `hidden` 속성은 제거했다.

```js
searchInput.addEventListener("input", (e) => {
  // ... 윗 내용 생략
  document.addEventListener("click", ({ target }) => {
    if (target.closest(".typeahead")) return
    predictionList.setAttribute("hidden", "true")
  })
})
```

> - 클릭리스너를 추가하여 외부 클릭 시 자동완성이 닫히게 설정했다.

```js
// ... 윗 내용 생략
predictionList.addEventListener("click", (e) => {
  if (!e.target.closest("li")) return
  searchInput.value = e.target.textContent
  e.currentTarget.setAttribute("hidden", "true")
})
```

> - 클릭리스너를 추가하여 자동완성된 문자 클릭 시 검색창에 반영 후 자동완성이 닫히게 설정했다.

---

## 📝 과제를 통해 마주한 기초 복습의 중요성

이번 과제는 난이도를 선택할 수 있었지만, 가장 쉬운 난이도를 선택했다.
가장 쉬운 난이도를 선택하는 성격은 아니지만 자바스크립트 앞에서는 겸손해질 수밖에 없다.
열심히 하지 않으려는 것은 아니다. 나는 아직 기초가 많이 부족하다고 생각하여 이번 주말을 통해
기초가 되는 부분에 복습이 필요하다고 판단했다.

가장 쉬운 난이도라고 생각했지만 작업 시간은 많이 소요됐다.
해설이 다 나와 있는 것을 보면서 해도 이것을 이해하는 데 시간이 걸렸다.
이번 과제에서는 **배열의 순환, 이벤트 리스너, 조건문의 빠른 반환, 객체 구조 분해**햐에 대해 복습하는 시간이었다.
그리고 여전히 생소한 `startsWith()`와 `substring()` 메서드에 대해 오래 기억하기 위해 한 번 더 작성해본다.

앞으로 갈 길이 멀었다는 생각이 든다.
요즘 더운 날씨 탓인지, 공부 기간이 길어진 탓인지 많이 지쳐가는 것 같다.
또 모순적으로 시간이 빠르게 지나가는 것도 느낀다.
빠르게 지나가는 시간 속에서 지치지 않기 위해 영양제를 듬뿍 챙겨 먹고 집중하겠다고 다짐한다.
