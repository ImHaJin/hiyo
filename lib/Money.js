
var Money = function(stage,src,width,height,x,y){	
	this.stage=stage;
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.flag=false;
	
	this.init=function(){
		var me=this;
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.position="relative";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.border="1px solid red";

		this.stage.appendChild(this.img);
		
		//나인 사각형을 클릭하면, this.div의 배경색을 바꾸자
		this.img.addEventListener("click", function(){
			if(this.flag=!this.flag){
				me.img.style.background="yellow";		
			}else{
				me.img.style.background="";		
			}
		});
	}

}