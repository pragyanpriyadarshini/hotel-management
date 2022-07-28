
const checkAndUpdateUserLogin = () => {
    if($.cookie('isUserLoggedin') === "yes") {
        
        const userName = $.cookie('userName');
        $("#welcomeUserMessage").html(`Welcome ${userName}`);
        $("#open-signup").hide();
        $("#open-login").hide();
        $("#logoutBtn").show();
    } else {
        console.log("user login")
        $("#welcomeUserMessage").hide();
        $("#open-signup").show();
        $("#open-login").show();
        $("#open-signup").show()
    }
}
checkAndUpdateUserLogin();


const onLogout = () => {
    $.removeCookie('isUserLoggedin', 'yes', { expires: 7, path: '/' });
    $.removeCookie('userName', userName, { expires: 7, path: '/' });
    $.removeCookie('userId', userId, { expires: 7, path: '/' });
    location.reload();
}

const makeUserLogin = (userName, userId) => {
    $.cookie('isUserLoggedin', 'yes', { expires: 7, path: '/' });
    $.cookie('userName', userName, { expires: 7, path: '/' });
    $.cookie('userId', userId, { expires: 7, path: '/' });
    location.reload();
}

const submitLogin = () => {
    // submit the form
}


// DOM Events
$("#logoutBtn").on("click", ()=>onLogout());