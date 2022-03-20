let openContainer=document.querySelector(".login-container");
let openpopup=document.querySelector(".login-popup");
let close=document.querySelector("#cross_logo");
function openPopup(){
	openContainer.classList.add("active");
	openpopup.classList.add("active");
}
function closePopup(){
	openContainer.classList.remove("active");
	openpopup.classList.remove("active");
}
// function openPopup(){
// 	open.classList.remove("active");
// }