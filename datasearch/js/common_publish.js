$(document).ready(function(){
	jQuery( '#tothetop' ).click( function() {
        var htmloffset = jQuery( 'html' ).offset();
        jQuery( 'html, body' ).animate( { scrollTop : htmloffset.top }, 400 );
    });
    
    

	var $gnb = $(".gnb");
	var $mGnb = $(".m_gnb"),
		mGnbDirect = null;
	var $gnbClone = $gnb.html();
	$mGnb.html($gnbClone);
	$mGnb.find(".sub_gnb").attr("class","m_sub_gnb");
	$mGnb.find(".sub2_gnb").attr("class","m_sub2_gnb");
	
	/* gnb 
	$gnb.find("> li").hover(function(){
		//$(this).find(".sub_gnb").stop(true,true).fadeIn(300);
		$(this).find('.sub_gnb').stop().slideDown();
	}, function(){
		$(this).find(".sub_gnb").stop(true,true).fadeOut(300);
	});
	$gnb.find("> li > a").focus(function(){
		$(this).siblings(".sub_gnb").stop(true,true).fadeIn(300);
	});
	$gnb.find(".sub_gnb > li:last-child > a").focusout(function(){
		$(this).parents(".sub_gnb").stop(true,true).fadeOut(300);
	});
	*/
	var st = 0;
	$(window).scroll(function () { 
		st = $(document).scrollTop(); 
	});
	
	$('.gnb').mouseenter(function() {
        $(this).find('.sub_gnb').stop().slideDown();
        $('.subBar').addClass('active');
		

		    $('header').css({background:'#fff',color:'#000'});
        $('.gnb>li>a').css({color:'#000'});
		    $('.head_logo a img').css({filter: 'none'});
        $('.util_hd_menu_box li a').css({color:'#000'});
        $('.util_hd_menu li::after').css({background:'#000'});
        
        //test
		    $('.head_ment img').attr("src", "./images/common/pic2.png");

    });
    $('.gnb').mouseleave(function() {
        $(this).find('.sub_gnb').stop().slideUp();
        $('.subBar').removeClass('active');
		
		

		//console.log(st);
		
		
	    if (st > 0 || $(".mainimg").length == 0) {
	        $('header').css({background:'#fff',color:'#000'});
	        $('.gnb>li>a').css({color:'#000'});
			    $('.head_logo a img').css({filter: 'none'});
	        $('.util_hd_menu_box li a').css({color:'#000'});
	        $('.util_hd_menu li::after').css({background:'#000'});
                 
          //test
			    $('.head_ment img').attr("src", "./images/common/pic2.png");
	    } else {
  			$('header').css({background:'transparent'})
  			$('.head_logo a img').css({filter: 'invert(100%) sepia(0%) saturate(12%) hue-rotate(267deg) brightness(101%) contrast(102%)'});
  			$('.gnb>li>a').css({color:'#fff'});
  			$('.util_hd_menu_box li a').css({color:'#fff'});
  			$('.util_hd_menu li::after').css({background:'#fff'});
        
        //test
			  $('.head_ment img').attr("src", "./images/common/pic1.png");
		}
    });

	/********* m_gnb **********/
	$(".m_gnb_btn").click(function(e){
		mGnbOn = true;
		black_bg_over();
		$(".m_gnb_bg").show().animate({opacity:0.5}, 400);
		$(".m_gnb_wrap").show().animate({right:0}, 400, "easeOutQuint");
	});
	$(".m_gnb_bg, .m_gnb_close").click(function(e){
		mGnbClose();
		return false;
	});

	$mGnb.find("> li > a").on("click",function(e){
		mGnbDirect = $(this).attr("data-direct");
		if(!mGnbDirect){
			if(!$(this).hasClass("active")){
				$mGnb.find("> li > a").removeClass("active");
				$(this).addClass("active");
				$(".m_sub_gnb:visible").stop(true,true).slideUp();
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideDown();
			}
			else{
				$(this).removeClass("active");
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideUp();
			}
			return false;
		}
	});
	
	var mGnbOn = false;
	$(window).resize(function(){
		/* mGnb_control */
		windowW = window.innerWidth;
		if(windowW>=991){
			if(mGnbOn){
				mGnbClose();
			}
		}
	});
	$(window).trigger("resize");

	function mGnbClose(){
		$(".m_gnb_bg").stop().animate({opacity:0}, 400, function(e){
			$(this).hide();
		});
		$(".m_gnb_wrap").stop().animate({right:-300}, 400, "easeOutQuint", function(e){
			$(this).hide();
			black_bg_leave();
		});
		mGnbOn = false;
	}
	
	/* black_bg_function */
	function black_bg_over(){
		$("body").css({"overflow-y":"hidden"});
	}
	function black_bg_leave(){
		$("body").css({"overflow-y":"visible"});
	}
	/********* // m_gnb **********/
	
	/* head_sch */
	$(".head_sch_btn").click(function(){
		if(!$(this).hasClass("close")){
			headSchOpen();
		}
		else{
			headSchClose();
		}
	});
	
	$(".header").on("mouseleave",function(){
		headSchClose();
	});

	function headSchOpen(){
		$(".head_sch_box").show();
		$(".head_sch_btn:not('.close')").hide();
		$(".head_sch_btn.close").show();
	}

	function headSchClose(){
		$(".head_sch_box").hide();
		$(".head_sch_btn.close").hide();
		$(".head_sch_btn:not('.close')").show().focus();
	}

	/* top_btn */
	var $topBtn = $(".top_btn");

	$topBtn.click(function(){
		$("html,body").animate({scrollTop:0}, 300);
	});
	
	/* foot_fam_list */
	var $footFamBtn = $(".foot_fam_btn"),
		$footFamList = $(".foot_fam_list");
	$footFamBtn.click(function(e){
		if($footFamList.is(":hidden")){
			$footFamBtn.addClass("active");
			$footFamList.show();
		}
		else{
			footFamClose();
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		footFamClose();
	});

	function footFamClose(){
		$footFamBtn.removeClass("active");
		$footFamList.hide();
	}

	/* attach */
	$(".attach_vinput").click(function(){
		$(this).parents('.attach_vbox').siblings(".attach_input").trigger("click");
	});
	$('.file_btn').click(function(e){
		e.preventDefault();
		$(this).parents('.attach_vbox').siblings(".attach_input").trigger("click");
	});
	
	
	$(".attach_input").on("change",function(){
		var attText = $(this).val();
		var attTextIndex = attText.lastIndexOf("\\") + 1;
		attText = attText.slice(attTextIndex);
		$(this).next().find(".attach_vinput").val(attText);
	});

	/* basic_tab.onoff */
	var basicTabIndex;
	$(".basic_tab.onoff li a").click(function(){
		basicTabIndex = $(this).parent().index();
		$(this).parent().addClass("active").siblings().removeClass("active");
		if($(".basic_tab_con_box").length != 0)
			$(this).parent().parent().siblings(".basic_tab_con_box").children().hide().eq(basicTabIndex).stop().fadeIn();

		return false;
	});


	// 지원하지 않는 브라우저
	$('.browser_pop_close').click(function(e){
		e.preventDefault();
		$('.board_layer_pop_wrap.browser_pop').css({'display':'none'});
	});

	// IE10 이하에서만 팝업창 띄우기
	var agent = navigator.userAgent.toLowerCase();
	if ( agent.indexOf("msie") != -1 ) {
		$('.board_layer_pop_wrap.browser_pop').css({'display':'block'});
	}
});