/*==================================================================================
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023

    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

/*------------------------------------------------------------------
  more js
-------------------------------------------------------------------*/
$(function () { /* to make sure the script runs after page load */
    $('.reliant_blog-info').each(function (event) { /* select all divs with the item class */
        var max_length = 200; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                '<a href="#" class="read-more"><br/>Read More</a>' +
                '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */
            $(this).find('a.read-more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.reliant_blog-info').find('.more_text').show(); /* show the .more_text span */
            });
        }
    });
});


/*------------------------------------------------------------------
  more js
-------------------------------------------------------------------*/
$(function () { /* to make sure the script runs after page load */
    $('.service-content').each(function (event) { /* select all divs with the item class */
        var max_length = 500; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content +
                '<a href="#" class="read-more"><br/>Read More</a>' +
                '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */
            $(this).find('a.read-more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.service-content').find('.more_text').show(); /* show the .more_text span */
            });
        }
    });
});