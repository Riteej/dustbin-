class papper{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}

		this.r=r
		this.x=x
		this.y=y
		this.body=Bodies.circle(x,y, this.r/2, options);
		World.add(world, this.body);

    }
    display()
	{	
		var pos=this.body.position;		
		Push()
			translate(pos.x,pos.y)
			rectMode(CENTER);
			fill("white");
			ellipse(pos.x, pos.y,this.r, this.r);
		pop()
	}

}