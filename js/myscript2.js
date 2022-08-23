function myfunction()
{
    data =""

    fname = document.getElementById("fname").value ;
    lname = document.getElementById("lname").value ;
    email = document.getElementById("email").value ;
    
    pass = document.getElementById("pwd").value ;
    conpass = document.getElementById("confpwd").value ;

    data = "FIRSTNAME = " + fname
    data += "\nLASTNAME = " + lname
    data += "\nEMAIL = " + email
    data += "\nPASSWORD = " + pass
    data += "\nCONF PASS = " + conpass

    alert(data)
    if (pass==conpass)
    {
        alert("Password match")
    }
    else{
        alert("Password mismatch")
    }

}