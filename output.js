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
function refreshSelect(){
		document.getElementById("keySelect").innerHTML="";
		var keyCount =  localGet("keyCount");
		var innerText,keyText,temp;
		for(var i=0;i<keyCount;i++){
				keyText = localGet("key"+i);
				temp = keyText.indexOf("/");
				keyText = keyText.substring(0,temp);
				temp = document.createElement("option");
				temp.innerHTML = keyText;
				temp.value = i;
				document.getElementById("keySelect").appendChild(temp);
		}
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
		if(name=="key"){
				var keyCount = localGet("keyCount");
				localStorage.setItem(name,value);
				localStorage.setItem("key"+keyCount,value);
				localStorage.setItem("keyCount",keyCount+1);
		}else localStorage.setItem(name,value);
}
function localKey(value){
		localStorage.setItem("key",value);
}
function localGet(name){
		if(name=="keyCount"){
				var temp = parseInt(localStorage.getItem("keyCount"));
				if(isNaN(temp))return 0;
				else return temp;
		}
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