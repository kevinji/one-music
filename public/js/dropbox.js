(function($, undefined) {
	var Dropbox = {},
		APP_KEY = "2zjh7j8tn8ajjzf";

	Dropbox.AUTH_URL = "https://www.dropbox.com/1/oauth2/authorize";
	Dropbox.auth = function() {
		var params = {
				client_id: APP_KEY,
				response_type: "token",
				redirect_uri: window.location.protocol + "//" + window.location.host
			},
			param = $.param(params);

		window.location.href = Dropbox.AUTH_URL + "?" + param;
	};

	// Expose Dropbox to window
	window.Dropbox = Dropbox;
}(jQuery));
