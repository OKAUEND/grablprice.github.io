window.addEventListener('load',function(){

    this.document.getElementById("btn").onclick = function()
    {
        
    };

    [].forEach.call(this.document.getElementsByClassName('vaild-AssetStone'),function(input)
    {
        input.addEventListener('keyup',function(node)
       {
        
        var text = this.value;
        var msg_node = MsgNode();
        IsValidCheck(text,this.classList,msg_node)
       }) ;
    });

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