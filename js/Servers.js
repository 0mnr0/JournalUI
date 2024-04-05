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
			includeJson: JSON.stringify(data)
		}
		if (ProxyEnabled){
			url=LocalProxySetting.direction
			askMethod="POST";
			data = LocalProxySetting

		}
		
        var xhr = new XMLHttpRequest();
        xhr.open(askMethod, url, true);
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
