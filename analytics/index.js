

let global_info = null

let global_diff = null

let global_inter = null

let sequence_diff = null

let global_means = null

let scale = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000]

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

let unit = [1/10, 1/15, 1/25, 1/50, 1/150, 1/250, 1/500, 1/1500, 1/2500]

let vendors = [

"Michelle Robbin",
"Carlos Snares",
"Enric Dosio",
"Jhon Snares",
"Joseph Dosni",
"Zanifer Emily",
"Kuleswar Sitaraman",
"Henrey Gabriel",
"Alex Manuel",
"George Mardy",
"Mario Saule",
"Alina Snappy",
"Maria Foster",
"James Hoog",
"Nail Knite",
"Lauson Hen",
"Pit Alex",
"Mc Lyon",
"Lucida Adam",
"Aanya Lakshmi"

]



let cities = [

"Roma",
"Paris",
"Tokyo",
"Hiroshima",
"Boston",
"San Francisco",
"Seattle",
"Montreal",
"Beijing",
"Bombay",
"Sydney",
"Singapore",
"London",
"Munich",
"Sao Paulo",
"Bogota",
"Mexico City",
"Buenos Aires",
"Istambul",
"Guangzhou"

]



let canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

window.addEventListener("load", function(){

        console.log(names)

        draw_yaxis()

        draw_xaxis()
})

function add_days(date, days) {

  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function set_date(){

    let date_from = document.getElementById("date_from").value
    let date_to = document.getElementById("date_to").value
    let date_from_lit = date_from
    let date_to_lit = date_to

    if((date_from && date_to) && date_to > date_from){

        date_from = date_from.split('/')
        date_from = new Date(date_from)

        date_to = date_to.split('/')
        date_to = new Date(date_to)
        
        let diff = (date_to - date_from )/ 86400000

        global_diff = diff

        draw_intervals(diff, date_from_lit, date_to_lit)

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

            ctx.strokeStyle = 'orange'

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

            ctx.strokeStyle = 'orange'

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

        ctx.strokeStyle = 'orange'

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

    for(let a = 1; a <= diff + 1; a++){
        
        let ob = {
                        'date': add_days(date, a),
                        'sales': Math.floor(Math.random() * (5000 - 1) ) + 1
                 }

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

                   alert("\ndate: " + global_info[a-1].date + "\nsales: " + global_info[a-1].sales)     
            }
        }

    }else{

        let count1 = 0

        //touchable range in green
        global_means.forEach((mean, index)=>{

             if(((((count1 + 1) * global_inter) + 0.07 ) * canvas.width) >= (click_x - 6) && ((((count1 + 1) * global_inter) + 0.07 ) * canvas.width) <= (click_x + 6) && (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)) >= (click_y - 6) && (0.9 * canvas.height) - ((find_y_pos(mean.average)/9) * (0.8 * canvas.height)) <= (click_y + 6)){

                   alert("from: " + mean.date_from + "\n\nto: " + mean.date_to + "\n\naverage: " + Math.round(mean.average) + "\n\ntotal: " + mean.total)     
            }

            count1++;
        })        
    }       
}
