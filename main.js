var namesarray= [];
function submit()
{
    var namea1= document.getElementById("name1").value
    var namea2= document.getElementById("name2").value
    var namea3= document.getElementById("name3").value
    var namea4= document.getElementById("name4").value
    var namea5= document.getElementById("name5").value
    var namea6= document.getElementById("name6").value
    var namea7= document.getElementById("name7").value

namesarray.push(namea1)
namesarray.push(namea2)
namesarray.push(namea3)
namesarray.push(namea4)
namesarray.push(namea5)
namesarray.push(namea6)
namesarray.push(namea7)
console.log(namesarray)
document.getElementById("div2").innerHTML=namesarray
}
function sorting()
{
namesarray.sort()
console.log(namesarray)
document.getElementById("div2").innerHTML=namesarray
}
function searching()
{
    var s= document.getElementById("i1").value
    var found=0;
    var j;
    for(j=0; j<namesarray.length; j++)
    {
        if(s==namesarray[j]){
            found=found+1;
        }
    }
    document.getElementById("div3").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s"); 
}