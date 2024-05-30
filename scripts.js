// Function to submit user input from the form
function submitInput() {
    //Gets the inputs of the user
    var userfname = document.getElementById("fname").value;
    var userlname = document.getElementById("lname").value
    var usersex = sexPick();
    var useremail = document.getElementById("email").value;
    var userpword = document.getElementById("pword").value;
    var usercontact = document.getElementById("contact").value;
    var usersupport = document.getElementById("support").value;
    
    //Checks if any required field is empty and displays "required" if the field is empty
    if((userfname == "")||(userlname == "")||(usersex == "")||(useremail == "")||(userpword == "")||(usersupport =="")){

        if(userfname == ""){
            document.getElementById("fnamerequired").innerHTML = "required";
        }
        if(userlname == ""){
            document.getElementById("lnamerequired").innerHTML = "required";
        }
        if(usersex == ""){
            document.getElementById("sexrequired").innerHTML = "required";
        }
        if(useremail == ""){
            document.getElementById("emailrequired").innerHTML = "required";
        }
        if(userpword == ""){
            document.getElementById("pwordrequired").innerHTML = "required";
        } 
        if(usersupport == ""){
            document.getElementById("supportrequired").innerHTML = "required";
        } 
    } 
    
    else {
        //If the required fields are filled, the inputted data will be stored in local storage and will redirect to profile page.html
        localStorage.setItem("storefname", userfname);
        localStorage.setItem("storelname", userlname);
        localStorage.setItem("storesex", usersex);
        localStorage.setItem("storeemail", useremail);
        localStorage.setItem("storecontact", usercontact);
        localStorage.setItem("storesupport", usersupport);

        window.open("profilepage.html", "_self");
    }

    return false;
}

// Function to display inputted data from the user on the profile page
function output(){
    //Gets the stored data from local storage
    var userfname = localStorage.getItem("storefname");
    var userlname = localStorage.getItem("storelname");
    var usersex = localStorage.getItem("storesex");
    var useremail = localStorage.getItem("storeemail");
    var usercontact = localStorage.getItem("storecontact");
    var usersupport = localStorage.getItem("storesupport");

    // Display inputted data by the user on the profile page
    document.getElementById("outputfname").innerHTML += userfname + " ";
    document.getElementById("outputlname").innerHTML += userlname;
    document.getElementById("outputsex").innerHTML += usersex;
    document.getElementById("outputemail").innerHTML += useremail;
    document.getElementById("outputcontact").innerHTML += usercontact;
    document.getElementById("outputsupport").innerHTML += usersupport;

    return false;
}


//Function to get the selected sex of the user
function sexPick(){
    var sex="";
    var sexPick = document.getElementsByName("sex");
    //Checks which radio button is selected by the user and gets the value of the checked radio button
    for (var x = 0; x < sexPick.length; x++){
        if (sexPick[x].checked){
            sex += sexPick[x].value;
        }
    }

    return sex;
}

//The following functions are for clearing the "required" text when the user inputs data
function checkfname(){
    document.getElementById("fnamerequired").innerHTML="";
}

function checklname(){
    document.getElementById("lnamerequired").innerHTML = "";
}

function checksex(){
    document.getElementById("sexrequired").innerHTML = "";
}

function checkemail(){
    document.getElementById("emailrequired").innerHTML = "";
}

function checkpword(){
    document.getElementById("pwordrequired").innerHTML = "";
}

function checksupport(){
    document.getElementById("supportrequired").innerHTML = "";
}

document.getElementById('volunteerButton').addEventListener('click', function() {
    alert('Volunteer Now button clicked!');
});
