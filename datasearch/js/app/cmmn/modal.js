var modal = {

    modalFormat: ' \
<!--  pop--> \
<div class="board_layer_pop_wrap" data-layernum="1"> \
	<!-- board_layer_pop --> \
	<div class="board_layer_pop" tabindex="0"> \
    \
		<div class="pg-header"> \
			<h4 class="pg-title">::title::</h4> \
		</div> \
        \
		<div class="pg-body bd-t-1"> \
        \
			<div class="box-any mt-20 pb-20"> \
				::body:: \
			</div> \
            \
            <div class="box-btn mt-30 mb-20 ta-c"> \
                <button id="close-btn" type="button" class="btn btn-primary btn-cmmn">닫기</button> \
            </div> \
		</div> \
        \
	</div> \
	<!-- // board_layer_pop --> \
</div> \
<!-- pop --> \
',

    viewModal: function(title, body) {

        $(".board_layer_pop_wrap").remove();

        var html = modal.modalFormat
            .replace('::title::', title)
            .replace('::body::', body);
        $(".footer").parent().append(html);
        $(".board_layer_pop_wrap").show();

        $("#close-btn").click(function() {
            $('.board_layer_pop_wrap').css({ 'display': 'none' });
        });
    },

};