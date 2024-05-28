// Chapter 14 - 16:
//Question 1:

var arr = []

// //Question 2:

var arr = new Array()

// //Question 3:

var arr = ["karachi" , "lahore" , "islamabad" ]

// //Question 4:

var arr = [2 , 4 , 6 , 8 , 10]

// //Question 5:

var arr = [true , false , true , true , false]

// //Question 6:

var arr = ["karachi" , 25 , true]

//Question 7:

var Qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCom" , "MS" , "M.Phil" , "Phd"]
document.write("<h1>Qualification: </h1>")

for(i=1 ; i<=Qualification.length ; i++)
{
    document.write("<br>"+i+")"+Qualification[i-1])
}

//Question 8:

var name1 = [ 'Ali' , 'Hassan' , 'Komal']
var marks = [ 350 , 468 , 488 ]
for (var i=0 ; i<3 ; i++)
{
    document.write("Score of "+name1[i]+" is "+marks[i]+". Percentage is "+(((marks[i])/500)*100)+" %<br>")
}

// Question 9:

var colors = ["Red" , "Blue" , "Green"]
document.write("<h3>  COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


var new_color = prompt("Enter color to add at beginning of list: ")
colors.unshift(new_color)
document.write("<h3> a) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color1 = prompt("Enter color to add at end of list: ")
colors.push(new_color1)
document.write("<h3> b) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color2 = prompt("Enter another color to add at start of list: ")
new_color3 = prompt("Enter another color to add at start of list: ")
colors.unshift(new_color2,new_color3)
document.write("<h3> c) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.shift()
document.write("<h3> d) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.pop()
document.write("<h3> e) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

new_color4 = prompt("Enter a color to add in the list: ")
new_index = +prompt("At which no. you want to add color: ")
colors.splice( new_index,0,new_color4 )
document.write("<h3> f) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

var start = +prompt("Enter starting index: ")
var count = +prompt("Enter number of elements to be deleted: ")
colors.splice( start, count )
document.write("<h3> g) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

// Question 10:

var num = [230, 450 , 670 , 100 , 900, 500]
document.write("Score of students: "+num)
num.sort()
document.write("<br>Ordered Score of students: "+num)

// Question 11:

var cities = ["khi" , "lah" , "isl" , "que" , "sibi"]
var selected_cities = cities.slice(1,3)
document.write("Cities are: <br>"+cities+"<br>Selected cities are: <br>"+selected_cities)

// Question 12:

var arr = ["this","is","my","cat"]
var str = arr.join(" ")
document.write("Array:<br>"+arr)
document.write("<br>String:<br>"+str)

// Question 13:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.shift();
document.write("<br>Out:<br>"+out)
}

// Question 14:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.pop();
document.write("<br>Out:<br>"+out)
}




