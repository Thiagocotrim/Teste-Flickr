	
$(document).ready(function(){
	var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="; 

	$.ajax({
		url: flickerAPI,
		dataType: "jsonp", 
		jsonpCallback: 'jsonFlickrFeed', 
		success: function (result, status, xhr) {
			$.each(result.items, function (i, item) {
				$("<img>").attr("src", item.media.m).appendTo("#outputDiv");
					if (i === 5) {
					return false;
				}
			});
		},
		error: function (xhr, status, error) {
			console.log(xhr)
			$("#outputDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
		}
	});
});
