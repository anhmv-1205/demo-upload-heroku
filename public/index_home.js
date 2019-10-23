const socket = io("https://anhblog.herokuapp.com");

socket.on("server-send-list-user-information", (data) => {
    $("#list").html("");
    data.map((student, index) => {
        $("#list").append(
            ` <div class="student">
            <div class="row-1">id: ` + index + ` || <span>` + student.name + `</span></div>
            <div class="row-2"> ` + student.email + ` - ` + student.phone + `</div>
        </div>`
        )
    });
});

$(document).ready(() => {
    $("#btnSubmit").click(() => {
        socket.emit("client-send-user-information", {
            name: $("#txtName").val(),
            email: $("#txtEmail").val(),
            phone: $("#txtPhone").val()
        })
    });
});