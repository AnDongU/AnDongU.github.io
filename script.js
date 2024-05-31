// navbar-menu 클릭시 화면 전환
function aboutClick() {
    if ($('#about').hasClass('active')) {
        $('#about').removeClass('active');
        $('#activity').addClass('active');
        $('#timetable').addClass('active');
    }
}
function activityClick() {
    if ($('#activity').hasClass('active')) {
        $('#activity').removeClass('active');
        $('#about').addClass('active');
        $('#timetable').addClass('active');
    }
}
function timetableClick() {
    if ($('#timetable').hasClass('active')) {
        $('#timetable').removeClass('active');
        $('#about').addClass('active');
        $('#activity').addClass('active');
    }
};

