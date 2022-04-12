let global_info = null

let global_diff = null

let global_inter = null

let sequence_diff = null

let global_means = null

let scale = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000]

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

let unit = [1/10, 1/15, 1/25, 1/50, 1/150, 1/250, 1/500, 1/1500, 1/2500]

const embed = document.getElementById('embed')

const embed_header = document.getElementById('embed_header')

let acum_prods_a = 0

let acum_amt_a = 0

let count_cus_a = 0

let count_sales_a = 0

let vendor_zone_els1_a = null

let vendor_zone_els2_a = null

let prod_zone_els1_a = null

let prod_zone_els2_a = null

let city_zone_els1_a = null

let	city_zone_els2_a = null

let flag_not_1st_time = 0

const vnd_name_zone_a = document.getElementById('vnd_name_zone_a')

const vnd_rnk_zone_a = document.getElementById('vnd_rnk_zone_a')

const prod_name_zone_a = document.getElementById('prod_name_zone_a')

const prod_rnk_zone_a = document.getElementById('prod_rnk_zone_a')

const city_name_zone_a = document.getElementById('city_name_zone_a')

const city_rnk_zone_a = document.getElementById('city_rnk_zone_a')

const ani_box = document.getElementById('ani_box')

const buy_cart_id = document.getElementById('buy_cart_id')

let canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

window.addEventListener("load", function(){

        const footer_date = document.getElementById("footer_date")

        let today = new Date()

        const date_to = document.getElementById("date_to")
        const date_from = document.getElementById("date_from")

        const year = today.getFullYear()

        const month = today.getMonth()

        const day = today.getDate()

        

        if(parseInt(month) >= 10){

            today = year + '-' + (month+1) 
        }else{

            today = year + '-0' + (month+1)
        }

        if(parseInt(day) >= 2){

            today += '-' + (day)
        }else{

            today += '-0' + (day)
        }
        
        footer_date.innerText = year 

        date_to.value = today

        let today_ago = add_days(today, -30)

        const year2 = today_ago.getFullYear()

        const month2 = today_ago.getMonth()

        const day2 = today_ago.getDate()

        if(parseInt(month) >= 10){

            today_ago = year2 + '-' + (month2+1) 
        }else{

            today_ago = year2 + '-0' + (month2+1)
        }

        if(parseInt(day) >= 2){

            today_ago += '-' + (day2)
        }else{

            today_ago += '-0' + (day2)
        }

        date_from.value = today_ago

        draw_yaxis()

        draw_xaxis()

        set_date()
})

