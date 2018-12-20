window.addEventListener('load',function(){

    const MSG_INPUT_TYPE = "0~9までの数字を入力してくれよな！";
    const MSG02 = "";

    const TAG_ERROR = "has-error";
    const TAG_SUCCESS = "has-success";
    const FORM_ERROR = "form-error";
    const FORM_SUCCESS = "form-success";

    const PRICE = 300;
    const PRICE_MULTIPLE = 10;
    const PRICE_TEN = 3000;

    this.document.getElementById("btn").onclick = function()
    {
        
    };

    var AssetStone = this.document.querySelector('.vaild-AssetStone');
    AssetStone.onkeyup = function(e)
    {
        var text = this.value;
        var msg_node = MsgNode();
        IsValidCheck(text,this.classList,msg_node)
    };

    //[].forEach.call(this.document.getElementsByClassName('vaild-AssetStone'),function(input)
    //{
    //    input.addEventListener('keyup',function(node)
    //   {
    //    
    //    var text = this.value;
    //    var msg_node = MsgNode();
    //    IsValidCheck(text,this.classList,msg_node)
    //   }) ;
    //});

    function IsValidCheck(inputtext,assetDOMClass,msgDOMClass){

        if(inputtext.length === 0)
        {
            alert("文字がないよ");
        }
        else if(!IsNumberText(inputtext))
        {
            alert("数字じゃないよ");
        }
        else
        {
            alert("数字だよ");
        }
    }

    function MsgNode()
    {
        var node;
        [].forEach.call(this.document.getElementsByClassName('Message-block'),function(input)
        {
            node = input.classList; 
        });
        return node;
    }

    function IsNumberText(text)
    {
        var tmp = text;
        var flg =tmp.match(/^[０-９0-9]+$/);
        return flg;
    }

    },false
);