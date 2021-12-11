$(document).mouseup((e) => {
    var noteInput = $('.note-input');

    if (!noteInput.is(e.target) && noteInput.has(e.target).length === 0) {
        $('#input-title').hide();
        $('#input-bottom-btn').removeClass('flex').addClass('hidden');
        $('#input-note-btngroup').show();
    }
})

$(document).ready(() => {
    $('#input-note').click(() => {
        $('#input-title').show();
        $('#input-bottom-btn').removeClass('hidden').addClass('flex');
        $('#input-note-btngroup').hide();
    })
})