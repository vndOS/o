let modal = document.getElementById('simpleModal')

const modal_title = document.getElementById('modal_title')

const total_sales = document.getElementById('total_sales')

const total_prods = document.getElementById('total_prods')

const total_amt = document.getElementById('total_amt')

const total_prof = document.getElementById('total_prof')

const new_cus = document.getElementById('new_cus')

const vnd_name_zone = document.getElementById('vnd_name_zone')

const vnd_rnk_zone = document.getElementById('vnd_rnk_zone')

const prod_name_zone = document.getElementById('prod_name_zone')

const prod_rnk_zone = document.getElementById('prod_rnk_zone')

const city_name_zone = document.getElementById('city_name_zone')

const city_rnk_zone = document.getElementById('city_rnk_zone')

let closeBtn = document.getElementsByClassName('closeBtn')[0]

let acum_prods = 0

let acum_amt = 0

let count_cus = 0

let count_sales = 0

let vendor_zone_els1 = null

let vendor_zone_els2 = null

let prod_zone_els1 = null

let prod_zone_els2 = null

closeBtn.addEventListener('click', closeModal)

//display will be 1 for days, 2 for weeks, 3 for months
function openModal(data, display){

	if(flag_not_1st_time === 1){

			remove_previous_modal()

	}

    switch(display){

        case 1:

            modal_title.style.fontSize = "1.5rem"

            const year = data.date.getFullYear()

            const month = data.date.getMonth()

            const day = data.date.getDate()

            const week_day = data.date.getDay()

            modal_title.innerText = (days[week_day] + " " + months2[month] + " " + day + " " + year)

        

    	total_sales.innerText = data.sales

    	acum_prods = 0

    	acum_amt = 0

    	count_cus = 0

    	data.sales_ob.forEach((sale)=>{

        	acum_prods += sale.item_qty

        	acum_amt += sale.amount

        	if(sale.new_customer){

            	count_cus++
        	} 
    	})

    	total_prods.innerText = acum_prods

    	total_amt.innerText = Math.round(acum_amt, 2)

    	total_prof.innerText = Math.round(acum_amt*0.33, 2) + ' (' + Math.round((Math.round(acum_amt*0.33, 2) / Math.round(acum_amt, 2)) * 100) + '%)'

    	new_cus.innerText = count_cus + ' (' + Math.round((count_cus / data.sales) * 100) + '%)'




// ploting vendors highlights - - - - - - - - - - 



    	data.sales_ob.forEach((sale)=>{

      	vendors_amt.forEach((vendor_ob)=>{

            	if(sale.vendor === vendor_ob.name){

                	vendor_ob.amt += sale.amount
                
            	}
        	})
    	})

    
   		vendors_amt.forEach((vendor_ob)=>{

        	if(vendor_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = vendor_ob.name
            	parag1.setAttribute("class", "vendor_zone_name")
            	vnd_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "vendor_zone_rnk")
            	parag2.innerText = Math.round(vendor_ob.amt) + ' (' + Math.round((vendor_ob.amt/total_amt.innerText)*100) + '%)'
            	vnd_rnk_zone.appendChild(parag2)
         
        	}
    	})

    	vendor_zone_els1 = document.querySelectorAll('.vendor_zone_name')

    	vendor_zone_els2 = document.querySelectorAll('.vendor_zone_rnk')


    
// ploting vendors highlights - - - - - - - - - - 

// ploting products highlights - - - - - - - - - - 



    	data.sales_ob.forEach((sale)=>{

      		products_amt.forEach((product_ob)=>{

            	if(sale.product_name === product_ob.name){

                	product_ob.amt += sale.amount
                    product_ob.units += sale.item_qty
                
            	}
        	})
    	})

    
   		products_amt.forEach((product_ob)=>{

        	if(product_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = product_ob.name
            	parag1.setAttribute("class", "prod_zone_name")
            	prod_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "prod_zone_rnk")
            	parag2.innerText = Math.round(product_ob.amt) + ' (' + Math.round((product_ob.amt/total_amt.innerText)*100) + '%) ' + product_ob.units + 'U'
            	prod_rnk_zone.appendChild(parag2)
         
        	}
    	})

   		prod_zone_els1 = document.querySelectorAll('.prod_zone_name')

    	prod_zone_els2 = document.querySelectorAll('.prod_zone_rnk')


    
