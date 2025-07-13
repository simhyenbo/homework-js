;(() => {
  const typeahead = document.querySelector(".typeahead")
  const searchInput = typeahead.querySelector('[type="search"]')
  const predictionList = typeahead.querySelector("ul")

  searchInput.addEventListener("input", (e) => {
    predictionList.innerHTML = ""

    const search = e.currentTarget.value.trim()
    // COUNTRIES 배열에 필터링을 한 후 map을 사용하여 name 값 추출
    const searchedList = COUNTRIES.filter(({ name }) =>
      name.startsWith(search)
    ).map(({ name }) => name)

    // 검색내용이 없을 때 검색창 닫기
    if (!search) {
      predictionList.setAttribute("hidden", "true")
      return
    }

    // searchedList 배열을 순환(for...of)하여 li 엘리먼트 요소로 변환 >> 엘리먼트일 시 append() 사용
    // for (const item of searchedList) {
    //   const listTemplate = document.createElement("li")
    //   listTemplate.textContent = item
    //   predictionList.append(listTemplate)
    //   predictionList.removeAttribute("hidden")
    // }

    // searchedList 배열을 순환(reduce)하여 li 태그가 추가된 텍스트로 변환 >> 텍스트일 시 innerHTML= 사용
    const listTemplate = searchedList.reduce((template, name) => {
      const [toBold, restName] = boldSearchTerms(name, search)
      template += `<li><strong>${toBold}</strong>${restName}</li>`
      return template
    }, "")
    predictionList.innerHTML = listTemplate
    predictionList.removeAttribute("hidden")

    // 외부 클릭 시 자동검색 닫힘
    document.addEventListener("click", ({ target }) => {
      if (target.closest(".typeahead")) return
      predictionList.setAttribute("hidden", "true")
    })

    // 자동검색어 클릭 시 검색창에 반영 후 자동검색 닫힘
    predictionList.addEventListener("click", (e) => {
      if (!e.target.closest("li")) return
      searchInput.value = e.target.textContent
      e.currentTarget.setAttribute("hidden", "true")
    })

    function boldSearchTerms(string, searchTerm) {
      const searchLength = searchTerm.length
      const toBold = string.substring(0, searchLength)
      const restString = string.substring(searchLength)
      return [toBold, restString]
    }
  })
})()
