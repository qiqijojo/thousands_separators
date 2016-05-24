'use strict';

function thousands_separators(num) {
  
	var arr = num.split(".");
    if(arr.length==2&&arr[1]!=0){
  		formatNum1(arr[0])+"."+arr[1];
  	}else{
		formatNum1(arr[0]);
	}
	
	function formatNum1(str){
		var len = str.length;
		if(len<=3){
		  return str;
		}
		var rest = len%3;
		return rest>0?str.slice(0,rest)+","+str.slice(rest,len).match(/\d{3}/g).join(",") : str.slice(rest,len).match(/\d{3}/g).join(",");		
	}	
}

module.exports = thousands_separators;
