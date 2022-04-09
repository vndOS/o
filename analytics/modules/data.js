const names = [{"first_name":"Steven","last_name":"King"},{"first_name":"Neena","last_name":"Kochhar"},{"first_name":"Lex","last_name":"DeHaan"},{"first_name":"Alexander","last_name":"Hunold"},{"first_name":"Bruce","last_name":"Ernst"},{"first_name":"David","last_name":"Austin"},{"first_name":"Valli","last_name":"Pataballa"},{"first_name":"Diana","last_name":"Lorentz"},{"first_name":"Nancy","last_name":"Greenberg"},{"first_name":"Daniel","last_name":"Faviet"},{"first_name":"John","last_name":"Chen"},{"first_name":"Ismael","last_name":"Sciarra"},{"first_name":"JoseManue","last_name":"Urman"},{"first_name":"Luis","last_name":"Popp"},{"first_name":"Den","last_name":"Raphaely"},{"first_name":"Alexander","last_name":"Khoo"},{"first_name":"Shelli","last_name":"Baida"},{"first_name":"Sigal","last_name":"Tobias"},{"first_name":"Guy","last_name":"Himuro"},{"first_name":"Karen","last_name":"Colmenares"},{"first_name":"Matthew","last_name":"Weiss"},{"first_name":"Adam","last_name":"Fripp"},{"first_name":"Payam","last_name":"Kaufling"},{"first_name":"Shanta","last_name":"Vollman"},{"first_name":"Kevin","last_name":"Mourgos"},{"first_name":"Julia","last_name":"Nayer"},{"first_name":"Irene","last_name":"Mikkilinen"},{"first_name":"James","last_name":"Landry"},{"first_name":"Steven","last_name":"Markle"},{"first_name":"Laura","last_name":"Bissot"},{"first_name":"Mozhe","last_name":"Atkinson"},{"first_name":"James","last_name":"Marlow"},{"first_name":"TJ","last_name":"Olson"},{"first_name":"Jason","last_name":"Mallin"},{"first_name":"Michael","last_name":"Rogers"},{"first_name":"Ki","last_name":"Gee"},{"first_name":"Hazel","last_name":"Philtanker"},{"first_name":"Renske","last_name":"Ladwig"},{"first_name":"Stephen","last_name":"Stiles"},{"first_name":"John","last_name":"Seo"},{"first_name":"Joshua","last_name":"Patel"},{"first_name":"Trenna","last_name":"Rajs"},{"first_name":"Curtis","last_name":"Davies"},{"first_name":"Randall","last_name":"Matos"},{"first_name":"Peter","last_name":"Vargas"},{"first_name":"John","last_name":"Russell"},{"first_name":"Karen","last_name":"Partners"},{"first_name":"Alberto","last_name":"Errazuriz"},{"first_name":"Gerald","last_name":"Cambrault"},{"first_name":"Eleni","last_name":"Zlotkey"},{"first_name":"Peter","last_name":"Tucker"},{"first_name":"David","last_name":"Bernstein"},{"first_name":"Peter","last_name":"Hall"},{"first_name":"Christophe","last_name":"Olsen"},{"first_name":"Nanette","last_name":"Cambrault"},{"first_name":"Oliver","last_name":"Tuvault"},{"first_name":"Janette","last_name":"King"},{"first_name":"Patrick","last_name":"Sully"},{"first_name":"Allan","last_name":"McEwen"},{"first_name":"Lindsey","last_name":"Smith"},{"first_name":"Louise","last_name":"Doran"},{"first_name":"Sarath","last_name":"Sewall"},{"first_name":"Clara","last_name":"Vishney"},{"first_name":"Danielle","last_name":"Greene"},{"first_name":"Mattea","last_name":"Marvins"},{"first_name":"David","last_name":"Lee"},{"first_name":"Sundar","last_name":"Ande"},{"first_name":"Amit","last_name":"Banda"},{"first_name":"Lisa","last_name":"Ozer"},{"first_name":"Harrison","last_name":"Bloom"},{"first_name":"Tayler","last_name":"Fox"},{"first_name":"William","last_name":"Smith"},{"first_name":"Elizabeth","last_name":"Bates"},{"first_name":"Sundita","last_name":"Kumar"},{"first_name":"Ellen","last_name":"Abel"},{"first_name":"Alyssa","last_name":"Hutton"},{"first_name":"Jonathon","last_name":"Taylor"},{"first_name":"Jack","last_name":"Livingston"},{"first_name":"Kimberely","last_name":"Grant"},{"first_name":"Charles","last_name":"Johnson"},{"first_name":"Winston","last_name":"Taylor"},{"first_name":"Jean","last_name":"Fleaur"},{"first_name":"Martha","last_name":"Sullivan"},{"first_name":"Girard","last_name":"Geoni"},{"first_name":"Nandita","last_name":"Sarchand"},{"first_name":"Alexis","last_name":"Bull"},{"first_name":"Julia","last_name":"Dellinger"},{"first_name":"Anthony","last_name":"Cabrio"},{"first_name":"Kelly","last_name":"Chung"},{"first_name":"Jennifer","last_name":"Dilly"},{"first_name":"Timothy","last_name":"Gates"},{"first_name":"Randall","last_name":"Perkins"},{"first_name":"Sarah","last_name":"Bell"},{"first_name":"Britney","last_name":"Everett"},{"first_name":"Samuel","last_name":"McCain"},{"first_name":"Vance","last_name":"Jones"},{"first_name":"Alana","last_name":"Walsh"},{"first_name":"Kevin","last_name":"Feeney"},{"first_name":"Donald","last_name":"OConnell"},{"first_name":"Douglas","last_name":"Grant"},{"first_name":"Jennifer","last_name":"Whalen"},{"first_name":"Michael","last_name":"Hartstein"},{"first_name":"Pat","last_name":"Fay"},{"first_name":"Susan","last_name":"Mavris"},{"first_name":"Hermann","last_name":"Baer"},{"first_name":"Shelley","last_name":"Higgins"},{"first_name":"William","last_name":"Gietz"}];

