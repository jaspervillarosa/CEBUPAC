function output(){
	
	var LN= document.getElementById("LN").value;
	var FN=document.getElementById("FN").value;
	var G= document.getElementById("Gen").value;
	var EA=document.getElementById("EA").value;
	var O= document.getElementById("O").value;
	var D=document.getElementById("D").value;
	var DD= document.getElementById("DD").value;
	var RD=document.getElementById("RD").value;
	
	if (!LN||!FN||!G||!EA||!O||!D||!DD||!RD)
	{
		alert("Please Fill in All the Required Data Entries!");
	}
	else if (!EA.includes("@")){
		alert("Invalid Email!");
	}
	else if (DD>=RD){
		alert("Date Invalid");
	}
	else{
		document.getElementById("display").innerHTML="NAME: "+FN+" "+LN+"<br>Gender:"+G+" <br>Email Address:"+EA+"<br>DESTINATION: "+D+"<br>ORIGIN: "+O+"<br>Departure Date:"+DD+"<br>Return Date:"+RD+"";
	}
	
}
