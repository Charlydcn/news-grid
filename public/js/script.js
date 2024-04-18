// --------------------------------------------------------------------------------------------------------
// ouverture/fermeture nav mobile -------------------------------------------------------------------------

var navOpen = false;

$('#nav-btn').on('click', function(e) {
    openNav();
    e.stopPropagation();
});

$('#close-btn').on('click', function(e) {
    closeNav();
    e.stopPropagation();
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('#mobile-nav').length && navOpen) {
        closeNav();
    }
});

function openNav() {
    $('body').css('overflow-y', 'hidden'); // to prevent scroll on body while mobile nav is open
    $('#mobile-nav').css('transform', 'translateX(0)');
    navOpen = true;
}

function closeNav() {
    $('body').css('overflow-y', 'auto'); // to prevent scroll on body while mobile nav is open
    $('#mobile-nav').css('transform', 'translateX(100%)');
    navOpen = false;
}
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------