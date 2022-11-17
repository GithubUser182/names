namestudentarray=[]

function submit(){

var name1=document.getElementById("name_student_1").value
var name2=document.getElementById("name_student_2").value
var name3=document.getElementById("name_student_3").value
var name4=document.getElementById("name_student_4").value

namestudentarray.push(name1)
namestudentarray.push(name2)
namestudentarray.push(name3)
namestudentarray.push(name4)

console.log(namestudentarray)

document.getElementById("displayname").innerHTML=namestudentarray
document.getElementById("submit_btn").style.display="none"
document.getElementById("sort_btn").style.display="inline-block"
}

function sort()
{
    namestudentarray.sort()
    console.log(namestudentarray)
    document.getElementById("displayname").innerHTML=namestudentarray
    document.getElementById("sort_btn").style.display="none"
}