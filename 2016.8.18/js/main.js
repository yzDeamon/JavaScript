/**
 * Created by Administrator on 2016/8/18 0018.
 */
window.onload=function(){
    var oLi = document.getElementById("Li-txt");
    var oTxt = document.getElementById("text");
    var oBtn = document.getElementById("btn");
    var oName = document.getElementById("name");
    oName.onclick=function(){
		if(this.innerHTML=="猴子："){
		    this.innerHTML="唐僧说："
		}else{
		    this.innerHTML="猴子：";
		}
    };
    oBtn.onclick=function(){
	   if(oTxt.value==""){
		  alert("写点东西吧")
	   }else{
		  oLi.innerHTML = "<div class='Li-txt-a'>" + oName.innerHTML + oTxt.value + "</div><br>"+oLi.innerHTML;
		  oTxt.value="";
	   }
    };

}
;