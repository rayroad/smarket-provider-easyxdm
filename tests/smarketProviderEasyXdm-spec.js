var expect = require('expect.js');
var smarketProviderEasyxdm = require('../smarketProviderEasyXdm');

describe('smarket-provider-easyxdm', function() {
  it('normal usage', function() {
    var myapi=new smarketProviderEasyxdm({
        'cache':{'dataCache':'true'},
        'api':{
          "baseUrl": "http://api.kaihui.so/v1.39.4/api/",
          "corsUrl": "http://api.kaihui.so/v1.39.4/cors/index.html"
        },
        'log':{'isLog':'true','logType':'local'}
    });
    var headers = {CustomerID: "3"}
    var opts={eventId:64};
    var res1=myapi.request("Agenda",headers,opts,success,erro);
    console.log(res1);
    myapi.request("Agenda",headers,opts,success);
    myapi.request("Agenda",headers,opts);
  });
});

function success(data){
  console.log('success');
};

function erro(data){
  console.log('erro');
};