//Presense fast load
document.getElementById('PresenceValue').style.width = localStorage.PresenceValue
document.querySelector('.Presence h4').textContent = ' Посещаемость: '+localStorage.PresenceValue



//Marks fast load
document.getElementById('MarksValue').style.width = ((100/12)*(Number(localStorage.MarksValue)))+'%'
document.querySelector('.Marks h4').textContent = ' Оценки: '+localStorage.MarksValue

