if($(".mainimg").length == 0) {
    $('header').css({background:'#fff',color:'#000'});
    $('.gnb>li>a').css({color:'#000'});
	  $('.head_logo a img').css({filter: 'none'});
    $('.util_hd_menu_box li a').css({color:'#000'});
    $('.util_hd_menu li::after').css({background:'#000'});
    
    //test
	  $('.head_ment img').attr("src", "/images/common/pic2.png");
}

$(window).scroll(function(){
    var st = $(this).scrollTop();

    if (st > 0 || $(".mainimg").length == 0) {
        $('header').css({background:'#fff',color:'#000'});
        $('.gnb>li>a').css({color:'#000'});
		    $('.head_logo a img').css({filter: 'none'});
        $('.util_hd_menu_box li a').css({color:'#000'});
        $('.util_hd_menu li::after').css({background:'#000'});
        
        //test
	      $('.head_ment img').attr("src", "/images/common/pic2.png");
    } else {
        $('header').css({background:'transparent'})
    		$('.head_logo a img').css({filter: 'invert(100%) sepia(0%) saturate(12%) hue-rotate(267deg) brightness(101%) contrast(102%)'});
    		$('.gnb>li>a').css({color:'#fff'});
    		$('.util_hd_menu_box li a').css({color:'#fff'});
    		$('.util_hd_menu li::after').css({background:'#fff'});
       
         //test
    	  $('.head_ment img').attr("src", "/images/common/pic1.png");
    }
/*
	$('header').mouseenter(function(){
		$(this).addClass('active');
		$('.subBar').addClass('active');
		$('.gnb .sub_gnb').addClass('active');
	});
	$('header').mouseleave(function(){
		$(this).removeClass('active');
		$('.subBar').removeClass('active');
		$('.gnb .sub_gnb').removeClass('active');
	});
*/
});

//관리자 모바일버튼
if($(".card-header2").length > 0){
	$(".card-header2").prepend('<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3" style="box-shadow: none;vertical-align: top;margin-top: 4px;"><i class="fa fa-bars"></i></button>');	
}



/**
  공통 라이브러리
**/

/*****************************************************************
 * 공통 초기화 모듈
 * 
 *****************************************************************/
function disableclick(event){
    if (event.button==2) {
        alert("오른쪽 마우스는 금지됩니다.");
        return false;
    }
}

var common_init = function() {


/*
	//개발자 도구와 오른쪽 마우스 막기
	    $(document).bind('keydown',function(e){
	        if ( e.keyCode == 123 ) { //f12
	            e.preventDefault();
	            e.returnValue = false;
	        }
	    });
	    
	    document.onmousedown=disableclick;
    //개발자 도구와 오른쪽 마우스 막기 끝
    */
    
    
    //관리자 메뉴고정
	    var urlParam =  get_query();
	    if(urlParam.adminMenuId != undefined){
	    	$("#mIdP"+urlParam.adminMenuId).addClass("show");
	    }
    //관리자 메뉴고정 끝
    
    //숫자만 입력
	    //숫자 마침표만   onKeyup="this.value=this.value.replace(/[^-\.0-9]/g,'');"
	    //숫자만 onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"
	    $(".fcNum").each(function(){
	    	$(this).attr("onKeyup","this.value=this.value.replace(/[^0-9]/g,'');");
		});
		
		$(".fcNum2").each(function(){
	    	$(this).attr("onKeyup","this.value=this.value.replace(/[^-\.0-9]/g,'');");
		});
    //숫자만 입력 끝

    /*
    각 화면 상단 탭 on표시
    */
    var um_url = get_url2();
    var menuIsOn = false;
    if(um_url.indexOf("datapdsSearch") != -1 || um_url.indexOf("datapdsinfo") != -1 || um_url.indexOf("/study?brdTypeCd=21") != -1 || um_url.indexOf("/studyinfo?brdTypeCd=21") != -1 || um_url.indexOf("/studyedit?brdTypeCd=21") != -1){   
    	if($("#um_id2").val() != undefined){
    		$('#um_id2').attr('class','on');
    		menuIsOn = true;
    	}
    }else if(um_url.indexOf("integratedSearch") != -1 || um_url.indexOf("/study?brdTypeCd=22")!=-1 || um_url.indexOf("/studyinfo?brdTypeCd=22") != -1 || um_url.indexOf("/studyedit?brdTypeCd=22") != -1 || um_url.indexOf("diffusion")!=-1){   

    	if($("#um_id3").val() != undefined){
    		$('#um_id3').attr('class','on');
    		menuIsOn = true;

    	}
    }else if(um_url.indexOf("/notice?brdTypeCd=08") != -1 || um_url.indexOf("/study?brdTypeCd=23") != -1 || um_url.indexOf("/studyinfo?brdTypeCd=23") != -1 || um_url.indexOf("/studyedit?brdTypeCd=23") != -1 || um_url.indexOf("/noticeinfo?brdTypeCd=08") != -1){ 

    	if($("#um_id4").val() != undefined){
    		$('#um_id4').attr('class','on');
    		menuIsOn = true;
    	}
    }else if(um_url.indexOf("/user/myPage/login")!=-1){
        $('#right_snb').hide();
        menuIsOn = true;
    }

    if(!menuIsOn){
	    var um_url = get_url();
        if(um_url.indexOf("datapdsMap") != -1 || um_url.indexOf("intro") != -1 || um_url.indexOf("vs") != -1 || um_url.indexOf("gis") != -1 || um_url.indexOf("notice") != -1  || um_url.indexOf("profile") != -1 || um_url.indexOf("/competition/info")!=-1 ){
	    	if($("#um_id1").val() != undefined){
	    		$('#um_id1').attr('class','on');
	    	}
        }else if(um_url.indexOf("datapdsSearch") != -1 || um_url.indexOf("datapdsinfo") != -1 || um_url.indexOf("apply") != -1 || um_url.indexOf("see") != -1 || um_url.indexOf("qna") != -1 || um_url.indexOf("subj") != -1 || um_url.indexOf("modelsee") != -1){
            if($("#um_id2").val() != undefined){
                $('#um_id2').attr('class','on');
            }
        }else if(um_url.indexOf("integratedSearch") != -1 || um_url.indexOf("write") != -1 || um_url.indexOf("faq") != -1 || um_url.indexOf("certificate") != -1 || um_url.indexOf("modeldata") != -1){
	    	if($("#um_id3").val() != undefined){
	    		$('#um_id3').attr('class','on');
	    	}
	    }else if(um_url.indexOf("reqFile") != -1){
	    	if($("#um_id4").val() != undefined){
	    		$('#um_id4').attr('class','on');
	    	}
	    }else if(um_url.indexOf("survey") != -1 || um_url.indexOf("getSurveyPart") != -1){
	    	if($("#um_id4").val() != undefined){
	    		$('#um_id5').attr('class','on');
	    	}
	    }
    }

    /*
    상단 이미지, 바탕 색
    */
    var um_url2 = get_url2();
    //COMPAS
    if(um_url2.indexOf("/write")!=-1){ 
        $('.mainimg').attr('style','background:url(/images/newmain/intro_main_2.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#0044AF');

    //분석과제
    }else if(um_url2.indexOf("/subj/past")!=-1 || um_url2.indexOf("/subj/competition")!=-1 || um_url2.indexOf("/rank")!=-1 || um_url2.indexOf("/user/myPage/eval")!=-1 || um_url2.indexOf("/user/myPage/evalSubj")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/competition_main_2.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#F7B400');

        if(um_url2.indexOf("/list?listCase=competition")!=-1){
            $('.sub_top_tit').text('진행 중 과제');
            $('#desc').text('현재 진행중인 과제 목록을 제공합니다.');
        }else if(um_url2.indexOf("/list?listCase=past")!=-1){
            $('.sub_top_tit').text('종료 된 과제');
            $('#desc').text('종료된 과제에 대한 분석모델 소스, 보고서, 데이터 셋등을 제공합니다.');
        }else if(um_url2.indexOf("/list?listCase=iac")!=-1){
            $('.sub_top_tit').text('산학협력 과제');
            $('#desc').text('산학협력 과제로 진행된 과제를 제공합니다. 이는 멤버쉽에 의해 제한적으로 운영됩니다.');
        }else if(um_url2.indexOf("/list?listCase=example")!=-1){
            $('.sub_top_tit').text('학습용 과제');
            $('#desc').text('COMPAS가 제공하는 다양한 데이터를 활용하여 데이터분석을 학습할 수 있습니다.');
        }
	//학습용과제
    }else if(um_url2.indexOf("/subj/example")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/exam_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#a8d4f4');
        
    //자료실
    }else if(um_url2.indexOf("/gis")!=-1 || um_url2.indexOf("/gisinfo")!=-1 || um_url2.indexOf("/gisedit")!=-1 || um_url2.indexOf("/study")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/data_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#0C4D8F');

    //커뮤니티
    }else if(um_url2.indexOf("/notice")!=-1 || um_url2.indexOf("/noticeinfo")!=-1 || um_url2.indexOf("/qna")!=-1|| um_url2.indexOf("/qnainfo")!=-1|| um_url2.indexOf("/qnaedit")!=-1|| um_url2.indexOf("/survey")!=-1|| um_url2.indexOf("/getSurveyPart")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/notice_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#93B4EA');

    //지자체 활용
    }else if(um_url2.indexOf("/vs")!=-1 || um_url2.indexOf("/modelsee")!=-1 || um_url2.indexOf("/modeldata")!=-1 || um_url2.indexOf("/diffusion")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/gis_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#0C4D8F');

    //마이페이지
    }else if(um_url2.indexOf("/user/myPage")!=-1){
        $('.mainimg').attr('style','background:url(/images/newmain/myPage_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#35A8DF');

    //데이터셋
    }else if(um_url2.indexOf("/datapds")!=-1 || um_url2.indexOf("/integratedSearch") != -1){ 
        $('.mainimg').attr('style','background:url(/images/newmain/vs_main.jpg) no-repeat 50% 50%;');
        $('#s1').attr('style','background:#01437F');
    }
}