const products = [{"_id":{"$oid":"6174cec4c64fa7f96e002ed4"},"name":"Think Center","code":"PC01","price":{"$numberInt":"999"},"category":"Computing","brand":"Lenovo","description":"CPU 3.2GHz, RAM 32GB, HDD 1TB","warranty":{"$numberInt":"100"},"quantity":{"$numberInt":"10"},"register_date":{"$date":{"$numberLong":"1635045060118"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6176f5606a213cf8e700bd50"},"name":"Power Supply","code":"pow02","price":{"$numberInt":"20"},"category":"Engineering","brand":"Panasonic","description":"500WATTS, 4A","warranty":{"$numberInt":"30"},"quantity":{"$numberInt":"5"},"register_date":{"$date":{"$numberLong":"1635186016424"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b1ea47578e53e0975984"},"name":"Foldsack No. 1 Backpack, Fits 15 Laptops","code":"Foldsack","price":{"$numberDouble":"109.95"},"category":"men's clothing","brand":"Fjallraven","description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","warranty":{"$numberInt":"90"},"quantity":{"$numberInt":"120"},"register_date":{"$date":{"$numberLong":"1635299818739"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b23047578e53e097598d"},"name":"Mens Casual Premium Slim Fit T-Shirts","code":"shirt","price":{"$numberDouble":"22.3"},"category":"men's clothing","description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","warranty":{"$numberInt":"60"},"quantity":{"$numberInt":"259"},"register_date":{"$date":{"$numberLong":"1635299888837"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b26047578e53e0975996"},"name":"Mens Cotton Jacket","code":"jacket","price":{"$numberDouble":"55.99"},"category":"men's clothing","description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","warranty":{"$numberInt":"60"},"quantity":{"$numberInt":"500"},"register_date":{"$date":{"$numberLong":"1635299936907"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b2a847578e53e097599f"},"name":"Mens Casual Slim Fit","code":"fit","price":{"$numberDouble":"15.99"},"category":"men's clothing","description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","warranty":null,"quantity":{"$numberInt":"430"},"register_date":{"$date":{"$numberLong":"1635300008656"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b2a847578e53e097599f"},"name":"Mens Casual Slim Fit","code":"fit","price":{"$numberDouble":"15.99"},"category":"men's clothing","description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","warranty":null,"quantity":{"$numberInt":"430"},"register_date":{"$date":{"$numberLong":"1635300008656"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b31e47578e53e09759cd"},"name":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","code":"bracelet","price":{"$numberInt":"695"},"category":"jewelery","description":"\"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","warranty":null,"quantity":{"$numberInt":"400"},"register_date":{"$date":{"$numberLong":"1635300126756"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b35247578e53e09759d6"},"name":"Solid Gold Petite Micropave","code":"micropave","price":{"$numberInt":"168"},"category":"jewelery","description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","warranty":null,"quantity":{"$numberInt":"70"},"register_date":{"$date":{"$numberLong":"1635300178557"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b89c47578e53e0975b2b"},"name":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","code":"raincoat1","price":{"$numberDouble":"39.99"},"category":"women's clothing","description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","warranty":null,"quantity":{"$numberInt":"679"},"register_date":{"$date":{"$numberLong":"1635301532948"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b86b47578e53e0975b22"},"name":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","code":"jacket3","price":{"$numberDouble":"29.95"},"category":"women's clothing","description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","warranty":null,"quantity":{"$numberInt":"340"},"register_date":{"$date":{"$numberLong":"1635301483529"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b7ee47578e53e0975ae6"},"name":" Women's 3-in-1 Snowboard Jacket Winter Coats","code":"jacket2","price":{"$numberDouble":"56.99"},"category":"women's clothing","brand":"BIYLACLESEN","description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","warranty":null,"quantity":{"$numberInt":"235"},"register_date":{"$date":{"$numberLong":"1635301358237"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b7ab47578e53e0975aca"},"name":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED","code":"monitor","price":{"$numberDouble":"999.99"},"category":"Computing","brand":"Samsung","description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","warranty":null,"quantity":{"$numberInt":"140"},"register_date":{"$date":{"$numberLong":"1635301291556"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b74347578e53e0975aae"},"name":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","code":"screen","price":{"$numberInt":"599"},"category":"Computing","brand":"Acer","description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","warranty":null,"quantity":{"$numberInt":"250"},"register_date":{"$date":{"$numberLong":"1635301187518"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b5ed47578e53e0975a62"},"name":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","code":"hdd2","price":{"$numberInt":"114"},"category":"Computing","brand":"Western Digital","description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","warranty":null,"quantity":{"$numberInt":"400"},"register_date":{"$date":{"$numberLong":"1635300845799"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b55f47578e53e0975a49"},"name":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","code":"ssd2","price":{"$numberInt":"109"},"category":"Computing","description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","warranty":null,"quantity":{"$numberInt":"319"},"register_date":{"$date":{"$numberLong":"1635300703154"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b4a347578e53e0975a30"},"name":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","code":"ssd1","price":{"$numberInt":"109"},"category":"Computing","brand":"SanDisk","description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","warranty":null,"quantity":{"$numberInt":"470"},"register_date":{"$date":{"$numberLong":"1635300515131"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b42947578e53e09759f1"},"name":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","code":"hdd1","price":{"$numberInt":"64"},"category":"Computing","description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","warranty":null,"quantity":{"$numberInt":"203"},"register_date":{"$date":{"$numberLong":"1635300393922"}},"__v":{"$numberInt":"0"},"brand":"Western Digital","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b3ac47578e53e09759e8"},"name":"Pierced Owl Rose Gold Plated Stainless Steel Double","code":"steel double","price":{"$numberDouble":"10.99"},"category":"jewelery","description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","warranty":null,"quantity":{"$numberInt":"100"},"register_date":{"$date":{"$numberLong":"1635300268687"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b37247578e53e09759df"},"name":"White Gold Plated Princess","code":"princess","price":{"$numberDouble":"9.99"},"category":"jewelery","description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","warranty":null,"quantity":null,"register_date":{"$date":{"$numberLong":"1635300210564"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b35247578e53e09759d6"},"name":"Solid Gold Petite Micropave","code":"micropave","price":{"$numberInt":"168"},"category":"jewelery","description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","warranty":null,"quantity":{"$numberInt":"70"},"register_date":{"$date":{"$numberLong":"1635300178557"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b31e47578e53e09759cd"},"name":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","code":"bracelet","price":{"$numberInt":"695"},"category":"jewelery","description":"\"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","warranty":null,"quantity":{"$numberInt":"400"},"register_date":{"$date":{"$numberLong":"1635300126756"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b2a847578e53e097599f"},"name":"Mens Casual Slim Fit","code":"fit","price":{"$numberDouble":"15.99"},"category":"men's clothing","description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","warranty":null,"quantity":{"$numberInt":"430"},"register_date":{"$date":{"$numberLong":"1635300008656"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b26047578e53e0975996"},"name":"Mens Cotton Jacket","code":"jacket","price":{"$numberDouble":"55.99"},"category":"men's clothing","description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","warranty":{"$numberInt":"60"},"quantity":{"$numberInt":"500"},"register_date":{"$date":{"$numberLong":"1635299936907"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b23047578e53e097598d"},"name":"Mens Casual Premium Slim Fit T-Shirts","code":"shirt","price":{"$numberDouble":"22.3"},"category":"men's clothing","description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","warranty":{"$numberInt":"60"},"quantity":{"$numberInt":"259"},"register_date":{"$date":{"$numberLong":"1635299888837"}},"__v":{"$numberInt":"0"},"brand":"","bus_id":"105754304227647885464"},
{"_id":{"$oid":"6178b94747578e53e0975b82"},"name":"Women's Solid Short Sleeve Boat Neck V ","code":"short1","price":{"$numberDouble":"9.85"},"category":"women's clothing","brand":"MBJ","description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","warranty":null,"quantity":{"$numberInt":"130"},"register_date":{"$date":{"$numberLong":"1635301703859"}},"__v":{"$numberInt":"0"},"bus_id":"105754304227647885464"}];

const vendors = [

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

];

let vendors_amt = [
    {
        "name":"Michelle Robbin",
        "amt":0
    },
    {
        "name":"Carlos Snares",
        "amt":0
    },
    {
        "name":"Enric Dosio",
        "amt":0
    },
    {
        "name":"Jhon Snares",
        "amt":0
    },
    {
        "name":"Joseph Dosni",
        "amt":0
    },
    {
        "name":"Zanifer Emily",
        "amt":0
    },
    {
        "name":"Kuleswar Sitaraman",
        "amt":0
    },
    {
        "name":"Henrey Gabriel",
        "amt":0
    },
    {
        "name":"Alex Manuel",
        "amt":0
    },
    {
        "name":"George Mardy",
        "amt":0
    },
    {
        "name":"Mario Saule",
        "amt":0
    },
    {
        "name":"Alina Snappy",
        "amt":0
    },
    {
        "name":"Maria Foster",
        "amt":0
    },
    {
        "name":"James Hoog",
        "amt":0
    },
    {
        "name":"Nail Knite",
        "amt":0
    },
    {
        "name":"Lauson Hen",
        "amt":0
    },
    {
        "name":"Pit Alex",
        "amt":0
    },
    {
        "name":"Mc Lyon",
        "amt":0
    },
    {
        "name":"Lucida Adam",
        "amt":0
    },
    {
        "name":"Aanya Lakshmi",
        "amt":0
    }
];

let products_amt = [

{
"name":"Think Center",
"amt":0,
"units":0
},
{
"name":"Power Supply",
"amt":0,
"units":0
},
{
"name":"Foldsack No. 1 Backpack, Fits 15 Laptops",
"amt":0,
"units":0
},
{
"name":"Mens Casual Premium Slim Fit T-Shirts",
"amt":0,
"units":0
},
{
"name":"Mens Cotton Jacket",
"amt":0,
"units":0
},
{
"name":"Mens Casual Slim Fit",
"amt":0,
"units":0
},
{
"name":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
"amt":0,
"units":0
},
{
"name":"Solid Gold Petite Micropave",
"amt":0,
"units":0
},
{
"name":"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
"amt":0,
"units":0
},
{
"name":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
"amt":0,
"units":0
},
{
"name":" Women's 3-in-1 Snowboard Jacket Winter Coats",
"amt":0,
"units":0
},
{
"name":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
"amt":0,
"units":0
},
{
"name":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
"amt":0,
"units":0
},
{
"name":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
"amt":0,
"units":0
},
{
"name":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
"amt":0,
"units":0
},
{
"name":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
"amt":0,
"units":0
},
{
"name":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
"amt":0,
"units":0
},
{
"name":"Pierced Owl Rose Gold Plated Stainless Steel Double",
"amt":0,
"units":0
},
{
"name":"White Gold Plated Princess",
"amt":0,
"units":0
},
{
"name":"Women's Solid Short Sleeve Boat Neck V ",
"amt":0,
"units":0
}

];

const cities = [

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

];

let cities_amt = [

{
"name":"Roma",
"amt":0
},
{
"name":"Paris",
"amt":0
},
{
"name":"Tokyo",
"amt":0
},
{
"name":"Hiroshima",
"amt":0
},
{
"name":"Boston",
"amt":0
},
{
"name":"San Francisco",
"amt":0
},
{
"name":"Seattle",
"amt":0
},
{
"name":"Montreal",
"amt":0
},
{
"name":"Beijing",
"amt":0
},
{
"name":"Bombay",
"amt":0
},
{
"name":"Sydney",
"amt":0
},
{
"name":"Singapore",
"amt":0
},
{
"name":"London",
"amt":0
},
{
"name":"Munich",
"amt":0
},
{
"name":"Sao Paulo",
"amt":0
},
{
"name":"Bogota",
"amt":0
},
{
"name":"Mexico City",
"amt":0
},
{
"name":"Buenos Aires",
"amt":0
},
{
"name":"Istambul",
"amt":0
},
{
"name":"Guangzhou",
"amt":0
}

];

const months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
