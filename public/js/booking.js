$("#bookingForm").on("submit", function(e){
    e.preventDefault();
    
    const userId = $.cookie("userId");

    const checkInDate = $("#checkInDate").val();
    const checkOutDate = $("#checkOutDate").val();
    const rooms = $("#rooms").val();
    const adults = $("#adults").val();
    const children = $("#children").val();

    $.ajax({
        url: `http://localhost:3001/bookings/`,
        method: "POST",
        data: {
            userId: userId,
            checkInDate,
            checkOutDate,
            adults,
            children,
            rooms
        }
    })
    .done(function(data){
        $("#bookingForm").hide();
        $("#succesfullBookingMsg").show();
    })

})