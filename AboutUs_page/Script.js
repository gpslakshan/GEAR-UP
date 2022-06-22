function btnClicks(i){
	let avatar =["Mahesh.png", "Sachin.png","Tharuka.png","Thilan.png"]
	let names=["Mahesh divishan malintha","Sachin","tharuka hirushan amarasingha","Thilan theekshana mallika arachchi"];
	let roles =["Stuent 1","Student 2","Student 3","Student 4"];
	document.getElementById("studentNames").innerHTML = names[i];
	document.getElementById("studentRole").innerHTML  = roles[i];
	document.getElementById("studentAvatar").src=avatar[i]

}