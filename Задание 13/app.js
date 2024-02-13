const text = document.querySelector(".text")
const text1 = document.querySelector(".text1")
let a = text.innerText
let b = text1.innerText
let c = a/10*100
if(a>100000){
    console.log(`Вы взяли кредит на ${a} и на ${b} года(лет). Сумма задолженности ${c}`)
} else {
    console.log("Минимальная сумма взятия кредита должна быть минимум от 100000")
}