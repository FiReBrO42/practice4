/* 定義的測試用假資料 */
const gameData = [
    {
        category: '北斗之拳5 覇者 HVA',
        title: 'CR 北斗之拳5 覇者 HVA',
        imageUrl: './img/game/img_game_bg_1.jpg',
        imageAlt: 'img_game_bg_1.jpg',
        state: {
            name: 'normal',
            txt: '可遊玩',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: '秘寶傳 MAX',
        title: 'CR 吉宗 2',
        imageUrl: './img/game/img_game_bg_2.jpg',
        imageAlt: 'img_game_bg_2.jpg',
        state: {
            name: 'pause',
            txt: '保留中',
            iconUrl: './img/icon/icon_pause.png'
        }
    },
    {
        category: 'CR 戦国乙女3',
        title: 'CR 真．三國無雙 猛將傳',
        imageUrl: './img/game/img_game_bg_3.jpg',
        imageAlt: 'img_game_bg_3.jpg',
        state: {
            name: 'gaming',
            txt: '遊玩中',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: 'CR 鬼太郎 來自地獄的使者',
        title: 'CR 鬼太郎 來自地獄的使者',
        imageUrl: './img/game/img_game_bg_4.jpg',
        imageAlt: 'img_game_bg_4.jpg',
        state: {
            name: 'normal',
            txt: '可遊玩',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: '秘寶傳 MAX',
        title: 'CR 戰國乙女3～亂',
        imageUrl: './img/game/img_game_bg_5.jpg',
        imageAlt: 'img_game_bg_5.jpg',
        state: {
            name: 'pause',
            txt: '保留中',
            iconUrl: './img/icon/icon_pause.png'
        }
    },
    {
        category: 'CR 戰國嵐～信長之章～',
        title: 'CR 戰國嵐～信長之章～',
        imageUrl: './img/game/img_game_bg_6.jpg',
        imageAlt: 'img_game_bg_6.jpg',
        state: {
            name: 'gaming',
            txt: '遊玩中',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: '北斗之拳5 覇者 HVA',
        title: 'CR 北斗之拳5 覇者 HVA',
        imageUrl: './img/game/img_game_bg_1.jpg',
        imageAlt: 'img_game_bg_1.jpg',
        state: {
            name: 'normal',
            txt: '可遊玩',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: '秘寶傳 MAX',
        title: 'CR 吉宗 2',
        imageUrl: './img/game/img_game_bg_2.jpg',
        imageAlt: 'img_game_bg_2.jpg',
        state: {
            name: 'pause',
            txt: '保留中',
            iconUrl: './img/icon/icon_pause.png'
        }
    },
    {
        category: 'CR 戦国乙女3',
        title: 'CR 真．三國無雙 猛將傳',
        imageUrl: './img/game/img_game_bg_3.jpg',
        imageAlt: 'img_game_bg_3.jpg',
        state: {
            name: 'gaming',
            txt: '遊玩中',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: 'CR 鬼太郎 來自地獄的使者',
        title: 'CR 鬼太郎 來自地獄的使者',
        imageUrl: './img/game/img_game_bg_4.jpg',
        imageAlt: 'img_game_bg_4.jpg',
        state: {
            name: 'normal',
            txt: '可遊玩',
            iconUrl: './img/icon/icon_member.png'
        }
    },
    {
        category: '秘寶傳 MAX',
        title: 'CR 戰國乙女3～亂',
        imageUrl: './img/game/img_game_bg_5.jpg',
        imageAlt: 'img_game_bg_5.jpg',
        state: {
            name: 'pause',
            txt: '保留中',
            iconUrl: './img/icon/icon_pause.png'
        }
    },
    {
        category: 'CR 戰國嵐～信長之章～',
        title: 'CR 戰國嵐～信長之章～',
        imageUrl: './img/game/img_game_bg_6.jpg',
        imageAlt: 'img_game_bg_6.jpg',
        state: {
            name: 'gaming',
            txt: '遊玩中',
            iconUrl: './img/icon/icon_member.png'
        }
    },
]
const selectGameList = document.querySelector('.content_mid_list_wrapper');
const selectGameCategory = document.querySelector('.content_top_wrapper');

/* 組遊戲單字串 */
function mixListContent(item) {
    return `
    <li class="content_mid_list ${item.state.name}"><!-- 正常 -->
        <a href="">
            <img src="${item.imageUrl}" alt="${item.imageAlt}">
            <div class="content_mid_list_state ">
                <img src="${item.state.iconUrl}" alt="icon_acount.png">
                <p>${item.state.txt}</p>
            </div>
            <h2>${item.title}</h2>
        </a>
    </li>`
}
/* 類別渲染 */
selectGameCategory.addEventListener('click', (e) => {
    /* 點擊 Next Prev 停止運作 */
    const type = e.target.getAttribute('type');
    if (type === 'button') {
        return
    }
    /* 防錯誤點擊 */
    const categoryNameDiv = e.target.tagName;
    if(categoryNameDiv === "DIV"){
        return
    }
    //渲染全部
    const categoryNameLi = e.target.dataset.name;
    const categoryName = e.target.textContent;
    if (categoryName === "全部 All"||categoryNameLi ==="全部 All") {
        render()
        return;
    }
    //篩選渲染
    let str = ""
    gameData.forEach((item) => {
        //如果符合就加入
        if (item.category === categoryName || item.category === categoryNameLi) {
            str += mixListContent(item);
        }
    })
    selectGameList.innerHTML = str;
})
/* 渲染 */
function render() {
    let str = '';
    gameData.forEach((item) => {
        str += mixListContent(item)
    })
    selectGameList.innerHTML = str;
}

/* pagination.js*/
$(function(){
    /* 渲染涵式 */
    function simpleTemplating(data) {
        var str = '';
        $.each(data, function(index, item){
            str += mixListContent(item);
        });
        return str;
    }
    /* pagination.JQ */
      $('#pagination-container').pagination({
        /* 資料來源 */
        dataSource: gameData,
        /* 一頁顯示幾個 */
        pageSize: 9,
        /* 回傳渲染 */
        callback: function(data, pagination) {
            var html = simpleTemplating(data);
            $('.content_mid_list_wrapper').html(html);
        }
    })
})


/* 初始化 */
function init() {
    render();
}
init();
