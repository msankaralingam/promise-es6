var num =parseInt(prompt("enter"));

let a= new Promise((b,c)=> {
	
	if(num>5)
	{
		b("sucess");
	}
	else
	{
		c("fail");
	}
})

a.then(console.log)
.catch(console.log);
