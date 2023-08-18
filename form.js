function form1() {
    if(document.getElementById("name").value.length<=2)
		{
			document.getElementById("name").value="";
			document.getElementById("name").placeholder="• Please Enter Your Name... •";
		}
    if (document.getElementById("email").value.length<=2)
    
    {
        document.getElementById("email").value="";        
        document.getElementById("email").placeholder="• Please Enter Your Email... •";        
    }

    if(document.getElementById("Phone-number").value.length<11)
    {
        document.getElementById("Phone-number").value="";
        document.getElementById("Phone-number").placeholder="• must be 11 char or more... •";
    }
}
