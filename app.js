const https = require("https");

function getApi() {
    const request = https.get(
        "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=99a67d91-b057-4b40-844f-f9774e36f62e",
        (response) => {
            console.dir(response);
        }
    );
}
getApi();