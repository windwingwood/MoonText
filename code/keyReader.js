var group,groupChange,mixX,mixY,mixZ,mixM,move,name;

function keyRead(){
		output("开始解析密钥……");
		var i = key.indexOf("/");
		if(i==-1 || key.length<7){
				error("不存在正确的密钥！请向月球人申请或索要。");
				return -1;
		}
		
		var keyS = key.substr(i+1);
		var key1 = keyS.charCodeAt(0);
		var key2 = keyS.charCodeAt(1);
		var key3 = keyS.charCodeAt(2);
		var key4 = keyS.charCodeAt(3);
		
		name = key.substring(0,i-8);
		output(name);
		group = [(key1&3840)>>8,(key1&240)>>4,key1&15,(key2&3840)>>8,(key2&240)>>4,key2&15];
		groupChange = (key4&3840)>>8;
		mixX = (key3&31744)>>10;
		mixY = (key3&992)>>5;
		mixZ = key3&31;
		mixM = (key4&240)>>4;
		move = key4&15;
		if(mixX>=10 && mixY>=10 && mixZ>=10 && mixM>0 && mixM<10 && groupChange>0){
				output("密钥初始化成功");
				output("可以开始解析");
				return 0;
		}
		else error("密钥初始化失败");
		return -1;
}