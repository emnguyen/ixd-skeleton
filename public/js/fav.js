/*
 * File: fav.js
 * Description: Javascript for the Favorites page.
 */

function deleteFav(fav) {
	var favLink = $(fav).find('.fav-link');
	var name = $(favLink).text();
	var favUrl = $(favLink).attr('href');
    
    $.post('/delete-fav', {"name" : name, "url" : favUrl}, function(data) {
   	});  

    window.location.href= "/bookmarks";
   //	$(fav).slideUp();
}

function loadFav(fav) {
	stop();
	localStorage.setItem("fav", $(fav).text());

	window.location.href = $(fav).attr("href");
}

/*
 * Main function
 */
var main = function () {
	$('.edit-button').click(function(e) {
		e.preventDefault();
		$(this).text(function(i, text) {
			return text === "Edit" ? "Done" : "Edit";
		});

		$('.bookmark-options').toggle();
	});

	$('.delete-fav').click(function() {
		var fav = $(this).closest('.favorite');
		var name = $(fav).find('.fav-link').text();
		if (confirm('Are you sure you want to delete ' + name + "?"))
			deleteFav(fav);
	});

	$('.fav-link').click(function(e) {
		e.preventDefault();
		loadFav($(this));
	})
};

$(document).ready(main);