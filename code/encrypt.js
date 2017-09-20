function codeMove(array){
			//位移参数x在0~15的范围
			//1.每个编码最多16位
			//2.为了消去另外16位，需要按位与 x&65535
			//3.为了取下移出的位，需要右移16位
}

function orderChange(array){
		var gc = array.length - groupChange;
		var changeTemp;
		for(var i=0;i<gc;i++){
				changeTemp = array[i];
				array[i] = array[i+groupChange];
				array[i+groupChange] = changeTemp;
				if((i+1)%groupChange==0)i+=groupChange;
		}
}

function codeMix(array, p){
		var a = mixValue(p);
		for(var i=0;i<array.length;i++) array[i]+=a;
}

function mixValue(a){
		var a = a%mixM;
		switch(a){
			case 0:a = mixX+mixY;break;
			case 1:a = mixX-mixY;break;
			case 2:a = mixX+mixZ;break;
			case 3:a = mixX-mixZ;break;
			case 4:a = mixY+mixZ;break;
			case 5:a = mixY-mixZ;break;
			case 6:a = mixX*mixY;break;
			case 7:a = mixX*mixZ;break;
			case 8:a = mixY*mixZ;break;
			default:break;
		}
		return a;
}

function groupBreak(array){
		var length = array.length;
		var g2 = 0;
		var g3 = 0;
		var g4 = [];
		var gTemp;
		while(1){
				gTemp = array.slice(g3,g3+group[g2]);
				g4.push(gTemp);
				g3+=group[g2];
				if(g3>=length){
						var lengthTemp = group[g2]-gTemp.length;
						for(i=0;i<lengthTemp;i++) gTemp.push(127);
						break;
				}
				g2++;g2%=6;
		}
		return g4;
}

function MoonEncrypt(base){
		var length = base.length;
		var i = 0;
		var codeArray = [];
		for(i=0;i<length;i++) codeArray.push(base.charCodeAt(i));
		var gb = groupBreak(codeArray);
		length = gb.length;
		for(i=0;i<length;i++) codeMix(gb[i],i);
		for(i=0;i<length;i++) codeMove(gb[i]);
		orderChange(gb);
		codeArray = [];
		for(i=0;i<length;i++) codeArray = codeArray.concat(gb[i]);
		var keyString = "";
		length = codeArray.length;
		for(i=0;i<length;i++) keyString = keyString + String.fromCharCode(codeArray[i]);
		return name+"/"+keyString+"/";
	}