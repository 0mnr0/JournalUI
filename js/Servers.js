function RaspberryAsk(url, data) {
    return new Promise((resolve, reject) => {
        url = "http://127.0.0.1:5000/" + url;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
       
        xhr.onload = function() {
            if (xhr.status === 200 || xhr.status === 400) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    resolve(response);
                } catch (error) {
                    reject(new Error("Failed to parse server response: " + error.message));
                }
            } else {
                reject(new Error("Request failed with status: " + xhr.status));
            }
        };
        xhr.onerror = function() {
            reject(new Error("Request failed with an error"));
        };
        xhr.send(JSON.stringify(data));
    });
}

function HeyJournal(url, data, askMethod) {
    return new Promise((resolve, reject) => {
        url = "https://msapi.top-academy.ru/" + url;
		
		
		
		let LocalProxySetting = {// Will be ignored if 
			direction: 'http://127.0.0.1:3234',
			fetchUrl: url,
			reqMethod: askMethod,
			includeJson: data
		}
		if (ProxyEnabled){
			url=LocalProxySetting.direction
			askMethod="POST";
			data = LocalProxySetting

		}
		
        var xhr = new XMLHttpRequest();
        xhr.open(askMethod, url, true);
		xhr.setRequestHeader('Origin', 'Bearer null');
        xhr.setRequestHeader('Referer', 'Bearer null');
        xhr.setRequestHeader("Content-Type", "application/json");
       
        xhr.onload = function() {
            if (xhr.status === 200 || xhr.status === 400) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    resolve(response);
                } catch (error) {
                    reject(new Error("Failed to parse server response: " + error.message));
                }
            } else {
                reject(new Error("Request failed with status: " + xhr.status));
            }
        };
        xhr.onerror = function() {
            reject(new Error("Request failed with an error"));
        };
        xhr.send(JSON.stringify(data));
    });
}



var ProxyEnabled = false;


function GetBearer(pass, login){
    try{
        var Bearer = null;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://msapi.top-academy.ru/api/v2/auth/login');
        xhr.setRequestHeader('path', '/api/v2/auth/login');
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
        xhr.setRequestHeader('Accept-Language', 'ru_RU, ru');
        xhr.setRequestHeader('Authorization', 'Bearer null');
        xhr.setRequestHeader('Origin', 'Bearer null');
        xhr.setRequestHeader('Referer', 'Bearer null');
        xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('X-Referer', 'https://journal.top-academy.ru/');

        const requestBody = {
            "application_key": "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6",
            "id_city": null,
            "password": pass,
            "username": login
        }
        xhr.send(JSON.stringify(requestBody));


        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                Bearer=JSON.parse(xhr.responseText).access_token;
                UserCId=JSON.parse(xhr.responseText).city_data.id_city;
                var Status=JSON.parse(xhr.responseText).status;
                if (Status === "401" || Status === 401){GetBearer()}
                else{LoadedBearer=Bearer}
            }
        });

        setTimeout(function(){return (Bearer)} , 100)

    }catch(e){
        console.log("Failed To get Bearer: ",e);
        return -1;
    }
}