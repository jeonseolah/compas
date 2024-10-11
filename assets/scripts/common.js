(function () {
	// tab
	$.tab = function () {
		var tabWrap = $(".tab-container"),
			tab = tabWrap.find(".tab");
			
		if (!tabWrap.length == 0) {

			tabWrap.each(function () {
				tab.on("click", function (e) {
					e.preventDefault();
					$(this).siblings(tab).removeClass("active");
					$(this).addClass("active");
					activeTab = $(this).attr("href");
					$(this).parent(".nav-tabs").siblings(".tab-panel").removeClass("active");
					$(activeTab).addClass("active");
				});
				return false;
			});
		}
	};

	// 아코디언 
	$.accordion = function () {
		var accordion = $(".accordion");

		accordion.each(function() {
			$(".btn-accordion").off("click");

			$(".btn-accordion").on("click", function () {
				var accordionPanel = $(this).attr("id");
				$(this).toggleClass("active");
				accordionOpen(accordionPanel);
				
				if($(this).html() == "펼치기"){
					$(this).html("접기");
					
				}else {
					$(this).html("펼치기");
				}
			})

			function accordionOpen(accordionPanel) {
				$("[data-accordion="+accordionPanel+"]").toggleClass("active");
			}
		})
	};

	$.searchToggle = function () {
		$(".search-box-btn .btn-search span").on("click", function (){
			$(".search-box-btn").toggleClass("active")
			$(".search-box-wrap").toggleClass("active");
		})
	}

	$(document).ready(function () {
		$.tab();
		$.accordion();
		$.searchToggle();
	});
})();
