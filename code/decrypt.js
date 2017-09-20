function MoonDecrypt(base){
		base = moonText(base);
		if(base==-1)return -1;
		var length = base.length;
		var i = 0;
		var codeArray = [];
		for(i=0;i<length;i++) codeArray.push(base.charCodeAt(i));
		var dt = groupBreak(codeArray);
		var DTL = dt.length;
		var dt3 = groupBreakV2(codeArray,orderBuild(DTL));
		orderChange(dt3);
		//moveFix
		for(i=0;i<DTL;i++) codeFix(dt3[i],i);
		codeArray = [];
		for(i=0;i<DTL;i++) codeArray = codeArray.concat(dt3[i]);
		codeArray = deleteFix(codeArray);
		var deString = "";
		length = codeArray.length;
		for(i=0;i<length;i++) deString = deString + String.fromCharCode(codeArray[i]);
		output("解码完成");
		return deString;
}

function moonText(str){
		var i = str.indexOf("/");
		var head = str.slice(0,i);
		var tail = str.slice(str.length-2,str.length);
		var index = tail.indexOf("/");
		if(head!=name || index==-1){
				error("格式错误无法解码");
				return -1;
		}
		else return str.slice(i+1,str.length-2+index);
}

function deleteFix(array){
		var i = array.length-1;
		for(;i>=0;i--) {
				if(array[i]!=127) break;
		}
		return array.slice(0, i+1);
}

function codeFix(array, p){
		var a = mixValue(p);
		for(var i=0;i<array.length;i++) array[i]-=a;
}

function groupBreakV2(array, groupArray){
		var gLength = groupArray.length;
		var g1 = 0;
		var g2 = [];
		for(var i=0;i<gLength;i++){
				g2.push(array.slice(g1,g1+groupArray[i]));
				g1+=groupArray[i];
		}
		return g2;
}

function orderBuild(len){
		var groupArray = [];
		for(var i=0;i<len;i++) groupArray.push(group[i%6]);
		orderChange(groupArray);
		return groupArray;
}