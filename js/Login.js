function LoginScript(){
	let LoginButton = document.getElementById("LoginBtn")
	let OriginalButtonColor = LoginButton.style.background
	//LoginButton.setAttribute("disabled",'true')
	LoginButton.style.background='#2e2e2e';
	LoginButton.style.cursor='default';
	
	
	let LoginVal = document.getElementById("LoginField").value
	let Pass = document.getElementById("PasswordField").value
	
	
	let finalJson={
		'application_key': "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6",
		'id_city': null,
		'password': Pass,
		'username': LoginVal}

	window.frames[0].frameElement.contentWindow.GetBearer(Pass, LoginVal).then(res => {console.log(res)})

}