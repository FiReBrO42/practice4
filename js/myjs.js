$(function () {
/* click */
    /* ham-menu */
    $('.ham-menu_mask').on("click",function(){
        $('.ham-menu').removeClass('show');
        $('.ham-menu_mask').removeClass('show');
        $('.ham-menu_aside').removeClass('show');
    });
    $('#menu,#game_bottom_menu,#news_bottom_menu,#member_bottom_menu,#contact_bottom_menu').on("click",function(){
        $('.ham-menu').addClass('show');
        $('.ham-menu_mask').addClass('show');
        $('.ham-menu_aside').addClass('show');
    });
    /* 子項目 */
    $('.ham-menu_1').on("click",function(){
        $('.ham-menu_1').toggleClass('active');
        $('.ham-menu_1_child').slideToggle();   
    });
    $('.ham-menu_2').on("click",function(){
        $('.ham-menu_2').toggleClass('active');
        $('.ham-menu_2_child').slideToggle();           
    });
    $('.ham-menu_3').on("click",function(){
        $('.ham-menu_3').toggleClass('active');
        $('.ham-menu_3_child').slideToggle();          
    });

    /* 登出確認 */
    $('.ham-menu_btn_sign_out_link').on("click",function(){
        $('.signout_card_wrapper').addClass('show');
        $('.signout_card').addClass('show');
        $('.signout_card_wrapper_bg').addClass('show');        
    });
    $('.signout_card_wrapper_bg , .signout_card_btn_no').on("click",function(){
        $('.signout_card_wrapper').removeClass('show');
        $('.signout_card').removeClass('show');
        $('.signout_card_wrapper_bg').removeClass('show');        
    });

    /* 客服 */
    $('#contact , #bottom_contact').on("click",function(){
        $('.contact_card_wrapper').addClass('show');
    });
    $('#contact_card_btn_close').on("click",function(){
        $('.contact_card_wrapper').removeClass('show');
    });

    /* game_card 遊戲 */
    $('#game').on("click",function(){
        $('.game_card_wrapper').addClass('show');
        $('.game_card').addClass('show');  
    });
    $('#game_bottom_back').on("click",function(){
        $('.game_card_wrapper').removeClass('show');
        $('.game_card').removeClass('show');  
    });
    /* news_card 最新活動*/
    $('#news').on("click",function(){
        $('.news_card_wrapper').addClass('show');
        $('.news_card').addClass('show');  
    });
    $('#news_bottom_back').on("click",function(){
        $('.news_card_wrapper').removeClass('show');
        $('.news_card').removeClass('show');  
    });
    /* 子項目  直接複製 更改數字*/
    $('#news_card_item_1').on("click",function(){
        $('#news_card_item_1').toggleClass('active');
        $('#news_card_item_1_child').slideToggle();   
    });
    $('#news_card_item_2').on("click",function(){
        $('#news_card_item_2').toggleClass('active');
        $('#news_card_item_2_child').slideToggle();   
    });
    $('#news_card_item_3').on("click",function(){
        $('#news_card_item_3').toggleClass('active');
        $('#news_card_item_3_child').slideToggle();   
    });
    $('#news_card_item_4').on("click",function(){
        $('#news_card_item_4').toggleClass('active');
        $('#news_card_item_4_child').slideToggle();   
    });
    $('#news_card_item_5').on("click",function(){
        $('#news_card_item_5').toggleClass('active');
        $('#news_card_item_5_child').slideToggle();   
    });
    $('#news_card_item_6').on("click",function(){
        $('#news_card_item_6').toggleClass('active');
        $('#news_card_item_6_child').slideToggle();   
    });
    /* member_card 會員*/
    $('#member,#news_bottom_member,#game_bottom_member').on("click",function(){
        $('.member_card_wrapper').addClass('show');
        $('.member_card').addClass('show');  
        $('.member_card_nav_content_wrapper').css({"transform":"translateX(0)"});
    });
    $('#member_bottom_back').on("click",function(){
        $('.member_card_wrapper').removeClass('show');
        $('.member_card').removeClass('show');  
    });
    /* 轉換子內容 */
    $('#member_card_nav_list_1,#member_bottom_member').on('click',function(){
        $('.member_card_nav_content_wrapper').css({"transform":"translateX(0)"});
        $('#member_card_title').text('会员中心');
    });
    $('#member_card_nav_list_2').on('click',function(){
        $('.member_card_nav_content_wrapper').css({"transform":"translateX(-100%)"});
        $('#member_card_title').text('充值提领纪录');
    });
    $('#member_card_nav_list_3').on('click',function(){
        $('.member_card_nav_content_wrapper').css({"transform":"translateX(-200%)"});
        $('#member_card_title').text('游戏纪录');    
    });
    $('#member_card_nav_list_4').on('click',function(){
        $('.member_card_nav_content_wrapper').css({"transform":"translateX(-300%)"});
        $('#member_card_title').text('转点纪录');    
    });

/* 輪播圖 */
    $('.main_contain_1_slick01_wrapper').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed:1000,
        variableWidth: false,
        cssEase: 'linear',
        arrows:false,
        pauseOnDotsHover:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        swipe:false,
    });
    $('.main_contain_announcement_contain').slick({
        dots: false,
        infinite: true,
        speed:11000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        variableWidth: true,
        cssEase: 'linear',
        arrows:false,
        pauseOnDotsHover:false,
        swipe:false,
        zIndex:99999,
        lazyLoad:'progressive',
    });
});
/* copy 複製功能 */

function copyfn(id){
    var val = document.getElementById(id);
    window.getSelection().selectAllChildren(val);
    document.execCommand ("Copy");
    alert("複製成功")
    }

/* RWD 手機  網址欄 工具欄高度*/
function safariHacks() {
    let windowsVH = window.innerHeight / 100;
    document.querySelector('#ham-menu').style.setProperty('--vh', windowsVH + 'px');
    window.addEventListener('resize', function() {
        document.querySelector('#ham-menu').style.setProperty('--vh', windowsVH + 'px');
    });
};