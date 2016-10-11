(function (window){
  var elem = undefined;
  var vk = function (){
    elems = document.querySelectorAll(".vk");
    // Back compatibility
    elems = Array.prototype.slice.call(elems);
    elems.forEach(function(el){
        el.addEventListener('keydown',function(e){
           if (e.keyCode == KEY_ENTER){
             keyboard.style.top="30%";
             keyboard.style.left="30%";
             keyboard.style.display="block";
             document.querySelector('#vk-0-0').focus();
             elem = el;
           }
        });
      });
    KEY_LEFT = 37;
    KEY_RIGHT = 39;
    KEY_UP = 38;
    KEY_DOWN = 40;
    KEY_ENTER = 13;
    var keysNums = ['1','2','3','4','5','6','7','8','9','0','?',
    ,'q','w','e','r','t','y','u','i','o','p','!',
    ,'a','s','d','f','g','h','j','k','l','*','_',
    ,'z','x','c','v','b','n','m',',','.','-','+'
    ,'Mayus','@','space','ENTER','borrar'];
    var keyboard = document.createElement('div');
    keyboard.id="keyboard";
    var line = document.createElement('div');
    var line1 = document.createElement('div');
    var line2 = document.createElement('div');
    var  line3 = document.createElement('div');
    var  line4 = document.createElement('div');
    var  line5 = document.createElement('div');
    var  line6 = document.createElement('div');
    var text  = document.createElement('div');
    text.id = "text";

    keysNums.forEach(function(k,i,length){

      if (i<11){

        line1.style.width="100%";
        line1.style.marginBottom ="50px";
        var key = document.createElement('a');
        key.innerHTML = k;
        key.tabIndex=i+1;
        key.style.textAlign="center";
        key.style.border="1px black solid";
        key.style.width = "7%";
        key.style.height = "100%";
        key.style.padding = "15px";
        key.style.marginLeft="10px"
        key.id="vk-"+"0-"+i;

        line1.appendChild(key);
        vk.addListener(key,12);

      }
      else  if (i>11 && i<23){

        line2.style.width="100%";
        line2.style.marginBottom ="50px";

        var key = document.createElement('a');
        key.innerHTML = k;
        key.tabIndex=i+1;

        key.style.textAlign="center";
        key.style.border="1px black solid";
        key.style.width = "7%";
        key.style.height = "100%";
        key.style.padding = "15px";
        key.style.marginLeft="10px"
        key.id="vk-"+"1-"+(i-12);
        line2.appendChild(key);
        vk.addListener(key);

      }
      else  if (i>23 && i<35){

        line3.style.width="100%";
        line3.style.marginBottom ="50px";

        var key = document.createElement('a');
        key.innerHTML = k;
        key.tabIndex=i+1;

        key.display="inline";
        key.style.textAlign="center";
        key.style.border="1px black solid";
        key.style.width = "7%";
        key.style.height = "100%";
        key.style.padding = "15px";
        key.style.marginLeft="10px"
        key.id="vk-"+"2-"+(i-24);
        line3.appendChild(key);
        vk.addListener(key,22);
      }
      else  if (i>35 && i<47){

        line4.style.width="100%";
        line4.style.marginBottom ="50px";

        var key = document.createElement('a');
        key.innerHTML = k;
        key.tabIndex=i+1;

        key.style.textAlign="center";
        key.style.border="1px black solid";
        key.style.width = "7%";
        key.style.height = "100%";
        key.style.padding = "15px";
        key.style.marginLeft="10px"
        key.id="vk-"+"3-"+(i-36);
        line4.appendChild(key);
        vk.addListener(key,32);

      }
      else  if (i>47 && i<53){

        line5.style.width="100%";
        line5.style.marginBottom ="50px";

        var key = document.createElement('a');
        key.innerHTML = k;
        key.tabIndex=i+1;

        key.style.textAlign="center";
        key.style.border="1px black solid";
        key.style.width = "7%";
        key.style.height = "100%";
        key.id="vk-"+"4-"+(i-48);
        if (k=="space")  {
          key.style.paddingLeft = "75px";
          key.style.paddingRight = "75px";
          key.style.paddingTop = "15px";
          key.style.paddingBottom = "15px";
        }
        else

        if (k=="ENTER")  {
          key.style.paddingLeft = "72px";
          key.style.paddingRight = "72px";
          key.style.paddingTop = "15px";
          key.style.paddingBottom = "15px";
        }
        else key.style.padding = "15px";
        key.style.marginLeft="10px"
        line5.appendChild(key);
        vk.addListener(key,42);

      }

    });
    keyboard.appendChild(text);
    keyboard.appendChild(line1);
    keyboard.appendChild(line2);
    keyboard.appendChild(line3);
    keyboard.appendChild(line4);
    keyboard.appendChild(line5);
    keyboard.appendChild(line6);
    document.body.appendChild(keyboard);
    document.querySelector('a').focus();

  }
  vk.addListener = function(k,limit){

      k.addEventListener('keydown',function(evt){
      //  evt.preventDefault();
        if (evt.keyCode == KEY_ENTER){
            if (k.innerHTML == "ENTER"){
                elem.value = document.querySelector('#text').innerHTML;
                keyboard.style.display="none";
                document.querySelector('#text').innerHTML= "";
                elem.focus();
            }
            else {
                if (k.innerHTML == "space"){
                    document.querySelector('#text').innerHTML+=" ";
                }
                else if (k.innerHTML == "borrar"){
                        document.querySelector('#text').innerHTML = document.querySelector('#text').innerHTML.slice(0,-1);
                    }
                    else document.querySelector('#text').innerHTML+=k.innerHTML;
            }
        }
        if (evt.keyCode == KEY_RIGHT){
          var col = parseInt(this.id.split('-')[2]);
          var row = parseInt(this.id.split('-')[1]);
          if (col==10)  document.querySelector('#vk-'+row+'-'+0).focus();
          else document.querySelector('#vk-'+row+'-'+(col+1)).focus();
        }
        if (evt.keyCode == KEY_LEFT){
          var col = parseInt(this.id.split('-')[2]);
          var row = parseInt(this.id.split('-')[1]);
          if (col==0)  document.querySelector('#vk-'+row+'-'+10).focus();
          else document.querySelector('#vk-'+row+'-'+(col-1)).focus();
        }
        if (evt.keyCode == KEY_DOWN){
          var col = parseInt(this.id.split('-')[2]);
          var row = parseInt(this.id.split('-')[1]);
          if (row==4)  document.querySelector('#vk-0-'+col).focus();
          if (row==3){
            if (col<5)
            document.querySelector('#vk-4-'+1).focus();
            else
            document.querySelector('#vk-4-'+2).focus();

          }
          else document.querySelector('#vk-'+(row+1)+'-'+col).focus();
        }
        if (evt.keyCode == KEY_UP){
          var col = parseInt(this.id.split('-')[2]);
          var row = parseInt(this.id.split('-')[1]);
          if (row==0)  document.querySelector('#vk-4-'+col).focus();
          if (row==4){
            if (col > 0 && col <2)
            document.querySelector('#vk-3-'+3).focus();
            else if (col==0) document.querySelector('#vk-'+(row-1)+'-'+col).focus();
            else document.querySelector('#vk-3-'+8).focus();

          }
          else document.querySelector('#vk-'+(row-1)+'-'+col).focus();
        }

      },false);

  }
  document.addEventListener('DOMContentLoaded',function(e){
      vk();
  });
  window.vk = vk;
})(window);
