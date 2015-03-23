var expect = require('expect.js');
var smarketProviderEasyXdm = require('../smarketProviderEasyXdm');

describe('smarket-provider-easyxdm', function() {

	it('normal usage', function() {
		var myapi=new smarketProviderEasyXdm({'config':{
			api:{
  "baseUrl": "http://api.ievents.com.cn/api/"
},
			'cache':{'dataCache':'true'},
			'log':{'isLog':'true','logType':'local'}
		}});
		var opts={
			id : '2049',
			widthl : '0',
			widths : '151',
			isNew : 'true',
			allspeaker : 'true'
		};
		var res1=myapi.request("meeting",opts,success,erro);
		console.log(res1);
		myapi.request("meeting",opts,success);
		myapi.request("meeting",opts);


	});

});

function success(data){
	console.log('success');
}; 	

function erro(data){
	console.log('erro');
}; 