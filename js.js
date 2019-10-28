//Play youtube in modal style
$(document).ready(function() {

    // Gets the video src from the data-id on each img tag

    let $videoSrc;
    $('.vungChon').click(function() {
        $videoSrc = $(this).data("id");
    });
    console.log($videoSrc);


    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#thumbnail").attr('src', $videoSrc);
    })






    // document ready  
});
$('[data-toggle="tooltip"]').tooltip();