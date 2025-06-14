// 함수 작성 과제

// ## 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`
}
console.log(greetUser("현보"))

// ## 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
const calculateOriginalPrice = function (priceWithTax) {
  const taxRate = 0.033
  return priceWithTax / (1 + taxRate)
}
console.log(calculateOriginalPrice(20000))

// ## 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
const registrationCard = {
  name: "심현보",
  age: 31,
  gender: "남",
}
const canSellAlcohol = (registrationCard) => registrationCard.age >= 19
console.log(canSellAlcohol(registrationCard))

// ## 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
const getDiscountedPrice = (originalPrice, discountPercent) =>
  originalPrice - originalPrice / discountPercent
console.log(getDiscountedPrice(80000, 10))

// ## 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
function getUserGrade(score) {
  if (score >= 90) {
    return `score: ${score}, grade: 'A', description: '매우우수'`
  } else if (score >= 80) {
    return `score: ${score}, grade: 'B', description: '우수'`
  } else if (score >= 70) {
    return `score: ${score}, grade: 'C', description: '보통'`
  } else if (score >= 60) {
    return `score: ${score}, grade: 'D', description: '미달, 통과 기준 근접'`
  } else {
    return `score: ${score}, grade: 'F', description: '낙제'`
  }
}
console.log(getUserGrade(87))