/*
  URL 파라메터 정보 가져오기
*/
function get_query(){ 
	var url = document.location.href; 
	var qs = url.substring(url.indexOf('?') + 1).split('&'); 
	for(var i = 0, result = {}; i < qs.length; i++){ 
		qs[i] = qs[i].split('='); 
		result[qs[i][0]] = decodeURIComponent(qs[i][1]); 
	} 
	return result; 
}

//호출 url 반환 메뉴링크만
function get_url(){ 
	var url = document.location.href; 
	var qs = url.substring(url.indexOf('?') + 1).split('&');
	var tt = ""; 
	if(url.indexOf('?') != -1){
		tt = url.substring(0,url.indexOf('?'));
	}else{
		tt = url;
	}
	var s = tt.split("/");
	//console.log(s);
	//console.log(s.length);
	//console.log(s[s.length-1]);
	return s[s.length-1]; 
}

//변수포함 풀 url
function get_url2(){
	return  document.location.href; 
}

//이미지 존재하지않을경우 기본이미지
var getDefaultImage = function(error_element) {
    $(error_element).prop('src', '/images/user_default.png');
}

/*****************************************************************
//문자열에서 html 태그 제거하기
//i 와 b 태그만 허용하고 그 외의 태그는 모두 제거할때 아래와 같이 하면 됩니다.
//var str = strip_tags('<p>Kevin</p> <b>van</b> <i>Zonneveld</i>', '<i><b>');
 *****************************************************************/
