
function myFunction(){
    var count = false;
    var fullName = document.getElementById("fullName").value;
    var gender1 = document.getElementById("gender").value;
    var hobbies1 = document.getElementById("invalidCheck1").checked;
    var hobbies2 = document.getElementById("invalidCheck2").checked;
    var hobbies3 = document.getElementById("invalidCheck3").checked;
    var hobbies4 = document.getElementById("invalidCheck4").checked;
   
    if(fullName.length >= 5 && fullName.includes(' ') && fullName.length>=1){
        document.getElementById('full-name-valid').style.display = 'block';
        document.getElementById('full-name-invalid').style.display = 'none';
        count = true;
    }
    else{
        document.getElementById('full-name-valid').style.display = 'none';
        document.getElementById('full-name-invalid').style.display = 'block';
        count = false;
    }
    if(gender1 == "Male" || gender1 == "Female"){
        document.getElementById('full-name-valid1').style.display = 'block';
        document.getElementById('full-name-invalid1').style.display = 'none'; 
        count = true;
    }
    else{
        document.getElementById('full-name-valid1').style.display = 'none';
        document.getElementById('full-name-invalid1').style.display = 'block';
        count = false;
    }
    if(hobbies1 || hobbies2 || hobbies3 || hobbies4){
        document.getElementById('full-name-valid2').style.display = 'block';
        document.getElementById('full-name-invalid2').style.display = 'none';
        count = true;
    }
    else{
        document.getElementById('full-name-valid2').style.display = 'none';
        document.getElementById('full-name-invalid2').style.display = 'block';
        count = false;
    }
    if(count == true){
       
        

        if(hobbies1==true && hobbies2== true&& hobbies3==true && hobbies4 == true){ hobbies1 = 'Swimming';hobbies2 = 'Reading novel';hobbies3 = 'Dancing';hobbies4 = 'Singing'; r1 = ","; r2=',';r3=' and '; are1 = "are"}
        
        else if(hobbies1==true && hobbies2==true){ hobbies1 = 'Swimming';hobbies2 = 'Reading novel';hobbies3 = '';hobbies4 = ''; r1 = " and "; r2='';r3=''; are1 = "are"}
        else if(hobbies3==true && hobbies4==true){  hobbies1 = '';hobbies2 = '';hobbies3 = 'Dancing';hobbies4 = 'Singing';r1 = ""; r2='';r3=' and '; are1 = "are"}
        else if(hobbies1==true && hobbies4==true){   hobbies1 = 'Swimming';hobbies2 = '';hobbies3 = '';hobbies4 = 'Singing';r1 = ""; r2='and';r3=''; are1 = "are"}
        else if(hobbies2==true && hobbies3==true){    hobbies1 = '';hobbies2 = 'Reading novel';hobbies3 = 'Dancing';hobbies4 = '';r1 = ""; r2=' and ';r3=''; are1 = "are"}
        else if(hobbies1==true && hobbies3==true){ hobbies1 = 'Swimming';hobbies2 = '';hobbies3 = 'Dancing';hobbies4 = ''; r1 = " and "; r2='';r3=''; are1 = "are"}

        else if(hobbies1==true && hobbies2==true && hobbies3==true){    hobbies1 = 'Swimming';hobbies2 = 'Reading novel';hobbies3 = 'Dancing';hobbies4 = '';r1 = ","; r2=' and ';r3=''; are1 = "are"}
        else if(hobbies1==true && hobbies2==true && hobbies4==true){    hobbies1 = 'Swimmming';hobbies2 = 'Reading novel';hobbies3 = '';hobbies4 = 'Singing';r1 = ","; r2='  ';r3=' and '; are1 = "are"}
        else if(hobbies1==true && hobbies3==true && hobbies4==true){    hobbies1 = 'Swimming';hobbies2 = '';hobbies3 = 'Dancing';hobbies4 = 'Singing';r1 = ""; r2=' , ';r3=' and '; are1 = "are"}
        else if(hobbies2==true && hobbies3==true && hobbies4==true){    hobbies1 = '';hobbies2 = 'Reading novel';hobbies3 = 'Dancing';hobbies4 = 'Singing';r1 = ""; r2=' , ';r3=' and '; are1 = "are"}

        else if(hobbies1==true){ hobbies1 = 'Swimming';hobbies2 = '';hobbies3 = '';hobbies4 = '';r1 = ""; r2='';r3=''; are1 = "is"}
        else if(hobbies2==true){ hobbies1 = '';hobbies2 = 'Reading novel';hobbies3 = '';hobbies4 = '';r1 = ""; r2='';r3=''; are1 = "is"}
        else if(hobbies3==true){ hobbies1 = '';hobbies2 = '';hobbies3 = 'Dancing';hobbies4 = '';r1 = ""; r2='';r3=''; are1 = "is"}
        else if(hobbies4==true){ hobbies1 = '';hobbies2 = '';hobbies3 = '';hobbies4 = 'Singing';r1 = ""; r2='';r3=''; are1 = "is"}

        alert(`Hobbies ${are1} ${hobbies1}${r1}${hobbies2}${r2}${hobbies3}${r3}${hobbies4}`);
        document.getElementById("fullName").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("invalidCheck1").checked = "";
        document.getElementById("invalidCheck2").checked = "";
        document.getElementById("invalidCheck3").checked  = "";
        document.getElementById("invalidCheck4").checked  = "";
        document.getElementById('full-name-valid').style.display = 'none';
        document.getElementById('full-name-invalid').style.display = 'none';
        document.getElementById('full-name-valid1').style.display = 'none';
        document.getElementById('full-name-invalid1').style.display = 'none';
        document.getElementById('full-name-valid2').style.display = 'none';
        document.getElementById('full-name-invalid2').style.display = 'none';
    }
  
}