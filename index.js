var axios = require('axios');
var Router = require('next/router');

const urlTosideLink = "https://link.tosidestudio.com"

module.exports = {
    
    getLink: async function getLink(secretKey, linkId) {
        let infoLink = {}
        await axios({
            method: 'post',
            url: urlTosideLink+':5008/api/v1/url/info',
            headers: {
                'Content-Type': 'application/json',
                'secretkey': secretKey
            },
            data: {
                id: linkId
            }
        }).then(function (response) {
            infoLink = response
        });
        return infoLink
    },
    generateLink: async function generateLink (secretKey, urlcomplete) {
        let infoLink = {}
        await axios({
            method: 'post',
            url: urlTosideLink+':5008/api/v1/url/generate',
            headers: {
                'Content-Type': 'application/json',
                'secretkey': secretKey
            },
            data: {
                urlcomplete: urlcomplete
            }
        }).then(function (response) {
            infoLink = response
        });
        return infoLink
    }

}