function strip_tags (input, allowed) { 
    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); 
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi ,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '')
                .replace(tags, function ($0, $1) {return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';});
}

/*****************************************************************
 * 폼 체크
 *
 *****************************************************************/
var fnValidCheck = function(){
	var cnt = 0;
	
	
	//1.validation check
	$(".required1").each(function(){
		if($(this).val() == "" || $(this).val() == null || $(this).val() == undefined){
		//	console.log($(this));
		//	alert($(this).attr('id') + " : "+ $('.'+$(this).attr('id')).text());
			alert($('.'+$(this).attr('id')).text() + "을/를 입력해 주세요");
			$(this).focus();
			cnt++;
			return false;
		}
	});
	if(cnt>0) return false;
	
	//2.날짜 체크 YYYY-MM-DD
	$(".fcDate").each(function(){
		if(!fcDate($(this).val())){
			$(this).focus();
			alert($('.'+$(this).attr('id')).text() + "의 날짜형식이 잘못 되었습니다.(YYYY-MM-DD)");
			cnt++;
			return false;
		};
	});
	if(cnt>0) return false;
	
	//3.날짜 체크 YYYY-MM-DD ~ YYYY-MM-DD
	$(".fcDate2").each(function(){
		if(!fcDate2($(this).val())){
			alert($('.'+$(this).attr('id')).text() + "의 날짜형식이 잘못 되었습니다.(YYYY-MM-DD ~ YYYY-MM-DD)");
			$(this).focus();
			cnt++;
			return false;
		};
	});
	if(cnt>0) return false;
	

	//4.이메일 체크
	$(".fcEmail").each(function(){
		if(!fcEmail($(this).val())){
			alert("이메일 형식이 잘못되었습니다. 이메일 주소를 확인 해 주십시오.");
			$(this).focus();
			cnt++;
			return false;
		};
	});
	if(cnt>0) return false;
	
	return true;
};

//Date Check
function fcDate(val){
	var reVal = true;
	
	if(val)
	{
		//if(!val)	return false;
		
		var regDate = /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
		if (!regDate.test(val)) {
			//alert("잘못된 날짜입니다. 다시 한 번 확인해 주십시오.");
			reVal = false;
		}
	}
	
	return reVal;
}

//Date Check2
function fcDate2(val){
	var reVal = true;
	
	if(val)
	{
		//if(!val)	return false;
		
		var regDate = /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ~ (19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
		
		if (!regDate.test(val)) {
			//alert("잘못된 날짜입니다. 다시 한 번 확인해 주십시오. fcDate2()");
			reVal = false;
		}
	}
	
	return reVal;
}

//email
function fcEmail(val){
	var reVal = true;
	if(val)
	{
		//if(!val) return false;
		
		var reg_email=/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
		if (val.search(reg_email) == -1){
			reVal = false;
		}
	}
	
	return reVal;
}


/*****************************************************************
 * 보고서 팝업
 *
 *****************************************************************/
var reportPopup = function(rptFile, data, param) {
	//param 규칙은   p1=333&p2=555&p3=한글
    if (rptFile == null || rptFile == "") {
		alert("보고서 파일명이 없습니다.");
		return;
	}
	
	var s = new Date().getMilliseconds();
	var frm = $('<form id="openReport" action="' + reportUrl + '" method="post" target="clip' + s + '" ></form>');
	frm.appendTo('body');
	frm.append($('<input type="hidden" name="rptFile" value="' + rptFile + '">'));
	//console.log(JSON.stringify(data));
	//console.log(data);
	
	frm.append($('<input type="hidden" name="data" value=\'' + JSON.stringify(data) + '\'>'));
	frm.append($('<input type="hidden" name="param" value="' + param + '">'));
	
	//console.log(frm);
	
	window.open('','clip'+s,'width=1000,height=800,top=10,left=10,toolbar=no,menubar=no,lacation=no,scrollbars=no,status=no');
	frm.submit();
}

var reportHref = function(rptFile, data, param) {
	//param 규칙은   p1=333&p2=555&p3=한글
    if (rptFile == null || rptFile == "") {
		alert("보고서 파일명이 없습니다.");
		return;
	}
		
	var s = new Date().getMilliseconds();
	var frm = $('<form id="openReport" action="' + reportUrl + '" method="post" ></form>');
	frm.appendTo('body');
	frm.append($('<input type="hidden" name="rptFile" value="' + rptFile + '">'));
	//console.log(JSON.stringify(data));
	//console.log(data);
	
	frm.append($('<input type="hidden" name="data" value=\'' + JSON.stringify(data) + '\'>'));
	frm.append($('<input type="hidden" name="param" value="' + param + '">'));
	
	//console.log(frm);
		
	frm.submit();
}

/*****************************************************************
 * row rowIndex
 * Model 의 list index
 *****************************************************************/
var getRowIndex = function(evt) {
    // ex) <tr data-row=1>
    return evt.currentTarget.parentNode.dataset.row;
}

/*****************************************************************
 * Confirm 박스
 * @ bootbox
 *****************************************************************/
var confirmDg = function(tit, msg, callbackFct) {

    bootbox.confirm({
        title: tit,
        message: msg,
        buttons: {
            cancel: {
                label: '취소'
            },
            confirm: {
                label: '확인'
            }
        },
        callback: callbackFct
    });
}

/*****************************************************************
 * setTableColumnHeader - Table theader 구성
 *
 *****************************************************************/
var setTableColumnHeader = function(tableId, column) {
    var html = '';

    $('#' + tableId + ' > thead').empty();
    html = '<tr>';
    $(column).each(function(i) {

        style = 'style="text-align : ' + column[i].align + '; ';
        style += (column[i].align == 'left') ? 'padding-left : 20px;' : '';
        style += (column[i].width === undefined) ? 'width : 100px"' : 'width : ' + column[i].width + 'px"';

        html += '<th class="sm-pd" ' + style + '>' + column[i].title + '</th>';
    });
    html += '</tr>';
    $('#' + tableId + ' > thead').append(html);
}

/*****************************************************************
 * setNodata - No data 처리
 *
 *****************************************************************/
var setNodata = function(tableId, spanNumber) {
    var html = '<tr id="noTr" class="text-center"><td colspan="' + spanNumber + '">' + message.noData + '</td></tr>';
    $('#' + tableId + ' > tbody:last').append(html);
    $('#' + tableId + ' > tfoot').hide();
}

/*****************************************************************
 * pagenation - 초기화
 * @ jqGrid
 * pageSize : page 목록 표현 갯 수 - [1][2]...[9][10]
 * // TO-DO : first, last, pre, next 미구현
 *****************************************************************/
var pagenation = function(tableId, pageDivId, pageModel) {

    var pagingSize = 10; // page 크기 : [1][2]...[10]
    var pageSize = pageModel.pageSize; // row per page
    var pageIndex = pageModel.pageIndex;
    var totalCount = pageModel.totalCount;

    var pageStep = Math.ceil(pageIndex / pagingSize);
    var startPageNo = ((pageStep - 1) * pagingSize) + 1;
    var endPageNo = startPageNo + pagingSize - 1;

    var lastPageNo = Math.ceil(totalCount / pageSize);
    var lastPageStep = Math.ceil(lastPageNo / pagingSize);

    startPageNo = (startPageNo < 1) ? 1 : startPageNo;
    endPageNo = (endPageNo > lastPageNo) ? lastPageNo : endPageNo;

    var prevPage = (Number(startPageNo) - Number(pagingSize)) < 1 ? 1 : (Number(startPageNo) - Number(pagingSize));

    $("#" + pageDivId).empty();

    var pageInner = '';

    pageInner += '<a id="' + tableId + '.first.1" data-page="first" href="#" class="page_arrow l2">맨앞</a>';
    pageInner += '<a id="' + tableId + '.prev.' + prevPage + '" href="#" data-page="prev" class="page_arrow l1"><span class="hide">이전</span></a>';

    var pageId;
    var active, disable;

    for (var i = startPageNo; i <= endPageNo; i++) {
        pageId = tableId + ".page" + i;
        active = (i == pageIndex) ? ' active' : '';
        disable = (i > lastPageNo) ? ' disabled' : '';

        if (i > lastPageNo) {
            pageInner += '<a href="#">' + i + '</a>';
        } else {
            pageInner += '<a id="' + tableId + '.pageIndex.' + i + '" href="#" class="' + active + '">' + i + '</a>';
        }
    }

    var nextPage = (Number(pagingSize) + Number(startPageNo)) > lastPageNo ? lastPageNo : (Number(pagingSize) + Number(startPageNo));

    pageInner += '<a id="' + tableId + '.next.' + nextPage + '" href="#" class="page_arrow r1"><span class="hide">다음</span></a>';
    pageInner += '<a id="' + tableId + '.last.' + lastPageNo + '"  href="#" class="page_arrow r2">맨끝</a>';

    $("#" + pageDivId).append(pageInner);
}


var pagenation2 = function(tableId, pageDivId, pageModel) {

    var pagingSize = 10; // page 크기 : [1][2]...[10]
    var pageSize = pageModel.pageSize; // row per page
    var pageIndex = pageModel.pageIndex;
    var totalCount = pageModel.totalCount;

    var pageStep = Math.ceil(pageIndex / pagingSize);
    var startPageNo = ((pageStep - 1) * pagingSize) + 1;
    var endPageNo = startPageNo + pagingSize - 1;

    var lastPageNo = Math.ceil(totalCount / pageSize);
    var lastPageStep = Math.ceil(lastPageNo / pagingSize);

    startPageNo = (startPageNo < 1) ? 1 : startPageNo;
    endPageNo = (endPageNo > lastPageNo) ? lastPageNo : endPageNo;

    var prevPage = (Number(startPageNo) - Number(pagingSize)) < 1 ? 1 : (Number(startPageNo) - Number(pagingSize));

    $("#" + pageDivId).empty();

    var pageInner = '';

    pageInner += '<li><a id="' + tableId + '.first.1" data-page="first" href="#" class="page-link">맨앞</a></li>';
    pageInner += '<li><a id="' + tableId + '.prev.' + prevPage + '" href="#" data-page="prev" class="page-link"><span >이전</span></a></li>';

    var pageId;
    var active, disable;

    for (var i = startPageNo; i <= endPageNo; i++) {
        pageId = tableId + ".page" + i;
        active = (i == pageIndex) ? ' active' : '';
        disable = (i > lastPageNo) ? ' disabled' : '';

        if (i > lastPageNo) {
            pageInner += '<li class="page-item"><a href="#" class="page-link">' + i + '</a></li>';
        } else {
            pageInner += '<li class="page-item"><a id="' + tableId + '.pageIndex.' + i + '" href="#" class="page-link">' + i + '</a></li>';
        }
    }

    var nextPage = (Number(pagingSize) + Number(startPageNo)) > lastPageNo ? lastPageNo : (Number(pagingSize) + Number(startPageNo));

    pageInner += '<li><a id="' + tableId + '.next.' + nextPage + '" href="#" class="page-link"><span >다음</span></a></li>';
    pageInner += '<li><a id="' + tableId + '.last.' + lastPageNo + '"  href="#" class="page-link">맨끝</a></li>';

    $("#" + pageDivId).append(pageInner);
}

/*****************************************************************
 * parsePage - 페이지 정보
 *
 *****************************************************************/
var parsePage = function(evt) {
    var page = $(evt.currentTarget)[0].id.split('.');

    if (page.length < 3) {
        return;
    }
    return page[2];
}

/*****************************************************************
 * 입력 validation 처리 (backbone-validation)
 * RULE : form-group 의 id 는 dataModel 명으로 정의
 *****************************************************************/
var setValidation = function(attr, error) {
    var formGroup = $('#' + attr);

    if (error === undefined) {
        formGroup.removeClass('has-error');
        formGroup.find('.help-inline').text('');
    } else {
        formGroup.addClass('has-error');
        formGroup.find('.help-inline').text(error);
    }
}

/*****************************************************************
 * contextMenu
 *
 *****************************************************************/
var contextMenu = function(evt, menu, divId) {
    //evt.preventDefault();

    $('body').click(function(e) {
        $(".contextMenu").remove();
    });

    $(".contextMenu").remove();

    var contextMenu = document.createElement("div");
    $(contextMenu).addClass("contextMenu");
    var ul = document.createElement("ul");
    $(contextMenu).append(ul);

    for (var i = 0; i < menu.length; ++i) {
        var menuItem = document.createElement("li");
        if (menu[i].break) {
            $(menuItem).addClass("break");
            $(ul).append(menuItem);
            continue;
        }

        var title = menu[i].title;
        var callback = menu[i].callback;

        $(menuItem).addClass("menuitem");
        $(menuItem).text(title);
        menuItem.callback = callback;

        $(menuItem).click(function() {
            $(contextMenu).hide();
            this.callback.call();
        });

        if (menu[i].submenu) {
            var expandSymbol = document.createElement("div");
            $(expandSymbol).addClass("expandSymbol");
            $(menuItem).append(expandSymbol);

            var subMenu = this.setupMenu(menu[i].submenu);
            $(subMenu).addClass("subMenu");
            subMenu.parent = contextMenu;
            menuItem.subMenu = subMenu;
            $(subMenu).hide();
            $(this.el).after(subMenu);

            $(menuItem).mouseenter(function() {
                $(".subMenu").hide();
                var menuItem = this;
                menuItem.selected = true;
                setTimeout(function() {

                    if (menuItem.selected) {
                        var offset = $(menuItem).offset();
                        var left = offset.left;
                        var top = offset.top;
                        var width = $(menuItem).width();
                        var subMenu = menuItem.subMenu;
                        var newLeft = left + width - 5;

                        $(subMenu).css({ left: newLeft, top: top });
                        $(subMenu).show();
                    }
                }, 500);
            });
            $(menuItem).mouseleave(function() { this.selected = false; });
        }
        $(ul).append(menuItem);
    }

    var x = evt.pageX;
    var y = evt.pageY;

    $(contextMenu).css({ top: y, left: x });
    $('#' + divId).after(contextMenu);
}

/*****************************************************************
 * getTableRowIndex
 * @@ row header 를 제외하기 위해 -1
 *****************************************************************/
var getTableRowIndex = function(evt, tableId) {
    //var rowIndex = $('#' + tableId + ' tr').index(evt.target.closest('tr'));
    var rowIndex = evt.target.closest('tr').rowIndex;
    return rowIndex - 1;
}

/*****************************************************************
 * getToday
 *
 *****************************************************************/
var getToday = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today
}

/*****************************************************************
 * getStringDateFormat
 * 8 자리 날짜 형식의 문자열
 *****************************************************************/
var getStringDateFormat = function(strDate) {
    if (strDate == undefined) return "-";

    var yyyyMMdd = String(strDate);
    var year = yyyyMMdd.substring(0, 4);
    var month = yyyyMMdd.substring(4, 6);
    var day = yyyyMMdd.substring(6, 8);

    return year + "-" + month + "-" + day;
}

/*****************************************************************
 * 천 단위 , 찍기
 *
 *****************************************************************/
function formatNumberThousand(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/*****************************************************************
 * alert 메시지
 *
 *****************************************************************/
function msgAlert(title, msg, callback, data) {
    bootbox.alert({
        title: title,
        message: msg,
        closeButton: false,
        //        backdrop: false,
        callback: function() {
            if (callback === undefined) return;

            callback.call(this, data);
        }
    });
}

/*****************************************************************
 * confirm 메시지
 *
 *****************************************************************/
function msgConfirm(title, msg, callback, data) {
    var that = this;

    bootbox.confirm({
        title: title,
        message: msg,
        closeButton: false,
        callback: function(result) {
            if (result) callback.call(this, data, that);
        }
    });
}

/*****************************************************************
 * 성공 메시지
 *
 *****************************************************************/
function msgSuccess(title, msg) {
    bootbox.alert({
        title: title,
        headerType: 'SUCCESS',
        message: msg,
        backdrop: true
    });
}

/*****************************************************************
 * error 메시지
 *
 *****************************************************************/
function msgError(title, msg) {
    bootbox.alert({
        title: title,
        headerType: 'FAIL',
        message: msg,
        backdrop: true
    });
}

/*****************************************************************
 * ajaxCall
 *
 *****************************************************************/
var ajaxCall = function(reqURL, reqType, data, callback) {
    var successHandler = function(data) {
        if (data.status == 'error') {
            msgError(mseesage.titleError, message.msgError);
        } else {
            if (callback !== undefined) callback.call(this, data);
        }
    };

    if (reqType == 'GET') $.get(reqURL, data, successHandler, "json");
    else $.post(reqURL, data, successHandler, "json");
}


var ajaxGetCall = function(reqURL, data, callback, errMsg) {
    var jqXHR = $.get(reqURL, data, function(resp) {
            if (resp.status == 'error') {
                msgError(mseesage.titleError, (errMsg === undefined ? message.msgError : errMsg));
            } else {
                if (callback !== undefined) callback.call(this, resp);
            }
        }, "json")
        .fail(function() {
            msgError(mseesage.titleError, message.msgError);
        });
    return jqXHR;
}

var ajaxPostCall = function(reqURL, data, callback, errMsg) {
    var jqXHR = $.post(reqURL, function(resp) {
            if (resp.status == 'error') {
                msgError(mseesage.titleError, (errMsg === undefined ? message.msgError : errMsg));
            } else {
                if (callback !== undefined) callback.call(this, resp);
            }
        }, "json")
        .fail(function() {
            msgError(mseesage.titleError, message.msgError);
        });
    return jqXHR;
}

/*****************************************************************
 * check Authority
 * isNew = true : New Wiindow
 *****************************************************************/
var isAuth = function(goUrl, isNew) {

    if (isEmpty(usrNkNm)) {
        msgAlert('알림 메시지',
            '로그인 후 정상적인 이용을 할 수 있습니다.<br><br>로그인 화면으로 이동합니다.', goLogin);
    } else {
        if (isNew) window.open(goUrl);
        else window.location = goUrl;
    }
}

/*****************************************************************
 * check Mobile
 ****************************************************************/
var isMobile = function() {
    var filter = "win16|win32|win64|mac|macintel";

    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile

            //if (navigator.platform.indexOf("Linux")) return true;

            alert('본 서비스는 모바일 환경을 지원하지 않습니다.\n\nPC 환경에서 이용해 주시기 바랍니다.');
            return false;
        }
        // else { //pc 
        //     alert('pc 접속');
        // }
    }

    return true;
}