// ploting products highlights - - - - - - - - - - 

// ploting cities highlights - - - - - - - - - - 



    	data.sales_ob.forEach((sale)=>{

      		cities_amt.forEach((city_ob)=>{

            	if(sale.city === city_ob.name){

                	city_ob.amt += sale.amount
                
            	}
        	})
    	})

    
   		cities_amt.forEach((city_ob)=>{

        	if(city_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = city_ob.name
            	parag1.setAttribute("class", "city_zone_name")
            	city_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "city_zone_rnk")
            	parag2.innerText = Math.round(city_ob.amt) + ' (' + Math.round((city_ob.amt/total_amt.innerText)*100) + '%)'
            	city_rnk_zone.appendChild(parag2)
         
        	}
    	})

    	city_zone_els1 = document.querySelectorAll('.city_zone_name')

    	city_zone_els2 = document.querySelectorAll('.city_zone_rnk')


    
// ploting cities highlights - - - - - - - - - - 

    modal.style.display = 'block'

	break;

    case 2:

        modal_title.style.fontSize = "1.2rem"

        let date_from_index = 0
        let date_to_index = 0

        for(let a = 0; a < global_info.length; a++){

            if(global_info[a].date === data.date_from){

                break;
            }

            date_from_index++
        }

        for(let a = 0; a < global_info.length; a++){

            if(global_info[a].date === data.date_to){

                break;
            }

            date_to_index++
        }

    const year1 = data.date_from.getFullYear()

    const month1 = data.date_from.getMonth()

    const day1 = data.date_from.getDate()

    const week_day1 = data.date_from.getDay()

    const year2 = data.date_to.getFullYear()

    const month2 = data.date_to.getMonth()

    const day2 = data.date_to.getDate()

    const week_day2 = data.date_to.getDay()

    modal_title.innerText = ("from " + days[week_day1] + " " + months2[month1] + " " + day1 + " " + year1 + " to " + days[week_day2] + " " + months2[month2] + " " + day2 + " " + year2)

    acum_prods = 0

    acum_amt = 0

    count_cus = 0

    count_sales = 0

    for(let a = date_from_index; a <= date_to_index; a++){

            global_info[a].sales_ob.forEach((sale)=>{

                acum_prods += sale.item_qty

                acum_amt += sale.amount

                count_sales++

                    if(sale.new_customer){

                        count_cus++
                    } 
           })
    }

    total_sales.innerText = count_sales

    total_prods.innerText = acum_prods

    total_amt.innerText = Math.round(acum_amt, 2)

    total_prof.innerText = Math.round(acum_amt*0.33, 2) + ' (' + Math.round((Math.round(acum_amt*0.33, 2) / Math.round(acum_amt, 2)) * 100) + '%)'

    new_cus.innerText = count_cus + ' (' + Math.round((count_cus / count_sales) * 100) + '%)'


// ploting vendors highlights - - - - - - - - - - 



    	for(let a = date_from_index; a <= date_to_index; a++){

            global_info[a].sales_ob.forEach((sale)=>{

      	        vendors_amt.forEach((vendor_ob)=>{

            	    if(sale.vendor === vendor_ob.name){

                	    vendor_ob.amt += sale.amount
                
            	    }
        	    })
    	    })
        }

    
   		vendors_amt.forEach((vendor_ob)=>{

        	if(vendor_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = vendor_ob.name
            	parag1.setAttribute("class", "vendor_zone_name")
            	vnd_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "vendor_zone_rnk")
            	parag2.innerText = Math.round(vendor_ob.amt) + ' (' + Math.round((vendor_ob.amt/total_amt.innerText)*100) + '%)'
            	vnd_rnk_zone.appendChild(parag2)
         
        	}
    	})

    	vendor_zone_els1 = document.querySelectorAll('.vendor_zone_name')

    	vendor_zone_els2 = document.querySelectorAll('.vendor_zone_rnk')


    
