const arrow =document.querySelector('.arrow');
const navbar=document.querySelector('ul');
arrow.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
})


// college

const searchFun=()=>{
	let filter=document.getElementById('myInput').value.toUpperCase();
	let myTable=document.getElementById('myTable');
	let tr=myTable.getElementsByTagName('tr');
	for(var i=0;i<tr.length;i++){
		let td=tr[i].getElementsByTagName('td')[0];
		if(td){
			let textvlaue=td.textContent || td.innerHTML;
			if(textvlaue.toUpperCase().indexOf(filter)> -1){
				tr[i].style.display="";
			}else{
				tr[i].style.display="none";
			}
		}
	}
}

// var db=opendatabase("courseDB","1.0","courseDB",65535);
// $(function()

// 	$("#create").click(function(){
// 		db.transaction(function(transaction){
// 			var sql="CREATE TABLE course"+"(couse VARCHAR(100) NOT NULL ,"+
// 			                                 "college VARCHAR(100) NOT NULL,"+
// 											 "Contact INTEGER NOT NULL)";
// 			transaction.executeSql(sql,undefined,
// 				function(){
// 					alert("Data is created succefully");

// 				},function(){
// 					alert("Tale is already eing created");

// 				})
				
		// });
	// })
	
// );


// Register

 const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

// feedback form




const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${selectedRating}
        We'll use your feedback to improve our customer support
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}