function goLogin() {
    window.location = "/login";
}

var msgAuth = function() {

    

    if (isEmpty(usrNkNm)) {
        msgAlert('알림 메시지',
            '로그인 후 정상적인 이용을 할 수 있습니다.<br><br>로그인 화면으로 이동합니다.', goLogin);
        return false;
    }

    return true;
}

var isTeamHead = function(goUrl, applyUrl, pageParam, isNew = false) {

    if (isEmpty(usrNkNm)) {
        msgAlert('알림 메시지',
            '로그인 후 정상적인 이용을 할 수 있습니다.<br><br>로그인 화면으로 이동합니다.', goLogin);
    } else {

        $.ajax({
                url: '/subj/competition/selectTeamHead',
                dataType: 'json',
                type: 'GET',
                async: false,
                data: pageParam
            })
            .done(function(data) {
				
                if (data.team == null) {

                    msgAlert('알림 메시지',
                        '과제 참여 후 이용가능합니다.<br><br>참여 하기 화면으로 이동합니다.', goto, applyUrl + '?' + $.param(pageParam));

                } else if (data.team.isHead == false) {

                    msgAlert('알림 메시지', '팀장인 경우에만 과제 제출이 가능합니다.');

                } else {
					if (isNew) window.open(goUrl);
        			else window.location = goUrl;
                }

            })
            .fail(function(xhr, status, error) {
                onAjaxFail(xhr, status, error);
            })
            .always(function() {});
    }
}

