// $(function (){
//     $("#submit_singup").on("click",function(){
//         storeCredentials();
//     });
//     $("#submit_login").on("click",function(){
//         checkCredentials(emails,passwords);
//     });
// });

// function storeCredentials(){
//         let firstName = $("#firstName").val();
//         let lastName = $("#lastName").val();
//         let email = $("#email").val();
//         let password = $("#pass").val();
//         let  emails =[];
//         let passwords =[];
//         emails.push(email);
//         passwords.push(password); 
//         alert(emails);
//         return emails,passwords;
// }

// function checkCredentials(emails,passwords){ 
  
//     let email = $("#email").val();
//     let password = $("#pass").val();
//     for(i of emails){
//         for(j of passwords){
//             if(email==i && password==j){
//                 window.location.href="index_main.html"; 
//             }
//             else{
//                 alert("nu merge")
//             }
//         }
//     } 
// }

// $(function() {
//   $("#btnls").on("click",function(){
//     console.log("merge");
//     $("#lista1").load("lista_mea.html")
//   })
// });



$(function (){
 
    $(".vid").on("mouseover", function() {
      this.play();
  
    })
    $(".vid").on('mouseout', function() {
      this.load();
  
    });
  });



var storePeople =[
    {
        email:"mariansacaliuc@gmail.com",
        password:"12345678"
    },
    {
        email:"ceva@yahoo.com",
        password:"12345678"
    }
]

function register(){
    let registerEmail = $("#emailS").val();
    let registerPassword =$("#passwordS").val();
    let newUser =
        {
            email: registerEmail,
            password: registerPassword
        }
      
    storePeople.push(newUser);
    console.log(storePeople);
    
}

function login(){
    let loginEmail = $("#emailL").val();
    let loginPassword = $("#passwordL").val();
    for(i=0;i<storePeople.length;i++){
        if(loginEmail==storePeople[i].email && loginPassword==storePeople[i].password){
            window.location.href="index_main.html"; 
        }
        
    }
    alert("Wrong email or password.");
    
}

$(function (count){
  $("#avtO").on("click",function(){
    localStorage.setItem("avatar-orange","avatar/avatar-orange.png");
    avatarPicture.src = "avatar/avatar-orange.png";
   
    count = "1";
    localStorage.setItem("numar",count)
  });
  $("#avtR").on("click",function(){
    localStorage.setItem("avatar-red","avatar/avatar-red.png");
    avatarPicture.src = "avatar/avatar-red.png";
    count = "2";
    localStorage.setItem("numar",count)
  });
  $("#avtB").on("click",function(){
    localStorage.setItem("avatar-blue","avatar/avatar-blue.png");
    avatarPicture.src = "avatar/avatar-blue.png";
    count = "3";
    localStorage.setItem("numar",count)
  });
  $("#avtG").on("click",function(){
    localStorage.setItem("avatar-green","avatar/avatar-green.png");
    avatarPicture.src = "avatar/avatar-green.png";
    count = "4";
    localStorage.setItem("numar",count)
  });
  $("#avtC").on("click",function(){
    localStorage.setItem("avatar-cocos","avatar/avatar-cocos.png");
    avatarPicture.src = "avatar/avatar-cocos.png";
    count = "5";
    localStorage.setItem("numar",count)
  });

    return localStorage.getItem("numar")=="1"? avatarPicture.src = localStorage.getItem("avatar-orange") 
    : localStorage.getItem("numar")=="2"?  avatarPicture.src = localStorage.getItem("avatar-red")
    : localStorage.getItem("numar")=="3"?  avatarPicture.src = localStorage.getItem("avatar-blue")
    : localStorage.getItem("numar")=="4"?  avatarPicture.src = localStorage.getItem("avatar-green")
    : localStorage.getItem("numar")=="5"?  avatarPicture.src = localStorage.getItem("avatar-cocos")
    : avatarPicture.src = localStorage.getItem("avatar-blue");


});

$(function (){
    $('#change').on('click', function () {
    $("#passwordL").attr('type', 'text'); 
  });
  $('#change').on("dblclick", function () {
    $("#passwordL").attr('type', 'password'); 
  });
});


$(function (){
  $("#update1").on("click",function(){
    let name = $("#textprof").val();
    let email =$("#emailprof").val();
    let password =$("#passwordprof").val();
    $("#nameChange").text(name);
    $("#emailChange").text(email);
    $("#passwordChange").text(password);
    localStorage.setItem("nume",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);  
  });
  $("#nameChange").text(localStorage.getItem("nume"));
  $("#emailChange").text(localStorage.getItem("email"));
  $("#passwordChange").text(localStorage.getItem("password"));
});




