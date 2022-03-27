let modal = document.getElementById('simpleModal')

const modal_title = document.getElementById('modal_title')

const total_sales = document.getElementById('total_sales')

const total_prods = document.getElementById('total_prods')

const total_amt = document.getElementById('total_amt')

const total_prof = document.getElementById('total_prof')

const new_cus = document.getElementById('new_cus')

let closeBtn = document.getElementsByClassName('closeBtn')[0]

closeBtn.addEventListener('click', closeModal)

//display will be 1 for days, 2 for weeks, 3 for months
function openModal(data, display){

    console.log(data)

    switch(display){

        case 1:

            const year = data.date.getFullYear()

            const month = data.date.getMonth()

            const day = data.date.getDate()

            const week_day = data.date.getDay()

            modal_title.innerText = (days[week_day] + " " + months2[month] + " " + day + " " + year)

        break;

    }

    total_sales.innerText = data.sales

    let acum_prods = 0

    let acum_amt = 0

    let count_cus = 0

    data.sales_ob.forEach((sale)=>{

        acum_prods += sale.item_qty

        acum_amt += sale.amount

        if(sale.new_customer){

            count_cus++
        } 
    })

    total_prods.innerText = acum_prods

    total_amt.innerText = Math.round(acum_amt, 2)

    total_prof.innerText = Math.round(acum_amt*0.33, 2)

    new_cus.innerText = count_cus

    modal.style.display = 'block'
}

function closeModal(){

    modal.style.display = 'none'
}