var vowParam = null;
var isTeamGo = function(goUrl, applyUrl, pageParam, isNew = false) {

    if (isEmpty(usrNkNm)) {
        msgAlert('알림 메시지',
            '로그인 후 정상적인 이용을 할 수 있습니다.<br><br>로그인 화면으로 이동합니다.', goLogin);
    } else {
		vowParam = pageParam;
        $.ajax({
                url: '/subj/competition/selectTeamHead',
                dataType: 'json',
                type: 'GET',
                async: false,
                data: pageParam
            })
            .done(function(data) {
				
                if (data.team == null) {

                    msgAlert('알림 메시지',
                        '과제 참여 후 이용가능합니다.<br><br>참여 하기 화면으로 이동합니다.', goto, applyUrl + '?' + $.param(pageParam));

                } else {
                	vowParam.teamNo = data.team.teamNo;
                	if(data.team.vowIp == "N"){
                		showVowPopup(data.team.subjNm, data.team.today, data.team.usrId);
                	}else{
						if (isNew) window.open(goUrl);
	        			else window.location = goUrl;
        			}
                }

            })
            .fail(function(xhr, status, error) {
                onAjaxFail(xhr, status, error);
            })
            .always(function() {});
    }
}

var vowPopup = ' \
<div id="pop-1" class="main-pop-1" data-layeropen="1" > \
    <div class="main_layer_pop"> \
        <h2 class="main_pop_tit"> \
            데이터 보안 서약서 \
        </h2> \
        <div class="main_pop_inner"> \
            <div class="main_write_con"> \
					<h3>데이터 보안 서약서</h3>\
			        <p style="font-weight: bold;line-height: 25px;">본인은 COMPAS 플랫폼의 국토도시 데이터 분석 공모과제 참여시 플랫폼 이용약관 제 5조 등 제반규정을 준수하며, 플랫폼에서 제공한 비공개 데이터에 대하여 \
			            <span style="color:red">외부 누설, 남용</span> 또는 <span style="color:red">무단 유출</span>시 관계법규에 따른 어떠한 처벌도 감수할 것임을 서약합니다. \
		            </p>\
		            <br> \
			        <p style="font-weight:600;color:#888;font-size:1.15rem">※ 타 용도로 사용을 원할 경우 반드시 아래 LH COMPAS 운영팀과 사전 합의하여 주시기 바랍니다.<br>\
			        	HelpDesk : 070-4855-2071, 055-922-3664 <br>\
			        	 &#40;운영시간: 평일 09:00~18:00&#41;\
			        </p>\
			        <form action="#">\
			            <div>\
			                <label class="desc" id="title1" for="Field1">참여과제</label>\
			                <div>::subjNm::\
			                </div>\
			            </div>\
			            <div>\
			                <label class="desc" id="title1" for="Field1">아이디(닉네임)</label>\
			                <div>::usrId::\
			                </div>\
			            </div>\
			            <div>\
			                <label class="desc" id="title1" for="Field1">서약일</label>\
			                <div>::today::\
			                </div>\
			            </div>\
		            </form>\
		            <input type="checkbox" id="vowAgree"><label for="vowAgree" style="font-weight: bold;">위와 같이 서약합니다.</label>\
			        <div class="dong">\
			            <button type="button" onclick="javascript:regVow();">동의</button>\
			        </div>\
            </div> \
        </div> \
        <a href="javascript:hideVowPopup();" class="main_pop_close"><span class="hide">팝업 닫기</span></a> \
    </div> \
</div> \
';

// 팝업
var showVowPopup = function(subjNm, today, usrId) {
	$('.contents').append('<div id="vowPopup"></div>');
    $('#vowPopup').append(vowPopup.replace(/::subjNm::/gi, subjNm).replace(/::today::/gi, today).replace(/::usrId::/gi, usrId+"("+usrNkNm+")"));
    $("div[name='popupDiv']").show();
	
	$(".main-pop-1").css('top', '150px')
		.css('left', 'calc((100% - 600px)/2)')
        .css('left', '-webkit-calc((100% - 600px)/2)');
}

function hideVowPopup(){
	$("#vowPopup").remove();
}

function regVow(){
	if($("#vowAgree").is(":checked") == false){
		alert("서약 확인란을 체크해 주십시오.");
		return false;
	}
	
	$.ajax({
            url: '/subj/competition/regVow',
            dataType: 'json',
            type: 'GET',
            async: false,
            data: vowParam
        })
        .done(function(data) {
        	$("#vowPopup").remove();
			window.open(notebookUrl);			
        })
        .fail(function(xhr, status, error) {
            onAjaxFail(xhr, status, error);
        })
        .always(function() {});
}

var goto = function(url) {

    window.location = url;
}


/*****************************************************************
 * get File Extention
 *
 *****************************************************************/
var getFileExtention = function(fileName) {
    
    return fileName.split('.').pop().toLowerCase();;
}

/*****************************************************************
 * replace carriage return to br
 *
 *****************************************************************/
var toBr = function(val) {
    return (val === undefined) ? '' : val.replace(/(\r\n|\n|\r)/g, "<br/>");
}

/*****************************************************************
 * nvl
 *
 *****************************************************************/
var nvl = function(val, defaultVal) {

    if (defaultVal === undefined) defaultVal = '';
    return (val === undefined || val === '') ? defaultVal : val;
}

/*****************************************************************
 * isNullOrEmpty
 *
 *****************************************************************/
var isNullOrEmpty = function(val) {
    return (val === undefined || val === '');
}

/*****************************************************************
 * isEmpty
 *
 *****************************************************************/
var isEmpty = function(val) {
    return (val === undefined || val === '');
}

/*****************************************************************
 * getUrlParams
 *
 *****************************************************************/
var getUrlParams = function() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

/*****************************************************************
 * DateRangePicker
 *
 *****************************************************************/
var DateRangePicker = function(fromToTextId) {

    var $fromToText = $('#' + fromToTextId);

    $('#' + fromToTextId).daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
			monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    $fromToText.on('apply.daterangepicker', function(ev, picker) {

        var from = picker.startDate.format('YYYY-MM-DD');
        var to = picker.endDate.format('YYYY-MM-DD');
        $fromToText.data('from', from);
        $fromToText.data('to', to);
        $fromToText.val(from + ' ~ ' + to);
    });

    $fromToText.on('cancel.daterangepicker', function(ev) {

        $fromToText.val('');
        $fromToText.data('from', '');
        $fromToText.data('to', '');
    });

    this.setFromTo = function(from, to) {

        if (isNullOrEmpty(from) ||
            isNullOrEmpty(to)) {
            return;
        }

        $fromToText.data('from', from);
        $fromToText.data('to', to);
        $fromToText.val(from + ' ~ ' + to)
    }

    this.getFrom = function() {
        return $fromToText.data('from');
    }

    this.getTo = function() {
        return $fromToText.data('to');
    }

}

