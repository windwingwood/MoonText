var outputTemp;
function output(String){
		outputTemp = document.createElement("li");
		outputTemp.innerHTML = String;
		document.getElementById("output").appendChild(outputTemp);
}
function error(String){
		outputTemp = document.createElement("li");
		outputTemp.innerHTML = String;
		outputTemp.className = "error";
		document.getElementById("output").appendChild(outputTemp);
}
function clean(){
		document.getElementById("output").innerHTML="";
}
function clipSet(t){
		if(navigator.userAgent.indexOf("MSIE") == -1){
				alert("该浏览器不支持！");
		}
		else {
				window.clipboardData.setData("text",t);
				return 1;
		}
		return 0;
}
function clipGet(){
		if(navigator.userAgent.indexOf("MSIE") == -1){
				alert("该浏览器不支持！");
		}
		else {
				return window.clipboardData.getdata("text");
		}
		return 0;
}
function localSet(name, value){
		localStorage.setItem(name,value);
}
function localGet(name){
		return localStorage.getItem(name);
}
function cookieSet(name, value){
		var date = new Date();
		date.setYear(date.getFullYear()+1);
		document.cookie = name+"="+value+"; expires="+date.toGMTString();
}
function cookieGet(name){
		var start = document.cookie.indexOf(name+"=");
		if(start!=-1){
				start += name.length +1;
				var end = document.cookie.indexOf(";",start);
				if(end==-1)end = document.cookie.length;
				return document.cookie.substring(start,end);
		}
		return "";
}