$(document).ready(function() {
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




    $('.article-container .list li').on('click', function(e) {
        var currentUl = $(this).find('ul');
    
        if (currentUl.length > 0) {
            currentUl.slideUp(350, function() { 
                currentUl.remove();
            });
        } else {
            $('.article-container .list li ul').slideUp(350, function() {
                $(this).remove();
            });
    
            var ul = $("<ul>").hide();
            
            for (var i = 0; i < 5; i++) {
                var li = $("<li>").html(`Article ${$(this).text()} ${i + 1}`);
                ul.append(li);
            }
    
            ul.css('margin', '1rem 0 0 1.25rem');
            $(this).append(ul);
            ul.slideDown(350);
            e.stopPropagation();
        }
    });
    
    $(document).on('click', function() {
        $('.article-container .list li ul').slideUp(350, function() {
            $(this).remove();
        });
    });
    
    
    
});