var users=[
    {username:"nemo",password:"Nemo@123"}
];
function Signin(){
    var inputusername=document.getElementById('usernamel').value;
    var inputpassword=document.getElementById('passwordl').value;
   
    if(inputusername.trim()===''||inputpassword.trim()===''){
        alert("fill all input text");
        return false;
    }
    var userfound=false;
    for(var i=0;i<users.length;i++)
    {
    if(users[i].username===inputusername)
    {
        userfound=true;
        if(users[i].password===inputpassword)
        {
            alert("login successful");
            return true;
            
           
        }
        else{
            alert("incorrect password");
            return false;
        }
    

    }
}
if(!userfound){
    alert("user not found")
}
return false;
  
}


function signup(){
    var inputUsername=document.getElementById('username').value;
    var inputPassword=document.getElementById('password').value;
    var inputconfirmpass=document.getElementById('c-pass').value;
    var inputemail=document.getElementById('email').value;
    var inputage=document.getElementById('age').value;
    var inputPhoneNumber=document.getElementById('phonenumber').value;
    var inputGender=document.querySelector('input[name="gender"]:checked');
    var inputcity=document.getElementById('city').value;
    if(inputUsername.trim()===''||inputPassword.trim()===''||inputconfirmpass===''||inputemail===''||inputage===''||inputPhoneNumber===''||inputGender===''||inputcity===''){
        alert("fill all input");
        return false;
    }
    if(inputUsername.trim().length<3)
    {
        alert("username must be contain at least 3 characters")
        return false;
    }
 
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordPattern.test(inputPassword)) {
        alert("Password must contain at least one number, one uppercase and lowercase letter, one special character (@#$%^&+=), and be at least 8 characters long.");
        return false;
    }
    if(inputPassword!=inputconfirmpass){
        alert("check from your password");
        return false;

    }
    users.push({
        username:inputUsername,
        password:inputPassword,
        confirmpass:inputconfirmpass,
        email:inputemail,
        age:inputage,
        phone:inputPhoneNumber,
        gender:inputGender.value,
        city:inputcity
    });
    alert("done");
    return false;
}
function forgotpassword()
{
    try
    {
        let newuser = document.getElementById('usernamel').value;
        let newpass = document.getElementById('passwordl').value;
        
        let userfound = false;
        for(let i = 0; i < users.length; i++)
        {
            if(users[i].username == newuser)
            {
                users[i].newpass = newpass;
                userfound = true;
                alert("Password Updated");
                return true;
            }
            else if (userfound == false)
            {
                alert("User not found");
                return false;
            }
        }
    }
    catch(error)
    {
        console.log("An error occurred: " + error.message);
        return false;
    }
}
function countAnswers() {
    const questions = [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6"
    ];

    let yesCount = 0;
    let noCount = 0;

    questions.forEach(questionId => {
        const selectedValue = document.querySelector(`input[name=${questionId}]:checked`);
        if (selectedValue) {
            if (selectedValue.value === 'yes') {
                yesCount++;
            } else if (selectedValue.value === 'no') {
                noCount++;
            }
        }
    });

    alert(`Yes: ${yesCount}, No: ${noCount}`);
}

function slider(i){
    document.getElementById("table").style.marginLeft =`${-100 * i}vw`
  }  

  function buttonclick(){
    window.location.href="login.html";
  }
function showsignup()
{
    document.getElementById('signup').style.display="block";
}