function add_days(date, days) {

  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function set_date(){

    ani_box.style.display = 'block'

    buy_cart_id.style.display = 'block'

    const myTimeout = setTimeout(hide_bar, 3000)

    const myTimeout2 = setTimeout(hide_hand, 10000)  

    let date_from = document.getElementById("date_from").value
    let date_to = document.getElementById("date_to").value

    let date_from_lit = date_from
    let date_to_lit = date_to

    console.log(date_from_lit)

    if((date_from && date_to) && date_to > date_from){

		if(flag_not_1st_time === 1){

			remove_previous()

		}

		flag_not_1st_time = 1

        date_from = date_from.split('/')
        date_from = new Date(date_from)

        date_to = date_to.split('/')
        date_to = new Date(date_to)
        
        let diff = (date_to - date_from )/ 86400000

        global_diff = diff

        draw_intervals(diff, date_from_lit, date_to_lit)

// - - - Embed Highlights - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


        const year3 = date_from.getFullYear()

        const month3 = date_from.getMonth()

        const day3 = date_from.getDate()

        const week_day3 = date_from.getDay()

        const year4 = date_to.getFullYear()

        const month4 = date_to.getMonth()

        const day4 = date_to.getDate()

        const week_day4 = date_to.getDay()

        embed_header.innerText = ("from " + days[week_day3] + " " + months2[month3] + " " + day3 + " " + year3 + " to " + days[week_day4] + " " + months2[month4] + " " + day4 + " " + year4)

		count_sales_a = 0

		acum_prods_a = 0

		acum_amt_a = 0

		count_cus_a = 0

		for(let p = 0; p < global_info.length; p++){

        	global_info[p].sales_ob.forEach((sale)=>{

        		acum_prods_a += sale.item_qty

        		acum_amt_a += sale.amount

        		count_sales_a++

        		if(sale.new_customer){

            		count_cus_a++
            	} 

				products_amt.forEach((product_ob)=>{

            	    if(sale.product_name === product_ob.name){

                	    product_ob.amt += sale.amount
                        product_ob.units += sale.item_qty
                
            	    }
        	    })

				vendors_amt.forEach((vendor_ob)=>{

            	    if(sale.vendor === vendor_ob.name){

                	    vendor_ob.amt += sale.amount
                
            	    }
				})

				cities_amt.forEach((city_ob)=>{

            		if(sale.city === city_ob.name){

                		city_ob.amt += sale.amount
                
            		}
        		})
        	})
		}

	total_sales_a.innerText = count_sales_a

    total_prods_a.innerText = acum_prods_a

    total_amt_a.innerText = Math.round(acum_amt_a, 2)

    total_prof_a.innerText = Math.round(acum_amt_a*0.33, 2) + ' (' + Math.round((Math.round(acum_amt_a*0.33, 2) / Math.round(acum_amt_a, 2)) * 100) + '%)'

    new_cus_a.innerText = count_cus_a + ' (' + Math.round((count_cus_a / count_sales_a) * 100) + '%)'

	products_amt.forEach((product_ob)=>{

        	if(product_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = product_ob.name
            	parag1.setAttribute("class", "prod_zone_name_a")
            	prod_name_zone_a.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "prod_zone_rnk_a")
            	parag2.innerText = Math.round(product_ob.amt) + ' (' + Math.round((product_ob.amt/total_amt_a.innerText)*100) + '%) ' + product_ob.units + 'U'
            	prod_rnk_zone_a.appendChild(parag2)
         
        	}
    	})

   		prod_zone_els1_a = document.querySelectorAll('.prod_zone_name_a')

    	prod_zone_els2_a = document.querySelectorAll('.prod_zone_rnk_a')


	vendors_amt.forEach((vendor_ob)=>{

        	if(vendor_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = vendor_ob.name
            	parag1.setAttribute("class", "vendor_zone_name_a")
            	vnd_name_zone_a.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "vendor_zone_rnk_a")
            	parag2.innerText = Math.round(vendor_ob.amt) + ' (' + Math.round((vendor_ob.amt/total_amt_a.innerText)*100) + '%)'
            	vnd_rnk_zone_a.appendChild(parag2)
         
        	}
    	})

    	vendor_zone_els1_a = document.querySelectorAll('.vendor_zone_name_a')

    	vendor_zone_els2_a = document.querySelectorAll('.vendor_zone_rnk_a')

		cities_amt.forEach((city_ob)=>{

        	if(city_ob.amt !== 0){

            	const parag1 = document.createElement("p")
            	parag1.innerText = city_ob.name
            	parag1.setAttribute("class", "city_zone_name_a")
            	city_name_zone_a.appendChild(parag1)

            	const parag2 = document.createElement("p")
            	parag2.setAttribute("class", "city_zone_rnk_a")
            	parag2.innerText = Math.round(city_ob.amt) + ' (' + Math.round((city_ob.amt/total_amt_a.innerText)*100) + '%)'
            	city_rnk_zone_a.appendChild(parag2)
         
        	}
    	})

    	city_zone_els1_a = document.querySelectorAll('.city_zone_name_a')

    	city_zone_els2_a = document.querySelectorAll('.city_zone_rnk_a')

// - - - Embed Highlights - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

        embed.style.display = 'block'

    }else if(date_to < date_from){

        alert("date To must be after date From")
    }
}

function draw_xaxis(){

    ctx.beginPath()

    ctx.lineWidth = 2

    //X AXIS

    ctx.moveTo(0.07 * canvas.width, 0.9 * canvas.height)

    ctx.lineTo(0.97 * canvas.width , 0.9 * canvas.height)

    ctx.strokeStyle = 'black'

    ctx.stroke()
}

