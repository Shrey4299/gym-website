// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');

// // menu.onclick = () =>{
// //     menu.classList.toggle('fa-times');
// //     navbar.classList.toggle('active');
// // };

document.getElementById("header-logo").addEventListener("click", myFunction);

function myFunction() {
  first.innerHTML = "<b> harry is idiot </b>";
  console.log("Clicked on Container");
}

function displayChange() {
  document.getElementsByClassName("container").innerHTML =
    "<b>i am very goo boy</b>";
}

// function fuck() {
//   alert("this website is made by shreyansh dewangan ");
// }

function uppercase() {
  var x = document.getElementById("fname");

  x.value = x.value.toUpperCase();
}


function mOut(){
    console.log(" bahar")
}
function mOver(){
    console.log("andar")
}

var x = document.getElementById("myBtn3") ;

x.addEventListener("click",clicked);
x.addEventListener("mouseover",over);
x.addEventListener("mouseout",out);

function clicked()
{
  document.getElementById("demo").innerHTML += "clicked" ;

}
function over()
{
  document.getElementById("demo").innerHTML += "over</br>" ;

}
function out()
{
  document.getElementById("demo").innerHTML += "out</br>" ;

}

setInterval(clicked,000);