function RaspberryAsk(url, data) {
    return new Promise((resolve, reject) => {
        url = "http://127.0.0.1:5000/" + url;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true); // делаем запрос асинхронным
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