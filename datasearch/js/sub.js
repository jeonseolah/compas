$(function(){
	/* layer_pop */
    var layerPopNum = 0;
    $("[data-layeropen]").click(function(){
        $("body").css({"overflow":"hidden"});
        layerPopNum = $(this).attr("data-layeropen");
        $(".board_layer_pop_wrap[data-layernum='" + layerPopNum + "']").css({'display':'block'}).focus();
        return false;
    });
    $(".close_btn, [data-layerclose]").click(function(){
        $("body").css({"overflow":"visible"});
        $(".board_layer_pop_wrap").css({'display':'none'});
        $("[data-layeropen='" + layerPopNum + "']").focus();
        return false;
    });


    $(window).on(function(){
        if($(".pj_tab_box").length != 0){
            var pjTabSwiper = new Swiper('.pj_tab_box', {
                slidesPerView: 'auto',
                freeMode: true,
                watchOverflow: true
            });
        }
    });


    /* 참여하기 참여방식 선택 */
    $('.team_check_box .radio_each input:radio').click(function(){
        if($('#one').is(":checked") == true) {
            $('.team_name_btn .form_group input').attr('disabled', true );
        }else {
            $('.team_name_btn .form_group input').attr('disabled', false );
        }
    });

    /* 비밀번호 체크리스트 */
    $(".pwd_hover_inp").focus(function(){
        $(".pwd_hover_box").show();
    });
    $(".pwd_hover_inp").blur(function(){
        $(".pwd_hover_box").hide();
    });

    /* pj tab */
    $(".pj_snb_box .pj_snb li").click(function(e){
        e.preventDefault();  
        var pjIndex = $(this).index();
        $(".pj_snb_box .pj_snb li").removeClass('active');
       
        $(this).addClass('active');

        $('.pj_con_box .pj_con').css({'display':'none'});
        $('.pj_con_box .pj_con').eq(pjIndex).css({'display':'block'});
    });

    // 아이디, 비밀번호 찾기
    $('.login_find_tab li').click(function(e){
        e.preventDefault();
        var loginFindIndex = $(this).index();
        $('.login_find_tab li').removeClass('active');
        $(this).addClass('active');

        $('.login_find_box .login_find_con').css({'display':'none'});
        $('.login_find_box .login_find_con').eq(loginFindIndex).css({'display':'block'});
    });


    if($('div').hasClass('sub_nav_box') ){
        //swiper pj nav
        var navSwiper = new Swiper('.sub_nav_swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            roundLengths: true,
            freeMode: true,
            watchOverflow: true,

            breakpointsInverse: true,
            breakpoints: {
                767 : {
                    spaceBetween: 30,
                },
                480 : {
                    spaceBetween: 30,
                }
            }
        });
    }
    
    // more_box 열기
    $('.more_box_btn').click(function(e){
        e.preventDefault();
            if(!$(this).hasClass('open')){
                //열기
                $(this).parent('.more_box').children('.more_box_inner').css({'max-height':"none"});
                $(this).addClass('open');
            }else{
                //닫기
                $(this).parent('.more_box').children('.more_box_inner').css({'max-height':"300px"});
                $(this).removeClass('open');
            }
    });

    // data download
    $('.data_tab_list li').click(function(e){
        e.preventDefault();
        $('.data_tab_list li').removeClass('active');
        $(this).addClass('active');
        var dataIndex = $(this).index();
        $(this).parents('.data_down_body').find('.about_file').find('.about_file_con').css({'display':'none'});
        $(this).parents('.data_down_body').find('.data_columns').find('.data_colum_con').css({'display':'none'});
        $(this).parents('.data_down_body').find('.about_file').find('.about_file_con').eq(dataIndex).css({'display':'block'});
        $(this).parents('.data_down_body').find('.data_columns').find('.data_colum_con').eq(dataIndex).css({'display':'block'});
    });

    //faq 아코디언 
    $('.acco_tit').click(function(){
        if($(this).parent().hasClass('show')){
            $('.acco_list li').removeClass('show');
        }else{
            $('.acco_list li').removeClass('show');
            $(this).parent().addClass('show');
        }
    });
    

    var winW;
    var snbSwiper;
    function snbResize(){
        winW = $(window).width();

        if(winW >= 991){
            if($('div').hasClass('pj_snb_box')){
                if(snbSwiper != undefined){
                    snbSwiper.destroy(true, true);
                }

                $('.pj_snb_box').removeClass('snb_swiper');
                $('.pj_snb').removeClass('swiper-wrapper');
                $('.pj_snb > li').removeClass('swiper-slide');
            }
        }else {
            /* 리뉴얼전 사용했던듯.....  
            if($('div').hasClass('pj_snb_box')){
                if(snbSwiper != undefined){
                    snbSwiper.destroy(true, true);
                }
                $('.pj_snb_box').addClass('snb_swiper');
                $('.pj_snb').addClass('swiper-wrapper');
                $('.pj_snb > li').addClass('swiper-slide');

                snbSwiper = new Swiper('.snb_swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    roundLengths: true,
                    freeMode: true,
                    watchOverflow: true,
                    breakpointsInverse: true,
                    centeredSlidesBounds: true,
                });
            }*/
        }
    }
    snbResize();
    $(window).resize(function(){
        snbResize();
    });
  



});