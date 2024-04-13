function RefreshBearer(){
	let finalJson={
			'application_key': "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6",
			'id_city': null,
			'password': localStorage.UPass,
			'username': localStorage.ULog}
	HeyJournal('api/v2/auth/login',finalJson, LoginVal).then(res => {
		if (res.access_token !== null){
			localStorage.setItem('ULog',LoginVal)
			localStorage.setItem('UPass',Pass)
			localStorage.setItem('LastBearer',res.access_token)
		}
	}).catch(err => {console.error(err)})
}
setInterval(RefreshBearer, 240000)



let thisJson = {}
HeyJournal('api/v2/dashboard/chart/average-progress', thisJson, 'GET', {'Bearer'" })