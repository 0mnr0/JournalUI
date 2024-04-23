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

	HeyJournal('api/v2/auth/login',finalJson, 'POST', 'null').then(res => {
		if (res.access_token !== null){
			localStorage.setItem('ULog',LoginVal)
			localStorage.setItem('UPass',Pass)
			localStorage.setItem('LastBearer',res.access_token)
			document.body.style.filter = 'brightness(0)';
			console.log(res)
			setTimeout(function() {
				document.location = document.location.href.replace('Login.html', 'InAccount.html');
			}, 500)
		}
	}).catch(err => {console.error(err)})
}