/**
 * Created by Administrator on 2016/8/18 0018.
 */
//$(document).ready(function(){
//    var arr1=new Array();
//   $(".main li").each(function(){
//	  $(this).click(function(){
//		var stmp= $(this).children("span").text();
//		 var oNe=parseInt(stmp.slice(0,1));
//		 var tWo=parseInt(stmp.slice(1,2));
//		 var x=$("li").length;
//		 var arr2=new Array();
//		 arr2[0]=oNe;
//		 arr2[1]=tWo;
//		 arr1.push(arr2);
//		 console.log(arr1);
//	  });
//   });
//});
window.onload=function(){
    var oPrev=document.getElementById("prev");
    var oNext=document.getElementById("next");
    var oNumber=document.getElementById("number");
    var oText=document.getElementById("text");
    var oImg=document.getElementById("img1");
    var arrImg=["img/1.jpg","img/2.png","img/3.jpg","img/4.jpg","img/5.jpg"];
    var arrTxt=["这是什么意思？","减肥吧","吃饱在减肥吧","来喝点下午茶吧","吃晚餐了"];
    var num = 0;
    function mytab(){
	   oNumber.innerHTML=num+1+'/'+arrTxt.length;
	   oText.innerHTML=arrTxt[num];
	   oImg.src = arrImg[num];
    }
    mytab();
    oNext.onclick = function(){
	   num ++;
	   if(num == arrTxt.length){
		  num=0;
	   }else{
		  mytab()
	   }
    };
    oPrev.onclick = function(){
	   num --;
	   if(num == -1){
		  num=arrTxt.length;
	   }else{
		  mytab()
	   }
    };



};



