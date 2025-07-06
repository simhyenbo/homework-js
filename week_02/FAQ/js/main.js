document.querySelectorAll(".faq-item").forEach((item) => {
  const title = item.querySelector(".item-title")
  const content = item.querySelector(".item-content")
  const icon = title.querySelector("svg path")

  title.addEventListener("click", () => {
    const isOpen = content.style.display === "block"

    if (isOpen) {
      content.style.display = "none"
      icon.setAttribute("d", "M18 9L12 15L6 9") // ▼ (닫힘)
    } else {
      content.style.display = "block"
      icon.setAttribute("d", "M18 15L12 9L6 15") // ▲ (펼침)
    }
  })

  // 키보드 접근성
  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      title.click()
    }
  })
})
