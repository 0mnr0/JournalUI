//Presense fast load
if (localStorage.PresenceValue !== undefined){
document.getElementById('PresenceValue').style.width = localStorage.PresenceValue
document.querySelector('.Presence h4').textContent = ' Посещаемость: '+localStorage.PresenceValue
}


//Marks fast load
if (localStorage.MarksValue !== undefined){
document.getElementById('MarksValue').style.width = ((100/12)*(Number(localStorage.MarksValue)))+'%'
document.querySelector('.Marks h4').textContent = ' Оценки: '+localStorage.MarksValue
}


//UserAcc fast load
if (localStorage.UserAcc !== undefined){
	var res = JSON.parse(localStorage.UserAcc)
	if (res.status !== 401){
		if (res.photo !== undefined)document.getElementById('UserImage').src= res.photo
		document.getElementById('UserName').textContent= res.full_name
		document.getElementById('LearnPoints0').textContent=res.gaming_points[0].points
		document.getElementById('LearnPoints1').textContent=res.gaming_points[1].points
		document.getElementById('LearnSumPoints').textContent=(res.gaming_points[0].points) + (res.gaming_points[1].points)
	}
}