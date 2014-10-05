(function($, undefined) {
	var firebase = new Firebase("https://onemusic.firebaseio.com/");

	$("#js-upload-button").on("click", function() {
		Dropbox.auth();
	});
}(jQuery));