// ploting vendors highlights - - - - - - - - - - 

// ploting products highlights - - - - - - - - - - 



    	for(let a = date_from_index; a <= date_to_index; a++){

            global_info[a].sales_ob.forEach((sale)=>{

      		    products_amt.forEach((product_ob)=>{

            	    if(sale.product_name === product_ob.name){

                	    product_ob.amt += sale.amount
                        product_ob.units += sale.item_qty
                
            	    }
        	    })
    	    })
        }

        
    
   		products_amt.forEach((product_ob)=>{

        	if(product_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = product_ob.name
            	parag1.setAttribute("class", "prod_zone_name")
            	prod_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "prod_zone_rnk")
            	parag2.innerText = Math.round(product_ob.amt) + ' (' + Math.round((product_ob.amt/total_amt.innerText)*100) + '%) ' + product_ob.units + 'U'
            	prod_rnk_zone.appendChild(parag2)
         
        	}
    	})

   		prod_zone_els1 = document.querySelectorAll('.prod_zone_name')

    	prod_zone_els2 = document.querySelectorAll('.prod_zone_rnk')


    
// ploting products highlights - - - - - - - - - - 

// ploting cities highlights - - - - - - - - - - 



    	for(let a = date_from_index; a <= date_to_index; a++){

            global_info[a].sales_ob.forEach((sale)=>{

      		    cities_amt.forEach((city_ob)=>{

            	    if(sale.city === city_ob.name){

                	    city_ob.amt += sale.amount
                
            	    }
        	    })
    	    })
        }
  
   		cities_amt.forEach((city_ob)=>{

        	if(city_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = city_ob.name
            	parag1.setAttribute("class", "city_zone_name")
            	city_name_zone.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "city_zone_rnk")
            	parag2.innerText = Math.round(city_ob.amt) + ' (' + Math.round((city_ob.amt/total_amt.innerText)*100) + '%)'
            	city_rnk_zone.appendChild(parag2)
         
        	}
    	})

    	city_zone_els1 = document.querySelectorAll('.city_zone_name')

    	city_zone_els2 = document.querySelectorAll('.city_zone_rnk')


    
// ploting cities highlights - - - - - - - - - -



    modal.style.display = 'block'

    break;

    }
}

function closeModal(){

    vendors_amt.forEach((vendor_ob)=>{

        vendor_ob.amt = 0
    })

	cities_amt.forEach((city_ob)=>{

        city_ob.amt = 0
    })

    for(let a = 0; a < vendor_zone_els1.length; a++){

        vnd_name_zone.removeChild(vendor_zone_els1[a])
    }

    for(let a = 0; a < vendor_zone_els2.length; a++){

        vnd_rnk_zone.removeChild(vendor_zone_els2[a])
    }

	products_amt.forEach((product_ob)=>{

        product_ob.amt = 0
        product_ob.units = 0
    })

    for(let a = 0; a < prod_zone_els1.length; a++){

        prod_name_zone.removeChild(prod_zone_els1[a])
    }

    for(let a = 0; a < prod_zone_els2.length; a++){

        prod_rnk_zone.removeChild(prod_zone_els2[a])
    }

	for(let a = 0; a < city_zone_els1.length; a++){

        city_name_zone.removeChild(city_zone_els1[a])
    }

    for(let a = 0; a < city_zone_els2.length; a++){

        city_rnk_zone.removeChild(city_zone_els2[a])
    }

    modal.style.display = 'none'
}

function remove_previous_modal(){

	vendors_amt.forEach((vendor_ob)=>{

        vendor_ob.amt = 0
    })

	cities_amt.forEach((city_ob)=>{

        city_ob.amt = 0
    })

	products_amt.forEach((product_ob)=>{

        product_ob.amt = 0
        product_ob.units = 0
    })
}
