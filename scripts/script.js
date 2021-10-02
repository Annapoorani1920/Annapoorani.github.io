console.log("hi");

content=document.getElementsByClassName("content");
ar=['home','about','education','publication','projects','contact'];

nav.addEventListener('click',(e)=>{

	x=e.target.id;
	if(ar.includes(x)) {
		for(i=0;i<content.length;i++){
			content[i].style.display='none';	
		}
		
		to_show=document.getElementById(x+"-content");
		to_show.style.display='block';	
	}
	
	
});

footer=document.getElementById("footer");

offset=new Date().getTimezoneOffset();
hr=offset/60;
min=offset%60;

console.log(y+" "+offset+" "+hr+" "+min);

function showTime(){
	refreshRate=1000;
	time=setTimeout('func()',refreshRate);

}

function func(){
	date=new Date();
	y=Intl.DateTimeFormat().resolvedOptions().timeZone;
	date=date.toLocaleString('en-US', { timeZone: y })
	footer.innerHTML=y+" "+date;
	showTime();
}