/**
 * Created by Administrator on 2016/8/18 0018.
 */
$(document).ready(function(){
    var arr1=new Array();
   $(".main li").each(function(){
	  $(this).click(function(){
		var stmp= $(this).children("span").text();
		 var oNe=parseInt(stmp.slice(0,1));
		 var tWo=parseInt(stmp.slice(1,2));
		 var x=$("li").length;
		 var arr2=new Array();
		 arr2[0]=oNe;
		 arr2[1]=tWo;
		 arr1.push(arr2);
		 console.log(arr1);
	  });
   });
});




