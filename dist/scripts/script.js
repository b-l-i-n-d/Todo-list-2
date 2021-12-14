$(document).mouseup((e) => {
    var noteInput = $(".note-input");

    if (!noteInput.is(e.target) && noteInput.has(e.target).length === 0) {
        $("#input-title").hide();
        $("#input-bottom-btn").removeClass("flex").addClass("hidden");
        $("#input-note-btngroup").show();

        if ($("#input-note").val()) {
            $("#notes-container .note").text($("#input-note").val());
            console.log($("#input-note").val());
            $("#input-form").trigger("reset");
            $("textarea").attr('style', '');
            $("textarea").val('');
        }
    }
});

$(document).ready(() => {
    $("#input-note").click(() => {
        $("#input-title").show();
        $("#input-bottom-btn").removeClass("hidden").addClass("flex");
        $("#input-note-btngroup").hide();
    });

    $("#input-close-btn").click((event) => {
        event.preventDefault();
        $("#input-title").hide();
        $("#input-bottom-btn").removeClass("flex").addClass("hidden");
        $("#input-note-btngroup").show();

        if ($("#input-note").val()) {
            $("#notes-container .note").text($("#input-note").val());
            $("#input-form").trigger("reset");
            $("textarea").attr('style', '');
            $("textarea").val('');
        }
    });
});

$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
  }).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });
