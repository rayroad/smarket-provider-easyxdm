var SmarketProvider=require("smarket-provider");
var $=require('jquery');
var json=require('json');

var smarketProviderEasyXdm=SmarketProvider.extend(
	{
		attrs: {
			//WebApi的基地址
			type:'easyxdm'
		},
		//Get方法
		request : function(funcName,pars,successCallBack,erroCallBack) {
			//缓存键
			var key=funcName+json.stringify(pars);
			//从本地存储中获取当前请求的缓存数据
			var cache=this.getCache(key);
			if(cache!=null)
			{
				//console.log(cache);
			}
			else
			{
				//从远程服务器加载数据
				ajaxGet(this.get('config').api.baseUrl,funcName,pars,successCallBack,erroCallBack,this);	
			}
			return cache;
		}
	}

);


module.exports = smarketProviderEasyXdm;

//通过jquery提供的方法获取数据
function ajax(options) {
	$.ajax({
		url: options.url,
		type:options.type,
		data:options.data,
		dataType : "jsonp",
		success : function(data){
			if(options.success)
			{
				options.success(data);
			}

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {			
			console.error(XMLHttpRequest.status);
			console.error(XMLHttpRequest.readyState);
			console.error(textStatus);  
			if(options.erro)
			{
				options.erro(textStatus);
			}
		}
	})
}
//将接收到的参数封闭成 Jquery Ajax 请求需要的格式
function ajaxGet(url,funcName,pars,successCallBack,erroCallBack,context)
{
	var options={
		url: url+funcName,
		type:'get',
		data:pars,
		dataType : "jsonp",
		erro: function(data){
			if(erroCallBack)
			{
				erroCallBack(data);	
			}

		},
		success: function(data){
			if(successCallBack)
			{
				//将从服务器获取的数据保存到本地缓存中
				var key=funcName+json.stringify(pars);
				context.setCache(key,data);
				successCallBack(data);	
			}

		}
	};
	ajax(options);
}