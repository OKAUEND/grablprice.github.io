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
    var TenTicket = this.document.querySelector('.vaild-TenTicket');
    var SingleTicket = this.document.querySelector('.vaild-SingleTicket');
    
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
        var msgdom = MsgNode();
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
            document.querySelector('.Message-block').innerHTML = "　";
            
        }
        else if(!IsNumberText(inputtext))
        {            
            assetdom.remove(FORM_SUCCESS);
            assetdom.add(FORM_ERROR);
            
            msgdom.remove(TAG_SUCCESS);
            msgdom.add(TAG_ERROR);
            document.querySelector('.Message-block').innerHTML = MSG_INPUT_TYPE;
            
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
            document.querySelector('.Message-block').innerHTML = "　";
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

    function IsformSuccess()
    {
        return IsAssetFormSuccess() && IsTenCkFormSuccess() && IsSingleCkFormSuccess();
    }

    function IsAssetFormSuccess()
    {
        return AssetStone.classList.contains(FORM_SUCCESS);
    }

    function IsTenCkFormSuccess()
    {
        return TenTicket.classList.contains(FORM_SUCCESS);
    }

    function IsSingleCkFormSuccess()
    {
        return SingleTicket.classList.contains(FORM_SUCCESS);
    }

    function IsformError()
    {
        if(IsAssetFormError())
        {
            return true;
        }

        if(IsTenCkFormError())
        {
            return true;
        }

        if(IsSingleCkFormError())
        {
            return true;
        }

        return false;
    }

    function IsAssetFormError()
    {
        return AssetStone.classList.contains(FORM_ERROR);
    }

    function IsTenCkFormError()
    {
        return TenTicket.classList.contains(FORM_ERROR);
    }

    function IsSingleCkFormError()
    {
        return SingleTicket.classList.contains(FORM_ERROR);
    }

    },false
);