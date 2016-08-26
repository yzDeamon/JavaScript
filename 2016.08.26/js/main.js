/**
 * Created by Administrator on 2016/8/25 0025.
 */
$(document).ready(function(){
    var aUsername=false;
    var aPassword=false;
    $("#username").blur(function(){
	   var str=$("#username").val();
	   var reg=/^[a-zA-Z\u4e00-\u9fa5 ]{3,7}$/;
	   //console.log(str.length);
	   if(!reg.exec(str)){
		  $("#true").hide();
		  $("#false").show();
		  $(".bounced-news").show();
		  aUsername=false;
	   }else{
		  $("#false").hide();
		  $("#true").show();
		  $(".bounced-news").hide();
		  aUsername=true;
	   }
    });//表单登陆用户名验证
    $("#password").blur(function(){
	   var stra=$("#password").val();
	   var rega=/^[\d]{6,20}$/;
	   //console.log(str.length);
	   if(!rega.exec(stra)){
		  $("#true-a").hide();
		  $("#false-a").show();
		  $(".bounced-news-a").show();
		  aPassword=false;
	   }else{
		  $("#false-a").hide();
		  $("#true-a").show();
		  $(".bounced-news-a").hide();
		  aPassword=true;
	   }
    });//表单登陆用户名密码
    //提交按钮,所有验证通过方可提交
    $("#send").click(function(){
	   if(aUsername==true&&aPassword==true){
		  var oTxt=$("#password").val();
		  var aMd5=$.md5(oTxt);//md5加密
		  $("#password").val(aMd5);
		  $("#register").submit();
	   }else{
		  return false;
	   }
    });
});