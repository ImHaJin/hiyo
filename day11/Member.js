/*
이 클래스는 사물을 표현하는 것은 맞지만
단지, 동작은 제외하고, 오직 데이터만을 보유시키기 위한 
클래스로 정의한다.. 이러한 역할을 수행하는 객체를 가리켜 
설계분야에서 DTD (Data Transfet Object)라고 한다.
*/
var Member=function(){   //거푸집이기때문에 데이터가 채워져있으면 안된다.
	this.id;
	this.pw;
 	this.name;
	this.money;
}