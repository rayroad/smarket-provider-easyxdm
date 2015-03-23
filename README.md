# smarket-provider-webapi [![spm version](http://spmjs.io/badge/smarket-provider-webapi)](http://spmjs.io/package/smarket-provider-webapi)

---

普通 WebAPI 接口访问模块

## Install

```
$ spm install smarket-provider-webapi --save
```

## Usage

```js

seajs.config({
				base: 'http://222.222.49.241:3371/spm_modules/',
				alias: {
					'jquery': 'jquery/2.1.3/jquery.js',
					'smarket-provider-webapi' : 'smarket-provider-webapi/0.0.1/smarketProviderWebapi'
				}
			});
			seajs.use(['smarket-provider-webapi/0.0.1/smarketProviderWebapi'],function(WebApi){
              
              var myapi=new WebApi({
  "baseUrl": "http://api.ievents.com.cn/api/"
});
	var opts={
		id : '2049',
		widthl : '0',
		widths : '151',
		isNew : 'true',
		allspeaker : 'true'
	};
              
    myapi.request("meeting",opts,success,erro);
	//myapi.request("meeting",opts,success,null);
	//myapi.request("meeting",opts,null,null);

	function success(data){
      console.log('数据加载成功！');
		console.log(data);
	};     

	function erro(data){
      console.log('数据加载失败！');
		console.log(data);
	}; 
              
            });
			

```
