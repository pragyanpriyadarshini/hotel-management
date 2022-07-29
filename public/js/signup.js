$("#signupForm").on( "submit", function(e){

    $("#signupErrorMsgBox").hide();
    e.preventDefault();

    const emailId = $("#emailId").val();
    const password = $("#password").val();
    const mobileNumber = $("#mobileNumber").val();
    const firstName = $("#firstName").val();


    
    $.ajax({
        url: `http://localhost:3001/users/${emailId}`,
        method:"get"
    }).done(function( data ) {
        
        if(data.id === emailId){ // user is existing show error message
            $("#signupErrorMsgBox").show();
        } 
      })
      .fail(function() {
        $.ajax({
            url: `http://localhost:3001/users/`,
            method: "POST",
            data: {
                id: emailId,
                password,
                mobileNumber,
                firstName
            }
        })
        .done(function(data){
            
            makeUserLogin(data.firstName, data.id)

        })
      })


});