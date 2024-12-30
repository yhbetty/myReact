$(function () {
    var mdwBtn = $('.modalBtn'),    // 取得開啟彈跳視窗按鈕
        overlayOpacity = 0.7,       // 背景透明度變數
        fadeTime = 500;             // 漸進時間變數

    mdwBtn.on('click', function (e) {
        e.preventDefault();

        var setMdw = $(this),
            setHref = setMdw.attr('href'),  // 取出按鈕href屬性值
            setSourse = $(setHref).html(),    // 取出herf對應id的內容
            wdHeight = $(window).height();   // 取得目前視窗高度


        // <!-- <div id="mdOverlay"></div>
        // <div id="mdWindow">
        //     <div class="mdClose">X</div>
        //     <div id="contWrap"></div>
        // </div> -->

        // 插入到網頁尾端的HTML，不包含#modalInclude的元素
        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">X</div><div id="contWrap">' + setSourse + '</div></div>');

        // 將產生的彈出視窗與遮罩元素，透明度為0
        $('#mdOverlay, #mdWindow').css({ display: 'block', opacity: '0' });
        // 將遮罩元素高度設定為視窗高度並淡入動畫顯示
        $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);
        // 彈出視窗也可以淡入動畫顯示
        $('#mdWindow').stop().animate({ opacity: '1' }, fadeTime);



        
		// 由於視窗大小改變時，遮罩元素仍要覆蓋整個頁面
		// 因此必須取得高度後，重新設定遮罩元素高度
        $(window).on('resize',function(){
            // 取得視窗高度
            var newHeight=$(window).height();
            // 重新設定遮罩元素高度
            $('#mdOverlay').css({height:newHeight});
        });


        // 關閉彈出視窗或按下關閉鈕時
        $('#mdOverlay, .mdClose').on('click', function () {
            //淡出彈出視窗與遮罩元素
            $('#mdWindow, #mdOverlay').stop().animate({ opacity: '0' }, fadeTime, function () {
                // 移出元素
                $('#mdOverlay, #mdWindow').remove();
            });
        });
    });
});