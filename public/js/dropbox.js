(function($, undefined) {
	var Dropbox = {};

	Dropbox.INITIAL_AUTH_URL = "https://www.dropbox.com/1/oauth2/authorize";
	Dropbox.initialAuth = function() {
		var params = {
				client_id: APP_KEY,
				response_type: "token",
				redirect_uri: window.location.protocol + "//" + window.location.host
			},
			param = $.param(params);

		window.location.href = Dropbox.INITIAL_AUTH_URL + "?" + param;
	};

	Dropbox.GET_URL = "https://api-content.dropbox.com/1/files/auto/"
	Dropbox.get = function(authCode, file, callback) {
		var url = Dropbox.GET_URL + encodeURIComponent(file);

		$.ajax({
			url: url,
			type: "GET",
			dataType: "text",
			headers: {
				"Authorization": "Bearer " + authCode
			}
		}).done(callback);
	};

	// Expose Dropbox to window
	window.Dropbox = Dropbox;
}(jQuery));