/*****************************************************************
 * Daterangepicker single test
 *
 *****************************************************************/
 var DatePicker = function(fromToTextId) {

    var $fromToText = $('#' + fromToTextId);

    $('#' + fromToTextId).daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
			monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    $fromToText.on('apply.daterangepicker', function(ev, picker) {

        var date = picker.startDate.format('YYYY-MM-DD');
        $fromToText.data('date', date);
        $fromToText.val(date);
    });

    $fromToText.on('cancel.daterangepicker', function(ev) {

        $fromToText.val('');
        $fromToText.data('date', '');
    });

    this.setDate = function(date) {

        if (isNullOrEmpty(date)) {
            return;
        }

        $fromToText.data('date', date);
        $fromToText.data('daterangepicker').setStartDate(new Date(date));
        $fromToText.data('daterangepicker').setEndDate(new Date(date));
        $fromToText.val(date)
    }

    this.getDate = function() {
        return $fromToText.data('date');
    }
}

/*****************************************************************
 * monthAndYearSelectBox Daterangepicker single test
 *
 *****************************************************************/
 var DateSelectBoxPicker = function(fromToTextId,format) {

    var $fromToText = $('#' + fromToTextId);
	
    $('#' + fromToTextId).daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: false,
		showDropdowns:true,
        locale: {
            cancelLabel: 'Clear',
			monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

	if(format==null || format==undefined || format==''){
        format='YYYY-MM-DD'
    }
	
    $fromToText.on('apply.daterangepicker', function(ev, picker) {
        //ex. YYYY-MM-DD
        var date = picker.startDate.format(format);
        $fromToText.data('date', date);
        $fromToText.val(date);
    });

    $fromToText.on('cancel.daterangepicker', function(ev) {

        $fromToText.val('');
        $fromToText.data('date', '');
    });

    this.setDate = function(date) {

        if (isNullOrEmpty(date)) {
            return;
        }

        $fromToText.data('date', date);
        $fromToText.data('daterangepicker').setStartDate(new Date(date));
        $fromToText.data('daterangepicker').setEndDate(new Date(date));
        $fromToText.val(date)
    }

    this.getDate = function() {
        return $fromToText.data('date');
    }
}

/*****************************************************************
 * humanFileSize
 *
 *****************************************************************/
var humanFileSize = function(size) {
    var i = i == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
}

/*****************************************************************
 * onAjaxFail
 * Ajax 호출시 인증이 안되어 있거나 권한이 없는 경우 처리
 *****************************************************************/
var onAjaxFail = function(xhr, status, error) {
    console.log(xhr);
    console.log(status);
    console.log(error);

    if (xhr.responseJSON != undefined) {
        var json = xhr.responseJSON;

        if (!isNullOrEmpty(json.msg)) {
            msgAlert("알림 메시지", json.msg);
        }

        if (!isNullOrEmpty(json.url)) {
            location.href = json.url;
        }
    } else {
        msgAlert("에러 메시지", message.error);
    }
}

/*****************************************************************
 * validation - rquired
 *
 *****************************************************************/
var validateRequired = function(elemSelector, message) {

    var val = $(elemSelector).val();
    if (isNullOrEmpty(val)) {
        msgAlert('알림 메시지', message, setFocus, elemSelector);
        return false;
    }

    return true;
}

var setFocus = function(elemSelector) {

    $(elemSelector).focus();
}

var setNextFocus = function(elemSelector) {

    $(elemSelector).next().focus();
}

var setFocusTo = function(elem) {

    elem.focus();
}

var applyTagFilter = function(src) {
    if(src == undefined || src == ""){
        return "";
    }
	
    return src.replace(/&amp;/gi, '&')
    .replace(/script/gi, "scr!pt")
    .replace(/alert/gi, "aIert")
    .replace(/console/gi, "consoIe")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&#40;/gi, '(')
    .replace(/&#41;/gi, ')')
    .replace(/&#47;/gi, '/')
    .replace(/#doubleslash#/gi, '//')
    .replace(/#http#/gi, 'http')
    .replace(/#svg#/gi, '<svg')
    .replace(/#locationhref#/gi, 'location.href');
}

/*****************************************************************
 * number 포맷
 * 3자리 단위마다 콤마 생성, set True
 *****************************************************************/
var setNumFmt = function(x, isSet) {

    if (x === undefined) return nvl(x, '0');

    if (isSet) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        if (!x || x.length == 0) return '';
        else {
            return (x + '').split(',').join('');
        }
    }
}

/*****************************************************************
 * datetime을 ~일전 , ~분전 등으로 변환
 *****************************************************************/
var timeBefore = function(write_time) {
    //console.log( new Date(write_time) );
    //if(write_time.substring(0, 1) == "0") return "";
    var result = "";
    var now = new Date(); //현재시간을 가져옴
    //console.log(now);
    var writeDay = new Date(write_time); //글쓴 시간
    var minus;

    //현재 년도랑 글쓴시간의 년도 비교
    if (now.getFullYear() > writeDay.getFullYear()) {
        //두개의 차이를 구해서 표시
        minus = now.getFullYear() - writeDay.getFullYear();
        result = minus + "년 전";

    } else if (now.getMonth() > writeDay.getMonth()) { //년도가 같을 경우 달을 비교해서 출력
        /////////////////////////////////////////////////////////////////////////////////////////
        if ((now.getDate() - writeDay.getDate()) > 0) {
            minus = now.getMonth() - writeDay.getMonth();
            result = minus + "달 전";
        } else {
            var month = now.getMonth() - writeDay.getMonth();
            if (month > 1) {
                month = month - 1;
                result = month + "달 전";
            } else {
                minus = 30 + (now.getDate() - writeDay.getDate());
                result = minus + "일 전 ";
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////////
    } else if (now.getDate() > writeDay.getDate()) { //같은 달일 경우 일을 계산
        minus = now.getDate() - writeDay.getDate();
        result = minus + "일 전";

    } else if (now.getDate() == writeDay.getDate()) { //당일인 경우에는
        var nowTime = now.getTime();
        var writeTime = writeDay.getTime();

        if (nowTime > writeTime) { //시간을 비교
            sec = parseInt(nowTime - writeTime) / 1000;
            day = parseInt(sec / 60 / 60 / 24);
            sec = (sec - (day * 60 * 60 * 24));
            hour = parseInt(sec / 60 / 60);
            sec = (sec - (hour * 60 * 60));
            min = parseInt(sec / 60);
            sec = parseInt(sec - (min * 60));

            if (hour > 0) { //몇시간전인지

                result = hour + "시간 전";

            } else if (min > 0) { //몇 분
                result = min + "분 전";

            } else if (sec > 0) { //몇 초
                result = sec + "초 전";
            }
        }

    }
    //console.log(result);
    return result;
}

/*****************************************************************
 * 날짜 포맷
 * 길이로 판단. 10 : YYYY-MM-DD
 *****************************************************************/
var setDateFmt = function(val, defaultSize) {
    if (defaultSize === undefined) defaultSize = 10;
    if (val === undefined) return nvl(val);
    else if (defaultSize === 10) return val.substring(0, 10);
    else return val;
}

/*****************************************************************
 * 과제리스트 셀렉트박스 목록
 * attr : cdGrpId
 *****************************************************************/
var getSubjList = function(el, etc, defVal, removeVal, isEmpty) {

    var infoParam = {
        pageSize : 1000,
        pageIndex : 1
    };

    $.ajax({
            url: '/subj/selectSubjList',
            async:false,
            dataType: 'json',
            type: 'GET',
            data: infoParam
        })
        .done(function(data) {
            var html = '';
            
            if(etc != undefined && etc != "")
            	html += '<option value="etc">기타</option>';
			
			if(isEmpty == undefined || isEmpty == true)
            	$(el).empty();
            
            
            $(data.list).each(function(i) {
                var row = this;

                if (removeVal == undefined ||
                    (removeVal.length > 0 &&
                    !removeVal.includes(row.cd))) {
					
					if(row.subjNo != removeVal)
                    	html += '<option value="' + row.subjNo + '">' + row.subjNm + '</option>';
                }
            });

            $(el).append(html);
            if (defVal == undefined || nvl(defVal) == "") {
                return;
            }
            $(el).val(defVal);
        })
        .fail(function(xhr, status, error) {
            onAjaxFail(xhr, status, error);
        })
        .always(function() {});
}

/*****************************************************************
 * 학습용과제 데이터의 과제 셀렉트박스 목록
 * 
 *****************************************************************/
var getSubjListUseExam = function(el, etc, defVal, removeVal) {

    var infoParam = {
        pageSize : 1000,
        pageIndex : 1
    };

    $.ajax({
            url: '/subj/selectSubjList',
            dataType: 'json',
            type: 'GET',
            data: infoParam
        })
        .done(function(data) {
            var html = '';
            
            if(etc != undefined && etc != "")
            	html += '<option value="etc">기타</option>';

            $(el).empty();
            
            
            $(data.list).each(function(i) {
                var row = this;
				
                if (removeVal == undefined ||
                    (removeVal.length > 0 &&
                    !removeVal.includes(row.cd))) {
					
					if(row.subjNo != removeVal && row.kindCd == "01")
                    	html += '<option value="' + row.subjNo + '">' + row.subjNm + '</option>';
                }
            });

            $(el).append(html);
            if (defVal === undefined || isEmpty(defVal)) {
                return;
            }
            $(el).val(defVal);
        })
        .fail(function(xhr, status, error) {
            onAjaxFail(xhr, status, error);
        })
        .always(function() {});
}

/*****************************************************************
 *  셀렉트박스 셋팅 목록
 * 
 *****************************************************************/
var setSelect = function(el, list, selectVal) {
	///list에 opt와 txt가 있어야함
	//$(el).empty();
	//var html = '<option value="etc">기타</option>';
	var html = '';
	
	$(list).each(function(i) {
        var row = this;
		if(row.opt != undefined){
            html += '<option value="' + row.opt + '">' + row.txt + '</option>';
        }
    });

    $(el).append(html);
    
    if(selectVal != undefined){
		$(el).val(selectVal);
	}
    
}
/*****************************************************************
 * validation - max byte length
 *
 *****************************************************************/
var chkMaxLen = function(el, elNm) {

    var val = $(el).val();
    var max = $(el).attr('maxbyte');
    var isOver = false;
    var strLen = 0;

    for (i = 0; i < val.length; i++) {
        var code = parseInt(val.charCodeAt(i));
        var char = val.substr(i, 1).toUpperCase();

        if ((char < '0' || char > '9') && (char < 'A' || char > 'Z') && (code > 255 || code < 0)) {
            strLen = strLen + 3; // UTF-8
        } else {
            strLen = strLen + 1;
        }

        if (strLen > max) {
            isOver = true;
            break;
        }
    }

    if (isOver) {
        alert(elNm + '은(는) ' + max + ' bytes 를 초과할 수 없습니다.');
        $(el).focus();
    }

    return isOver;
}

/*****************************************************************
 * 공통 코드 목록
 * attr : cdGrpId
 *****************************************************************/
var getCmmnCodeList = function(el, cdGrpId, defVal, removeVal, parentCd) {
	
    var infoParam;
    if(parentCd != undefined && parentCd != ''){
    	infoParam = {
	        cdGrpId: cdGrpId,
	        parentCd: parentCd
	    };
    }else{
	    infoParam = {
	        cdGrpId: cdGrpId
	    };
	}

    $.ajax({
            url: '/admin/selectCmmnCodeList',
            dataType: 'json',
            type: 'GET',
			async: false,
            data: infoParam
        })
        .done(function(data) {
            var html = '';
			
            $(el).empty();
            $(data.list).each(function(i) {
                var row = this;

                if (removeVal == undefined ||
                    (removeVal.length > 0 &&
                    !removeVal.includes(row.cd))) {

                    html += '<option value="' + row.cd + '">' + row.cdNm + '</option>';
                }
            });

            $(el).append(html);
            if (defVal === undefined || isEmpty(defVal)) {
                return;
            }
            $(el).val(defVal);
        })
        .fail(function(xhr, status, error) {
            onAjaxFail(xhr, status, error);
        })
        .always(function() {});
}

/*****************************************************************
 * 공통 코드 이름 조회
 *****************************************************************/
// 코드 정보 조회
var getCodeName = function(cdGrpId,cd) {
    var reCdNm='';

    var infoParam = {
        cdGrpId: cdGrpId
    };

    $.ajax({
            url: '/admin/selectCmmnCodeList',
            dataType: 'json',
            type: 'GET',
            data: infoParam,
            async:false
        })
        .done(function(data) {
            $(data.list).each(function(i) {
                var row = this;
                if(row.cd==cd){
                    reCdNm=row.cdNm;
                }
            });
            
        })
        .fail(function(xhr, status, error) {
            onAjaxFail(xhr, status, error);
        })
        .always(function() {});

    return reCdNm;
}

/*****************************************************************
 * 순번
 *
 *****************************************************************/
getRowNo = function(index, model) {
    var pageIndex = model.get("pageParam").pageIndex - 1;
    var pageSize = model.get("pageParam").pageSize;
	//console.log(index+"/"+pageSize*pageIndex+"/"+((index + 1) + pageSize * pageIndex));
    return (index + 1) + pageSize * pageIndex;
}

/*****************************************************************
 * 문자열 길이 맞추기?
 *
 *****************************************************************/
setRpad = function(value, start, end, padStr) {
    value += "";
    padStr += "";
    //console.log(value);

    while (value.trim().length < end) {
        value += padStr;
        //console.log(value);
    }
    return value.length >= end ? value.substring(start, end) : value;
}

/*****************************************************************
 * 엔터키 <br> 변환
 *
 *****************************************************************/
setBr = function(value) {

    return value.replace(/(\r\n|\n|\n\n)/gi, "<br>");
}

/*****************************************************************
 * 문자열 변환
 *
 *****************************************************************/
var changeYnTxt=function(ynTxt){
    if(ynTxt=='Y'){
        return 'O'
    }else if(ynTxt=='N'){
        return 'X'
    }
}


/*****************************************************************
 * ajax-loader
 *
 *****************************************************************/
ajaxLoader = function(message, callback, data) {

    var messageHtml = '<div class="text-center">' + message + '</div><br/><div class="ta-c"><img src="/images/common/code_loading.gif" /></div>';

    bootbox.dialog({
        message: messageHtml,
        closeButton: false
    }).on("shown.bs.modal", function(e) {

        if (callback !== undefined) {
            callback.call(this, data, this);
        }
    });
}

ajaxLoaderDone = function(loader, message, callback, data) {

    var messageHtml = '<div class="text-center">' + message + '</div>';

    $(loader).find('.bootbox-body').html(messageHtml);

    if (callback !== undefined) {
        callback.call(this, data);
    }
}

ajaxLoaderClose = function(loader) {
    $(loader).modal('hide');
}


/*****************************************************************
 * backToTop
 *
 *****************************************************************/
backToTop = function() {
    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if (top == 0) {
            $('.top_btn').fadeOut(800);
        } else {
            $('.top_btn').fadeIn(800);
        }

    });
}

/*****************************************************************
 * 과제명 포맷
 *
 *****************************************************************/
subjNameFmt = function(sggNm, subjNm) {

    if (sggNm == undefined || sggNm == '') {
        return nvl(subjNm);
    } else {
        return '(' + nvl(sggNm) + ') ' + nvl(subjNm);
    }
}

/*****************************************************************
 * 브라우저 종류 및 IE 버전 체크
 *
 *****************************************************************/
var BrowserVersionCheck = function() {
    var word;
    var versionOrType = "another";
    var ieName = navigator.appName;
    var agent = navigator.userAgent.toLowerCase();

    /*** 1. IE 버전 체크 ***/
    // IE old version ( IE 10 or Lower ) 
    if (ieName == "Microsoft Internet Explorer") {
        word = "msie ";
    } else {
        // IE 11 
        if (agent.search("trident") > -1) word = "trident/.*rv:";
        // IE 12 ( Microsoft Edge ) 
        else if (agent.search("edge/") > -1) word = "edge";
    }
    var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
    if (reg.exec(agent) != null) versionOrType = RegExp.$1 + RegExp.$2;

    /*** 2. IE가 아닌 경우 브라우저 체크 ***/
    if (versionOrType == "another") {
        if (agent.indexOf("chrome") != -1) versionOrType = "Chrome";
        else if (agent.indexOf("opera") != -1) versionOrType = "Opera";
        else if (agent.indexOf("firefox") != -1) versionOrType = "Firefox";
        else if (agent.indexOf("safari") != -1) versionOrType = "Safari";
        else if (agent.indexOf("edge") != -1) versionOrType = "edge";
    }
    return versionOrType;
};

var BrowserAlert = function() {

    var browserVersion = BrowserVersionCheck();

    if (browserVersion == "Chrome" ||
        browserVersion == "Opera" ||
        browserVersion == "Firefox" ||
        browserVersion == "Safari" ||
        browserVersion == "edge")
    //} else if (parseFloat(browserVersion) < 11) {
    {} else {
        modal.viewModal('COMPAS 브라우저 호환성 안내', '본 사이트는 IE 계열의 브라우저에서는 정상적인 동작을 보장하지 않습니다.<br/><br/>Microsoft Edge 또는 다른 브라우저를 이용 바랍니다.');
    }
}

var setNoImage = function(img) {
    img.onerror = null;
    $(img).attr("src", "/images/common/no-image.png");
    $(img).css("object-fit", "contain");
}

/*****************************************************************
 * 로딩 이미지 
 *
 *****************************************************************/
loading = function() {
    //화면의 높이와 너비를 구합니다.
    var maskHeight = $(document).height();
    var maskWidth  = window.document.body.clientWidth;
     
    //화면에 출력할 마스크를 설정해줍니다.
    var mask       ="<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg ='';
      
    loadingImg +="<div id='loadingImg'>";
    loadingImg +=" <img id='limg' src='/images/common/loadingImg.gif' style='position: absolute; display: block;z-index : 10;'/>";
    loadingImg +="</div>"; 
  
    //화면에 레이어 추가
    $('body')
    	.prepend(loadingImg)
        .append(mask);
    
    var left =  ($(window).scrollLeft() + ($(window).width() ) / 2); //화면 가로 가운데 크기 계산
	var top = ($(window).scrollTop() + ($(window).height() ) / 2 ); //화면 세로 가운데 크기 계산	
	$('#limg').css('left', left).css('top', top).css('display', 'block'); //로딩이미지에 가로, 세로 크기 및 화면에 보여줌    
        
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $('#mask').css({
            'width' : maskWidth
            ,'height': maskHeight
            ,'opacity' :'0.3'
    });
  
    //마스크 표시
    $('#mask').show();  
  
    //로딩중 이미지 표시
    $('#loadingImg').show();
}

closeLoading = function() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove(); 
}

/*****************************************************************
 * QNA 새글표시 function
 *
 *****************************************************************/
var selectQnaCount = function() {
	$.ajax({
	    url: '/main/selectQnaCount',
	    dataType: 'json',
	    type: 'GET' 
	})
	.done(function(data) {
		(data > 0) ? $("#newMain").show() : $("#newMain").hide();
	})
	.fail(function(xhr, status, error) {
	    onAjaxFail(xhr, status, error);
	})
	.always(function() {})
}

//selectQnaCount();

var textLengthOverCut = function (txt, len, lastTxt) {
	if (len == "" || len == null) { // 기본값
    	len = 25;
    }
 
    if (lastTxt == "" || lastTxt == null) { // 기본값
        lastTxt = "...";
    }

    if (txt.length > len) {
        txt = txt.substr(0, len) + lastTxt;
    }

	return txt;
}

function adminDiffusionMoveLink(obj){
	//console.log(obj);
	var pageParam = getUrlParams();
    
    pageParam.pageIndex = nvl(pageParam.pageIndex, 1);
    pageParam.pageSize = nvl($('#diffusion-list-table').attr('data-page-size'), 12);
    pageParam.searchKey = nvl(pageParam.searchKey, 'both');
    pageParam.searchText = isNullOrEmpty(pageParam.searchText) ? "" : decodeURIComponent(pageParam.searchText);        
    pageParam.snm = decodeURIComponent(pageParam.snm);     
    
    location.href = obj+$.param(pageParam);	
}

/*****************************************************************
 * 이전 페이지 이동 시 리스트 화면 페이징 정보 유지
 *
 *****************************************************************/
// admin 페이지
adminPageBack = function(adminMenuId, pageIndex, pageSize, searchText, searchKey, brdTypeCd){
    var url;
    // searchKey가 없는 페이지
    if(searchKey == null || searchKey == undefined){
        // brdTypeCd 유무 확인
        if(brdTypeCd === 0 || brdTypeCd == null || brdTypeCd == undefined) {
            url='?adminMenuId='+adminMenuId+'&pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText;
        }else{
            url='?adminMenuId='+adminMenuId+'&brdTypeCd='+brdTypeCd+'&pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText;
        }
    // searchKey가 있는 페이지
    }else{
        // brdTypeCd 유무 확인
        if(brdTypeCd === 0 || brdTypeCd == null || brdTypeCd == undefined) {
            url='?adminMenuId='+adminMenuId+'&pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText+'&searchKey='+searchKey;
        }else{
            url='?adminMenuId='+adminMenuId+'&brdTypeCd='+brdTypeCd+'&pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText+'&searchKey='+searchKey;
        }
    }
    history.replaceState( null,'', location.pathname+url);
}
// user 페이지
userPageBack = function(pageIndex, pageSize, searchText, searchKey, brdTypeCd, etc){
    // brdTypeCd 유무 확인
    if(brdTypeCd === 0 || brdTypeCd == null || brdTypeCd == undefined) {
        url='?pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText+'&searchKey='+searchKey;
    }else{
        url='?brdTypeCd='+brdTypeCd+'&pageIndex='+pageIndex+'&pageSize='+pageSize+'&searchText='+searchText+'&searchKey='+searchKey;
    }
    
    if(etc != undefined && etc != ""){
    	url+="&etc="+etc;
    }
    history.replaceState( null,'', location.pathname+url);
}