
const checkAndUpdateUserLogin = () => {
    if($.cookie('isUserLoggedin') === "yes") {
        
        const userName = $.cookie('userName');
        $("#welcomeUserMessage").html(`Welcome ${userName}`);
        $("#open-signup").hide();
        $("#open-login").hide();
        $("#logoutBtn").show();
    } else {
        $("#welcomeUserMessage").hide();
        $("#open-signup").show();
        $("#open-login").show();
        $("#logoutBtn").hide()
    }
}
checkAndUpdateUserLogin();


const onLogout = () => {
    $.removeCookie('isUserLoggedin', 'yes', { expires: 7, path: '/' });
    $.removeCookie('userName',{ expires: 7, path: '/' });
    $.removeCookie('userId', { expires: 7, path: '/' });
    location.reload();
}

const makeUserLogin = (userName, userId) => {
    $.cookie('isUserLoggedin', 'yes', { expires: 7, path: '/' });
    $.cookie('userName', userName, { expires: 7, path: '/' });
    $.cookie('userId', userId, { expires: 7, path: '/' });
    location.href = "/";
}

const submitLogin = () => {
    // submit the form
}


// DOM Events
$("#logoutBtn").on("click", ()=>onLogout());


// login form

$("#loginForm").on( "submit", function(e){
    $("#loginPasswordErrorMsgBox").hide();
    e.preventDefault();

    const emailId = $("#emailId").val();
    const password = $("#password").val();
    
    $.ajax({
        url: `http://localhost:3001/users/${emailId}`,

        method:"get"
    }).done(function( data ) {
        console.log(data);
        if(data.password === password){
            makeUserLogin(data.firstName, data.emailId)
        } else {
            $("#loginPasswordErrorMsgBox").show();
        }
      })
      .fail(function() {
        $("#loginPasswordErrorMsgBox").show();
      })


});