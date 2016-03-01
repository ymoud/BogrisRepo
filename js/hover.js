$(document).ready(function() {
		$("li.research").hover(
		function() {
			$(this).addClass("open");
		}, function() {
			$(this).removeClass("open");
		}
		);
});