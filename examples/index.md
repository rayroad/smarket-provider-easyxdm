# Demo

---

## HTML

````html
<html>
	<head>Title</head>
	<body>
		<script src="spm_modules/seajs/seajs/2.2.0/sea.js"></script>
		<script src="spm_modules/seajs/seajs-text.js"></script>
		<script>
			seajs.config({
				base: 'http://222.222.49.241:3371/spm_modules/',
				alias: {
					'jquery': 'jquery/2.1.3/jquery.js',
					'smarket-provider-webapi' : 'smarket-provider-webapi/0.0.1/smarketProviderWebapi'
				}
			});
			seajs.use('./main');
		</script>

	</body>
</html>

````


## main.js

````javascript
define(function(require) {
	var $=require('jquery');
	var b=$('body');

	var smarketProviderWebapi = require('smarket-provider-webapi');
	var myapi=new smarketProviderWebapi();
	var opts={
		id : '2049',
		widthl : '0',
		widths : '151',
		isNew : 'true',
		allspeaker : 'true'
	};
	
	myapi.request("meeting",opts,success,erro);
	myapi.request("meeting",opts,success,null);
	myapi.request("meeting",opts,null,null);

	function success(data){
		console.log(data);
	};     

	function erro(data){
		console.log(data);
	}; 

});
````
