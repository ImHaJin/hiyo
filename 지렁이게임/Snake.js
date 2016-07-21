var Snake=function(stage, width,height,x,y,src){
	this.stage=stage;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.targetX=0;
	this.targetY=0;
	this.a=0.1;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

		this.move();
	}

	this.move=function(){
		var me=this;
		//this.img.style.left=this.targetX - this.a*(this.targetX-parseInt(this.img.style.left))+"px";
		//this.img.style.top=this.targetY - this.a*(this.targetY-parseInt(this.img.style.top))+"px";

		this.img.style.left=this.targetX+"px";
		this.img.style.top=this.targetY+"px";

		//console.log(this.img.style.left);

		setTimeout(function(){
			me.move();
		}, 100);
	}
}