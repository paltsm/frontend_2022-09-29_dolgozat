import './style.css';

document.getElementById("input-url").addEventListener("change",url);
document.getElementById("input-width").addEventListener("change",width);
document.getElementById("input-border").addEventListener("change",border);
document.getElementById("input-color").addEventListener("change",color);
document.getElementById("darkmode").addEventListener("click",darkmode);

function url(){
	let url=document.getElementById("input-url").value;
	if(!url.includes("https")){
		url="../"+url
		document.getElementById("kep").setAttribute("src",url)
	}
	else{
		document.getElementById("kep").setAttribute("src",url)
	}
}

function width(){
	let width=document.getElementById("input-width").value;
	document.getElementById("kep").setAttribute("width",width+"px")
}

function border(){
	let border=document.getElementById("input-border").value;
	document.getElementById("kep").setAttribute("border",border+"px")
}
function color(){
	let color=document.getElementById("input-color").value;
	document.getElementById("kep").setAttribute("style","border-color:"+color)
}

function darkmode(){
	if(document.body.classList.contains("darkmode")){
		document.body.classList.remove("darkmode")
	}else{
		document.body.classList.add("darkmode")
	}
}