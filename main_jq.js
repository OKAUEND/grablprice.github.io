 /// <reference path="typings/globals/jquery/index.d.ts" />
 ///ボタンをクリックしたら換算処理をする
 $(function (){

    const MSG_INPUT_TYPE = "0~9までの数字を入力してくれよな！";
    const MSG02 = "";

    const TAG_ERROR = "has-error";
    const TAG_SUCCESS = "has-success";
    const FORM_ERROR = "form-error";
    const FORM_SUCCESS = "form-success";

   const PRICE = 300;
   const PRICE_MULTIPLE = 10;
   const PRICE_TEN = 3000;

    ///ボタンをクリックしたら換算処理をする
    $("#btn").on('click',function(){

      if(!SearchSuccessClass())
      {
         return;
      }
      
      var StoneValue = Number(HalfTextReplace($("#Asset-form [name=AssetStone]").val()));
      var TenTicketValue = Number(HalfTextReplace($("#Asset-form [name=TenTicket]").val()));
      var SingleTicketValue = Number(HalfTextReplace($("#Asset-form [name=SingleTicket]").val()));

      var totalTimes = (StoneValue / PRICE) + (TenTicketValue * PRICE_MULTIPLE) + SingleTicketValue;
      var totalprice = totalTimes * PRICE;

      $(".AssetTimes").text(String(Math.floor(totalTimes)));
      $(".Price").text(String(Math.floor(totalprice)));
    });

    
    //バリデーションチェック
    //宝晶石
    $(".vaild-AssetStone").keyup(function(){
         var StoneValueText = $("#Asset-form [name=AssetStone]").val();
         var Message_box = $(".Message-block")
         var Asset_group = $(this);

         Vaildcheck(StoneValueText,Message_box,Asset_group);
    });

    //10連チケット
    $(".vaild-TenTicket").keyup(function(){
      var TenTicketValueText = $("#Asset-form [name=TenTicket]").val();
      var Message_box = $(".Message-block")
      var Asset_group = $(this);

      Vaildcheck(TenTicketValueText,Message_box,Asset_group);
    }); 

    //単発チケット
    $(".vaild-SingleTicket").keyup(function(){
      var SingleTicketValueText = $("#Asset-form [name=SingleTicket]").val();
      var Message_box = $(".Message-block")
      var Asset_group = $(this);

      Vaildcheck(SingleTicketValueText,Message_box,Asset_group);
    }); 


    //バリデーションチェックメイン関数
    function Vaildcheck(ValueText,Mes_g,Asset_g)
    {
      if(ValueText.length === 0)
      {
         Asset_g.removeClass(FORM_SUCCESS);
         Asset_g.removeClass(FORM_ERROR);

         if(!SearchErrorClass()){
            return;
         }

         Mes_g.removeClass(TAG_SUCCESS);
         Mes_g.removeClass(TAG_ERROR);
         Mes_g.text("　");
      }
      else if(!NumberValidcheck(ValueText))
      {
         addErrorTagClass(Mes_g,Asset_g);
         Mes_g.text(MSG_INPUT_TYPE);
      }
      else
      {
         Asset_g.removeClass(FORM_ERROR).addClass(FORM_SUCCESS);
         if(!SearchErrorClass()){
            return;
         }
         Mes_g.removeClass(TAG_ERROR).addClass(TAG_SUCCESS);
         Mes_g.text("　");
      }
    }

    //バリデーションチェック用関数
    function NumberValidcheck(inputText) {
      var text = inputText;
      var flg =text.match(/^[０-９0-9]+$/);
      return flg;
    }

    //エスケープチェック関数
    function EscapeCheck(){


    }

    function HalfTextReplace(ValueText)
    {
       var LocalText = ValueText;
       var number = LocalText.replace(/[０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });
       return number;
    }

    //タグ管理関数
    function addErrorTagClass(Msg_g,Asset_g)
    {
      Msg_g.removeClass(TAG_SUCCESS).addClass(TAG_ERROR);
      Asset_g.removeClass(FORM_SUCCESS).addClass(FORM_ERROR);
    }

    function addSuccessTagClass(TagClass)
    {
      TagClass.removeClass(TAG_ERROR).addClass(TAG_SUCCESS);
    }

    function addSuccessFORMClass(TagClass)
    {
      TagClass.removeClass(FORM_ERROR).addClass(FORM_SUCCESS);
    }

    //Errorタグチェック
    function SearchErrorClass()
    { 
      if($(".vaild-AssetStone").hasClass(FORM_ERROR))
      {
         return false;
      }
      
      if($(".vaild-TenTicket").hasClass(FORM_ERROR))
      {
         return false;
      }

      if($(".vaild-SingleTicket").hasClass(FORM_ERROR))
      {
         return false;
      }
      
      return true;
    }

    //SUCCESSタグチェック
    function SearchSuccessClass()
    { 
      if($(".vaild-AssetStone").hasClass(FORM_SUCCESS) && $(".vaild-TenTicket").hasClass(FORM_SUCCESS) && $(".vaild-SingleTicket").hasClass(FORM_SUCCESS))
      {
         return true;
      }
      
      return false;
    }
 });

 