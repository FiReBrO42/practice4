const toMoneyBtn =document.querySelector('#to-money_submit');
const toEmoneyBtn =document.querySelector('#to-emoney_submit');
const pointNum =document.querySelector('#point_number');
const moneyWallet =document.querySelector('.moneyWallet');
const emoneyWallet =document.querySelector('.emoneyWallet');


//假資料
const money={
    money:100,
    emoney:150,
}
//取得假資料金額
let moneyNum = money.money;
let emoneyNum = money.emoney;

//渲染金額
function renderMoney(){
    moneyWallet.textContent = moneyNum;
    emoneyWallet.textContent = emoneyNum;
    console.log(moneyNum,emoneyNum,pointNum.value);
}
renderMoney()

//Emoney 轉給 money 右邊轉給左邊
toMoneyBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    //取轉點值
    let pointNumValue =pointNum.valueAsNumber;
    //錢包金額須大於等於 轉點值
    if(emoneyNum >= pointNumValue){
    emoneyNum = emoneyNum - pointNumValue ;
    moneyNum = moneyNum + pointNumValue ;
    renderMoney();
    }else{
        alert('注意轉點額度')
        return
    }
})
//money 轉給 Emoney 左邊轉給右邊
toEmoneyBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    //取轉點值
    let pointNumValue =pointNum.valueAsNumber;
    //錢包金額須大於等於 轉點值
    if(moneyNum >= pointNumValue){
    moneyNum = moneyNum - pointNumValue ;
    emoneyNum = emoneyNum + pointNumValue ;
    renderMoney();
    }else{
        alert('注意轉點額度')
        return
    }
})