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

    var AssetStone = this.document.querySelector('.vaild-AssetStone');
    var TenTicket = this.document.querySelector('.vaild-TenTicket');
    var SingleTicket = this.document.querySelector('.vaild-SingleTicket');

    this.document.getElementById("btn").onclick = function()
    {
        if(!IsformSuccess())
        {
            return;
        }

        var AssetStoneValue = Number(toHalfString(AssetStone.value));
        var TenTicketValue = Number(toHalfString(TenTicket.value));
        var SingleTicketValue = Number(toHalfString(SingleTicket.value));

        var Price = (AssetStoneValue / PRICE ) + (TenTicketValue * PRICE_MULTIPLE) + SingleTicketValue;

        document.querySelector('.AssetTimes').textContent = String(Math.floor(Price));
        document.querySelector('.Price').textContent = String(Math.floor(Price * PRICE)); 
    };
    
    AssetStone.onkeyup = function(e)
    {
        //this.classList.add(FORM_SUCCESS);
        IsValidCheck(this.value,this.classList)
    };

    TenTicket.onkeyup = function(e)
    {
        IsValidCheck(this.value,this.classList)
    }

    SingleTicket.onkeyup = function(e)
    {
        IsValidCheck(this.value,this.classList)
    }

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

    function IsValidCheck(inputtext,assetdom){
        var msgdom = getMsgNode();
        if(inputtext.length === 0)
        {
            assetdom.remove(FORM_ERROR);
            assetdom.remove(FORM_SUCCESS);

            if(IsformError())
            {
                return;
            }

            msgdom.remove(TAG_ERROR);
            msgdom.remove(TAG_SUCCESS);
            document.querySelector('.Message-block').textContent = "　";
            
        }
        else if(!IsNumberText(inputtext))
        {            
            assetdom.remove(FORM_SUCCESS);
            assetdom.add(FORM_ERROR);
            
            msgdom.remove(TAG_SUCCESS);
            msgdom.add(TAG_ERROR);
            document.querySelector('.Message-block').textContent = MSG_INPUT_TYPE;
            
        }
        else
        {
            assetdom.remove(FORM_ERROR);
            assetdom.add(FORM_SUCCESS);
            
            if(IsformError())
            {
                return;
            }

            msgdom.remove(TAG_ERROR);
            msgdom.add(TAG_SUCCESS);
            document.querySelector('.Message-block').textContent = "　";
        }
    }

    function getMsgNode()
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
        return tmp.match(/^[０-９0-9]+$/);
    }

    function IsformSuccess()
    {
        return (AssetStone.classList.contains(FORM_SUCCESS) && TenTicket.classList.contains(FORM_SUCCESS) && SingleTicket.classList.contains(FORM_SUCCESS));
    }

    function IsformError()
    {
        if(AssetStone.classList.contains(FORM_ERROR))
        {
            return true;
        }

        if(TenTicket.classList.contains(FORM_ERROR))
        {
            return true;
        }

        if(SingleTicket.classList.contains(FORM_ERROR))
        {
            return true;
        }

        return false;
    }

    function toHalfString(text)
    {
        var tmp = text;
        return tmp.replace(/[０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });
    }

    },false
);