const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kkal: 200,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kkal: 300,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kkal: 450,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn ')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function () {
        func(this)
    })
}
function func(element) {
    let parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price'),
        kkal = parent.querySelector('.main__product-kcall'),
        attribute = element.getAttribute('data-symbol')
    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    }
    else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].KkalSum
}


const hundred = document.querySelector(".header__timer-extra")
const lvlAlso = document.querySelector(".header__timer")


function up() {
    lvlAlso.style.color = `green`
    hundred.innerHTML++
if(hundred.innerHTML<10){
    hundred.innerHTML = setTimeout(up, 50)
    lvlAlso.style.color = `yellow`
} 
else if (hundred.innerHTML< 20) {
    hundred.innerHTML = setTimeout(up, 60)
    lvlAlso.style.color = `brown`

}
else if (hundred.innerHTML< 25) {
    hundred.innerHTML = setTimeout(up, 65)
    lvlAlso.style.color = `red`

}
else if (hundred.innerHTML< 30) {
    hundred.innerHTML = setTimeout(up, 70)
    lvlAlso.style.color = `purple`

}
else if (hundred.innerHTML< 35) {
    hundred.innerHTML = setTimeout(up, 75)
    lvlAlso.style.color = `pink`

}
else if (hundred.innerHTML< 40) {
    hundred.innerHTML = setTimeout(up, 80)
    lvlAlso.style.color = `blue`

}
else if (hundred.innerHTML< 45) {
    hundred.innerHTML = setTimeout(up, 85)
    lvlAlso.style.color = `white`

}
else if (hundred.innerHTML< 50) {
    hundred.innerHTML = setTimeout(up, 90)
    lvlAlso.style.color = `gray`

}
else if (hundred.innerHTML< 55) {
    hundred.innerHTML = setTimeout(up, 95)
    lvlAlso.style.color = `blue`

}
else if (hundred.innerHTML< 60) {
    hundred.innerHTML = setTimeout(up, 100)
    lvlAlso.style.color = `green`

}
else if (hundred.innerHTML< 65) {
    hundred.innerHTML = setTimeout(up, 105)
    lvlAlso.style.color = `yellow`

}
else if (hundred.innerHTML< 70) {
    hundred.innerHTML = setTimeout(up, 110)
    lvlAlso.style.color = `brown`

}
else if (hundred.innerHTML< 75) {
    hundred.innerHTML = setTimeout(up, 115)
    lvlAlso.style.color = `red`

}
else if (hundred.innerHTML< 80) {
    hundred.innerHTML = setTimeout(up, 120)
    lvlAlso.style.color = `purple`

}
else if (hundred.innerHTML< 85) {
    hundred.innerHTML = setTimeout(up, 125)
    lvlAlso.style.color = `pink`

}
else if (hundred.innerHTML< 90) {
    hundred.innerHTML = setTimeout(up, 130)
    lvlAlso.style.color = `blue`

}
else if (hundred.innerHTML< 95) {
    hundred.innerHTML = setTimeout(up, 135)
    lvlAlso.style.color = `white`

}
else if (hundred.innerHTML< 100) {
    hundred.innerHTML = setTimeout(up, 140)
    lvlAlso.style.color = `red`

}
}  

up()


const obwiy = document.querySelectorAll('.main__product-info'),
      yetadi = document.querySelector('.view__close'),
      abzor = document.querySelector('.view'),
      rasm = document.querySelector('.main__product-img')
      extra1 = document.querySelector('.extra1')
      extra2 = document.querySelector('.extra2')
      extra3 = document.querySelector('.extra3')
      image = document.querySelector('.image')


    extra1.addEventListener('dblclick', function () {
        abzor.classList.add('active')
        image.getAttribute('src')
        image.setAttribute('src', "images/product2.jpg")
         })

         extra2.addEventListener('dblclick', function () {
            abzor.classList.add('active')
            image.getAttribute('src')
            image.setAttribute('src', "images/product1.jpg")
             })
             extra3.addEventListener('dblclick', function () {
                abzor.classList.add('active')
                image.getAttribute('src')
                image.setAttribute('src', "images/product3.jpg")
                 })

yetadi.addEventListener('click', function () {
    abzor.classList.remove('active')

})


     


