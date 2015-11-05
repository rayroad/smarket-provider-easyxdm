var SmarketProvider=require("smarket-provider");
var easyxdm=require("easyxdm");
var $=require('jquery');
var json=require('json');

var smarketProviderEasyXdm=SmarketProvider.extend(
  {
    attrs: {
      //WebApi的基地址
      type:'easyxdm'
    },
    //Get方法
    request : function(funcName,headers,pars,successCallBack,erroCallBack) {
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
        ajaxGet(this.get('config').api.baseUrl,this.get('config').api.corsUrl,funcName,headers,pars,successCallBack,erroCallBack,this);
      }
      return cache;
    }
  }

);


module.exports = smarketProviderEasyXdm;

//通过jquery提供的方法获取数据
function ajax(options) {
  var xhr = new easyxdm.Rpc({
      remote: options.corsUrl
  }, {
      remote: {
          request: {}
      }
  })
  xhr.request({
      url: options.url,
      method: options.type,
      headers: options.header,
      data: options.data
  }, function(response) {
      if(options.success)
      {
        options.success(response.data);
      }
  },function(response){
      if(options.erro)
      {
        options.erro(response);
      }
  })
}
//将接收到的参数封闭成 Jquery Ajax 请求需要的格式
function ajaxGet(url,corsUrl,funcName,headers,pars,successCallBack,erroCallBack,context)
{
  var options={
    corsUrl: corsUrl,
    url: url+funcName,
    type:'get',
    header:headers,
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