//draw custom date interval provided by the date input in the client
function draw_intervals(diff, date_from_lit, date_to_lit){

    let info = random_values(date_from_lit, diff)

    global_info = info

    ctx.clearRect(0 ,0 , canvas.width, canvas.height)

    ctx.fillStyle = 'White'

    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.font = 'bold 12pt Helvetica'

    ctx.fillStyle = 'MidnightBlue'

	ctx.fillText("from " + date_from_lit + " to " + date_to_lit + " by VndOS App", 0.26 * canvas.width, 0.06 * canvas.height)

    draw_yaxis()

    draw_xaxis()
    
    

    ctx.beginPath()

    ctx.lineWidth = 1

    //X AXIS divisions

    if(diff > 730){

        alert("2 years MAXIMUM, try again")
    
    //this option for weeks average display
    }else if(diff > 31 && diff <= 93){

        diff = Math.round(diff / 7)

        sequence_diff = diff

        //average in each interval
        let means = gen_means(info, diff-1, "week")

        global_means = means

        let inter = 0.9 / diff

        global_inter = inter

        let count1 = 0

        //touchable range in green
        means.forEach((mean, index)=>{

            ctx.beginPath()

            ctx.arc(((((count1 + 1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)), 5, 0, 2 * Math.PI)

            ctx.fillStyle = 'SpringGreen'

            ctx.fill()

            count1++;
        })

        count1 = 0

        //each week average
        means.forEach((mean, index)=>{

            ctx.beginPath()

            ctx.lineWidth = 1

            ctx.strokeStyle = 'Orange'

            ctx.moveTo((((count1 * inter) + 0.07 ) * canvas.width), (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)))

            ctx.lineTo(((((count1 + 1) * inter) + 0.07 ) * canvas.width), (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)))

            ctx.stroke()

            ctx.arc(((((count1 + 1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)), 2, 0, 2 * Math.PI)

            ctx.fillStyle = 'Red'

            ctx.fill()

            count1++;
        })

         
        //x axis divisions
        for(let a = 1; a < diff; a++){

            ctx.beginPath()

            ctx.lineWidth = 1

            ctx.strokeStyle = 'black'

            ctx.moveTo((((a * inter) + 0.07 ) * canvas.width), 0.91 * canvas.height)

            ctx.lineTo((((a * inter) + 0.07 ) * canvas.width), 0.89 * canvas.height)

            ctx.stroke()
        }

        ctx.font = 'bold 6pt Helvetica'

        ctx.fillStyle = 'Midnightblue'

        let b = 0

        for(let a = 0; a < diff; a++){

            if(b === 0.06){

                b = 0
            }

            //date marks
            ctx.fillText(months[add_days(date_from_lit, ((a + 1) * 7) - 6).getMonth()] + add_days(date_from_lit, ((a + 1) * 7) - 6).getDate(),(((a * inter) + 0.07 ) * canvas.width), (0.93 + b) * canvas.height)

            b += 0.02
        }

    //this option for months average display
    }else if(diff > 93){

        diff = Math.round(diff / 31)

        sequence_diff = diff

        //average in each interval
        let means = gen_means(info, diff-1, "month")

        global_means = means

        let inter = 0.9 / diff

        global_inter = inter

        let count1 = 0

        //touchable range in green
        means.forEach((mean, index)=>{

            ctx.beginPath()

            ctx.arc(((((count1 + 1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)), 5, 0, 2 * Math.PI)

            ctx.fillStyle = 'SpringGreen'

            ctx.fill()

            count1++;
        })

        count1 = 0

        //each month average
        means.forEach((mean, index)=>{

            ctx.beginPath()

            ctx.lineWidth = 1

            ctx.strokeStyle = 'Orange'

            ctx.moveTo((((count1 * inter) + 0.07 ) * canvas.width), (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)))

            ctx.lineTo(((((count1 + 1) * inter) + 0.07 ) * canvas.width), (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)))

            ctx.stroke()

            ctx.arc(((((count1 + 1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)), 2, 0, 2 * Math.PI)

            ctx.fillStyle = 'Red'

            ctx.fill()

            count1++;
        })

        ctx.beginPath()

        ctx.lineWidth = 1

        ctx.strokeStyle = 'black'

        for(let a = 1; a < diff; a++){

            ctx.moveTo((((a * inter) + 0.07 ) * canvas.width), 0.91 * canvas.height)

            ctx.lineTo((((a * inter) + 0.07 ) * canvas.width), 0.89 * canvas.height)

            ctx.stroke()
        }

        ctx.font = 'bold 6pt Helvetica'

        ctx.fillStyle = 'Midnightblue'

        let b = 0

        for(let a = 0; a < diff; a++){

            if(b === 0.06){

                b = 0
            }

            //date marks
            ctx.fillText(months[add_days(date_from_lit, ((a + 1) * 31) - 30).getMonth()] + add_days(date_from_lit, ((a + 1) * 31) - 30).getDate(),(((a * inter) + 0.07 ) * canvas.width), (0.93 + b) * canvas.height)

            b += 0.02
        }

    //this option for days display
    }else{

        let inter = 0.9 / diff 

        global_inter = inter

        for(let a = 1; a < diff; a++){

            ctx.moveTo((((a * inter) + 0.07 ) * canvas.width), 0.91 * canvas.height)

            ctx.lineTo((((a * inter) + 0.07 ) * canvas.width), 0.89 * canvas.height)

            ctx.stroke()
        }

        ctx.font = 'bold 6pt Helvetica'

        ctx.fillStyle = 'Midnightblue'

        let b = 0

        for(let a = 0; a < diff; a++){

            if(b === 0.06){

                b = 0
            }

            //date marks
            ctx.fillText(months[add_days(date_from_lit, (a + 1)).getMonth()] + add_days(date_from_lit, (a + 1)).getDate(),(((a * inter) + 0.07 ) * canvas.width), (0.93 + b) * canvas.height)

            b += 0.02
        }
        
        //touchable range in green
        for(let a = 1; a <= diff; a++){

            ctx.beginPath()

            ctx.arc(((((a-1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(info[a-1].sales)/9) * (0.8 * canvas.height)), 5, 0, 2 * Math.PI)

            ctx.fillStyle = 'SpringGreen'

            ctx.fill()
        }

        //connect dots
        ctx.beginPath()

        ctx.lineWidth = 1

        ctx.strokeStyle = 'white'

        ctx.moveTo(0.1 * canvas.width, (0.9 * canvas.height) - ((find_y_pos(info[0].sales)/9) * (0.8 * canvas.height)))

        ctx.stroke() 

        ctx.beginPath()

        ctx.strokeStyle = 'Orange'

        //connect dots
        for(let a = 1; a <= diff; a++){

        //here we call a find_y_pos to find the proportion of y axis
        //to be pointed to find the correct position    
        ctx.lineTo(((((a-1) * inter) + 0.07 ) * canvas.width), (0.9 * canvas.height) - ((find_y_pos(info[a-1].sales)/9) * (0.8 * canvas.height)))

        ctx.stroke() 
        }

        //draw dots
        for(let a = 1; a <= diff; a++){

            ctx.beginPath()

            //here we call a find_y_pos to find the proportion of y axis
            //to be pointed to find the correct position
            ctx.arc(((((a-1) * inter) + 0.07 ) * canvas.width),(0.9 * canvas.height) - ((find_y_pos(info[a-1].sales)/9) * (0.8 * canvas.height)), 2, 0, 2 * Math.PI)

            ctx.fillStyle = 'Red'

            ctx.fill()
        }
    }

    
}

function draw_yaxis(){

    ctx.beginPath()

    ctx.lineWidth = 2

    ctx.strokeStyle = 'black'

    //Y AXIS

    ctx.font = 'bold 12pt Helvetica'

    ctx.fillStyle = 'MidnightBlue'

	ctx.fillText("Total Sales", 0.075 * canvas.width, 0.06 * canvas.height)

    ctx.moveTo(0.07 * canvas.width, 0.1 * canvas.height)

    ctx.lineTo(0.07 * canvas.width, 0.9 * canvas.height)

    ctx.stroke()

    //Y AXIS divisions

    ctx.lineWidth = 1

    ctx.font = 'bold 6pt Helvetica'

    ctx.fillStyle = 'Midnightblue'

    for(let a = 1; a < 10; a++){

	    ctx.fillText(scale[a], 0.0125 * canvas.width, (0.92 - (a * 0.09)) * canvas.height)

        ctx.moveTo(0.06 * canvas.width, (0.91 - (a * 0.09)) * canvas.height)

        ctx.lineTo(0.08 * canvas.width, (0.91 - (a * 0.09)) * canvas.height)

        ctx.stroke()

    }
    
}

//this will return a proportion of y axis whose height is (0.8 * canvas.height)
function find_y_pos(val){

    for(let a = 0; a < 10; a++){

        if(val < scale[a + 1] && val >= scale[a]){

            return ((val - scale[a]) * unit[a]) + a
        }
    }
}

//this random values will be changed by the retrieved from database ones
function random_values(date_from, diff){

    let info = []

    date = new Date(date_from)

    for(let a = 1; a <= diff+1; a++){
        
        let ob = {
                        'date': add_days(date, a),
                        'sales': Math.floor(Math.random() * (5000 - 1) ) + 1,
			'sales_ob':null
                 }

		let sales_arr = []

		for(let a = 0; a < ob.sales; a++){

                    //new customer?
                    let is_new = false

                    const random_number = Math.floor(Math.random() * (100 - 1))

                    is_new = (random_number > 66) ? true : false 


			let sale = {

				"customer":(names[Math.floor(Math.random() * (106 - 0))].first_name + " " + names[Math.floor(Math.random() * (107 - 1))].last_name),
                "new_customer":is_new,
				"city":cities[Math.floor(Math.random() * (19 - 0))],
				"product_ob":products[Math.floor(Math.random() * (25 - 0))],
				"product_name":null,
				"product_price":null,
				"vendor":vendors[Math.floor(Math.random() * (20 - 0))],
				"item_qty":Math.floor(Math.random() * (10 - 2)),
				"amount":null
			}

			sale.product_name = sale.product_ob.name

            if(sale.product_ob.price.$numberInt){

                sale.product_price = new Number(sale.product_ob.price.$numberInt)
            }else if(sale.product_ob.price.$numberDouble){

                sale.product_price = new Number(sale.product_ob.price.$numberDouble)
            }
            
			sale.amount = sale.product_price * sale.item_qty

			sale.product_ob = null

			sales_arr.push(sale)
		}

		ob.sales_ob = sales_arr

        info.push(ob)
    }

    return info
}

//generate average for the arguments input
function gen_means(info, number_of_means, s_case){

    let means = []

    let count = 0

    for(let a = 0; a < number_of_means; a++){

        let acum = 0;

        let mean = {
            "average":null,
            "date_from":null,
            "date_to":null,
            "total":null
        }

        if(s_case === "week"){

            for(let b = 0; b < 7; b++){

                if(b === 0){

                    mean.date_from = info[count].date
                }

                acum += info[count].sales

                if(b === 6){

                    mean.date_to = info[count].date
                }

                count++ 
            }

            mean.total = acum
            mean.average = acum/7 
            means.push(mean)       
            acum = 0

        }else{

            for(let b = 0; b < 31; b++){

                if(b === 0){

                    mean.date_from = info[count].date
                }

                acum += info[count].sales

                if(b === 30){

                    mean.date_to = info[count].date
                }

                count++ 
            }

            mean.total = acum
            mean.average = acum/31 
            means.push(mean)       
            acum = 0
        }
    }

    return means
}

//touch event
function get_coords(e){

    let click_x = event.offsetX * canvas.width / canvas.clientWidth
	let click_y = event.offsetY * canvas.height / canvas.clientHeight

    if(global_diff){

        assoc_inter(click_x, click_y)
    }
}

//link the touch circle with his information
function assoc_inter(click_x, click_y){

    if(global_diff < 32){

        for(let a = 1; a <= global_diff; a++){

            if(((((a-1) * global_inter) + 0.07 ) * canvas.width) >= (click_x - 6) && ((((a-1) * global_inter) + 0.07 ) * canvas.width) <= (click_x + 6) && ((0.9 * canvas.height) - ((find_y_pos(global_info[a-1].sales)/9) * (0.8 * canvas.height))) >= (click_y - 6) && ((0.9 * canvas.height) - ((find_y_pos(global_info[a-1].sales)/9) * (0.8 * canvas.height))) <= (click_y + 6)){

                   
openModal(global_info[a-1], 1) 
            }
        }

    }else{

        let count1 = 0

        //touchable range in green
        global_means.forEach((mean, index)=>{

             if(((((count1 + 1) * global_inter) + 0.07 ) * canvas.width) >= (click_x - 6) && ((((count1 + 1) * global_inter) + 0.07 ) * canvas.width) <= (click_x + 6) && (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)) >= (click_y - 6) && (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)) <= (click_y + 6)){

openModal(mean, 2)
                   /*alert("from: " + mean.date_from + "\n\nto: " + mean.date_to + "\n\naverage: " + Math.round(mean.average) + "\n\ntotal: " + mean.total)*/     
            }

            count1++;
        })        
    }       
}

function remove_previous(){

	vendors_amt.forEach((vendor_ob)=>{

        vendor_ob.amt = 0
    })

	cities_amt.forEach((city_ob)=>{

        city_ob.amt = 0
    })

    for(let a = 0; a < vendor_zone_els1_a.length; a++){

        vnd_name_zone_a.removeChild(vendor_zone_els1_a[a])
    }

    for(let a = 0; a < vendor_zone_els2_a.length; a++){

        vnd_rnk_zone_a.removeChild(vendor_zone_els2_a[a])
    }

	products_amt.forEach((product_ob)=>{

        product_ob.amt = 0
        product_ob.units = 0
    })

    for(let a = 0; a < prod_zone_els1_a.length; a++){

        prod_name_zone_a.removeChild(prod_zone_els1_a[a])
    }

    for(let a = 0; a < prod_zone_els2_a.length; a++){

        prod_rnk_zone_a.removeChild(prod_zone_els2_a[a])
    }

	for(let a = 0; a < city_zone_els1_a.length; a++){

        city_name_zone_a.removeChild(city_zone_els1_a[a])
    }

    for(let a = 0; a < city_zone_els2_a.length; a++){

        city_rnk_zone_a.removeChild(city_zone_els2_a[a])
    }
}

function hide_bar(){

    ani_box.style.display = 'none'
}

function hide_hand(){

    buy_cart_id.style.display = 'none'
}

