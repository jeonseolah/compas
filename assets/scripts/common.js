(function () {
	// gnb
	$.gnb = function(){
		var header = $(".ly-header"),
			depth1 = $(".all-menu-list > li");

		header.find(".btn-menu").on("click", function(){
			$("body").addClass("overflow-hidden");
			header.addClass("open");
		});

		$(".btn-close, .overlay").on("click", function(){
			$("body").removeClass("overflow-hidden");
			header.removeClass("open");
		});

		depth1.on("click", function(){
			depth1.removeClass("open");
			$(this).addClass("open");
		});
	};

	$.scroll = function() {
		function hasScrolled() {

			var bodyOffsetTop = $("body").offset().top;

			if ( $(window).scrollTop() <= bodyOffsetTop ) {
				$(".ly-wrap").addClass("scroll");
			} else {
				$(".ly-wrap").removeClass("scroll");
			} 
		}

		hasScrolled();

		$(window, ".sub-contents").scroll(function () {
			hasScrolled();
		})

		function scrollHeader() {
            if ($(".comment-scroll").length && $(".comment-scroll").scrollTop() > 56) {
                $(".talk-view").removeClass("bg-normal");
                
            } else {
                $(".talk-view").addClass("bg-normal");
            }
		}
		
		scrollHeader();

		$(".comment-scroll").scroll(function () {
			scrollHeader();
		})
	};

	// dnd
	$.sortable = function() {
		var dnd = $(".sortable-container");
		if(!dnd.length == 0){
			dnd.find(".btn-create").on("click", function (){
				// createItem();
			})

			dnd.find(".sortable-list").sortable({
				axis : "x",
				helper:"clone",
				placeholder: "sortable-placeholder",
				opacity: 0.5
			});
			dnd.find(".sortable-list .item").disableSelection();

			dnd.find(".btn-delete").on("click touchend", function(){
				$(this).parent(".item").remove();
			})
		}

		function createItem() {
			$(createBox())
				.appendTo(".sortable-list")
				.append("<span class='btn-delete'>삭제</span>")
				.find(".btn-delete").on("click touchend", function(){
					$(this).parent(".item").remove();
				})
		}

		function createBox() {
			var contents = "<div class='item'>"
				+ "<span class='img'><img src='../assets/images/@img-userImg00.png' /></span> "
				+ "</div>"
			return contents;
		}
	};

	// layer
	$.layerPopup = function () {
		var layerBtn = $(".btn-layer");

		if(!layerBtn.length == 0){

			// $(window).resize(function () {
			// 	$("body").removeClass("layer-open");
			// }).resize();

			layerBtn.on("click", function () {
				var num = $(this).attr("id");
				layerOpen(num);
			})

			$(".btn-close").on("click",  function () {
				if($(".layer.is-active").length == 1) {
					$("body").removeClass();
				}
				$(this).parents(".layer").removeClass("is-active");
			})

			$(".btn-group.fixed").parent(".layer-content").css("max-height", "calc(100vh - 16.6rem)");
		}

		function layerOpen(num) {
			$("body").addClass("layer-open");
			$("[data-layer="+num+"]").addClass("is-active");
		}

		if(!$(".nodata").length == 0){
			$(".nodata").parents(".layer-content").css("overflow", "hidden")
		}
	};

	$.mainBg = function () {
		if (matchMedia("screen and (min-width: 1400px)").matches) {
			if(!$(".ly-wrap.main").length == 0){
				$("body").css("background", "#e2f5ff");
			}
		} else {
			$("body").css("background", "#ffffff");
		}
		
	}

	$.dropdown = function () {
		var dropdown = $(".dropdown");

		if(!dropdown.length == 0){
			dropdown.each(function() {
				dropdown.find(".btn-dropdown").off("click");

				dropdown.find(".btn-dropdown").on("click", function () {
					$(this).parent(".dropdown").toggleClass("is-active");
				})

				$(".fortune").find(".btn-dropdown").on("click", function(e) {
					e.preventDefault();
					if($(this).parent(dropdown).hasClass("is-active")){
						dropdown.removeClass("is-active");
						$(this).parent(dropdown).addClass("is-active");
					}
				})

				$(".fortune").find(".dropdown:last-child() .btn-dropdown").on("click", function(e) {
					setTimeout(function() {
						$("html, body").animate({
							scrollTop:document.body.scrollHeight
						})
						return false;
					}, 100);
				})
			})
		}
	};

	$.tab = function () {
		var tabs = $(".nav-tabs"),
			tabCont = $(".tab-content");

		if(!tabs.length == 0){
			tabs.find(".tab").eq(0).addClass("is-active");
			tabCont.eq(0).addClass("is-active");

			tabs.find(".tab").click(function (e) {
				var  data_id = e.target.dataset.tab;

				tabs.find(".tab").removeClass("is-active");
				tabCont.removeClass("is-active");

				tabs.find(".tab").eq(data_id).addClass("is-active");
				tabCont.eq(data_id).addClass("is-active");
			});
		}
	}

	$.toggle = function () {
		var toggle =  $(".toggle");

		toggle.each(function () {
			$(this).off("click");
			$(this).on("click", function () {
				$(this).toggleClass("on");
			})

			$(".user-profile.toggle").on("click", function (e){
				e.preventDefault();
				if($(this).hasClass("on")){
					toggle.removeClass("on");
					$(this).addClass("on");
				}
			})
		})
	}

	$.checkboxAll = function () {
		if(!$(".check-all").length == 0){

			$(".check-all").click(function() {
				if($(".check-all").is(":checked")){
					$("input[name=checkboxRow]").prop("checked", true);
				} else {
					$("input[name=checkboxRow]").prop("checked", false);
				}
			});
			
			$("input[name=checkboxRow]").click(function() {
				var total = $("input[name=checkboxRow]").length;
				var checked = $("input[name=checkboxRow]:checked").length;

				if(total != checked) {
					$(".check-all").prop("checked", false);
				}else {
					$(".check-all").prop("checked", true); 
				}
			});
		}
	}

	$.daterange = function () {

		$(".daterange").daterangepicker({
			locale: {
				format: "MM.DD",
				"separator": " ~ ",
				"applyLabel": "적용하기",
				"cancelLabel": "취소",
				"daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
				"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			}
		});

		$(".daterange").on("show.daterangepicker", function () {

			$("body").addClass("dimmed");
			$(".daterangepicker").addClass("layer");
		});

		$(".daterange").on("showCalendar.daterangepicker", function () {
			//달력 년월표시 변경
			$(".table-condensed .month").eq(0).text(moment($(".table-condensed .month").eq(0).text().replaceAll('월 ', ',').split(',')[1]+$(".table-condensed .month").eq(0).text().replaceAll('월 ', ',').split(',')[0].padStart(2, '0')+"01").format("YYYY년 M월"));
			$(".table-condensed .month").eq(1).text(moment($(".table-condensed .month").eq(1).text().replaceAll('월 ', ',').split(',')[1]+$(".table-condensed .month").eq(1).text().replaceAll('월 ', ',').split(',')[0].padStart(2, '0')+"01").format("YYYY년 M월"));
		});

		$(".daterange").on("apply.daterangepicker", function(event, picker) {
			$obj = $(this);
			if($obj.attr('id') == "filter1FieldDateDaterange"){
				$("#filter1FieldDate").val(picker.startDate.format('YYYY-MM-DD') + ' ~ ' + picker.endDate.format('YYYY-MM-DD'));
			}else if($obj.attr('id') == "filter2FieldDateDaterange"){
				$("#filter2FieldDate").val(picker.startDate.format('YYYY-MM-DD') + ' ~ ' + picker.endDate.format('YYYY-MM-DD'));
			}else if($obj.attr('id') == "preferredDateDaterange"){
				$("#preferredDate").val(picker.startDate.format('YYYY-MM-DD') + ' ~ ' + picker.endDate.format('YYYY-MM-DD'));
			}
			$("body").removeClass("dimmed");
			$(".daterangepicker").removeClass("layer");
		});

		$(".daterange").on("hide.daterangepicker", function() {
			$("body").removeClass("dimmed");
			$(".daterangepicker").removeClass("layer");
		});
	}

	$.datepickerMulti = function () {

		$(".daterange-single").datepicker({
			multidate: true,
			calendarWeeks: false,
			multidateSeparator :",",
			title: "날짜 선택",
			todayHighlight : true,
			language : "ko",
			showButtonPanel: true
			
		}).on("show", function () {
			$("body").addClass("dimmed");
			$(".datepicker-dropdown").addClass("layer");

			// 닫기 버튼추가
			if($('.datepicker .datepicker-title .cancelBtn').length == 0){
				$('.datepicker .datepicker-title').html('날짜 선택<button class="cancelBtn btn btn-sm btn-default"">취소</button>');
			}
			// 적용하기 초기화 버튼추가
			if($('.datepicker .applyBtn').length == 0){
				$('.datepicker .table-condensed').after('<div class="drp-buttons"><button class="resetBtn btn lg border"><span>초기화</span><i class="icon-rotate-cw"></i></button><button class="applyBtn btn btn-sm btn-primary" type="button">적용하기</button></div>');
			}

		}).on("hide", function () {
			$("body").removeClass("dimmed");
		});
	}

	$.fn.datepicker.dates["ko"] = {
		days: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
		daysShort: ["일","월","화","수","목","금","토"],
		daysMin: ["일","월","화","수","목","금","토"],
		months: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		monthsShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		today: "오늘",
		clear: "초기화",
		close: "적용하기",
		format: "mm.dd",
		titleFormat: "yyyy년mm월",
		weekStart: 0
	}

	$.setScreenSize = function() {
		var vh = window.innerHeight * 0.01;

		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	$.btnTop = function() {

		if($(".btn-top").length){
			$(".btn-top").on("click", function(){
				$("html, body").scrollTop(0);
				return false;
			});
		}
	}

	$(document).ready(function () {
		$.setScreenSize();
		$.sortable();
		$.gnb();
		$.scroll();
		$.layerPopup();
		$.dropdown();
		$.tab();
		$.toggle();
		$.checkboxAll();
		$.daterange();
		$.datepickerMulti();
		$.mainBg();
		$.btnTop();
	});
})();
