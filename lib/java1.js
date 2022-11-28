/*********************************

　ロールオーバーetc…Javascript設定

*********************************/

function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}



/*********************************

	ウィンドウオープン(汎用版)

	Ver-1.00

*********************************/

function windowOpen(in_url, in_target, in_parameter) {

	window.open(in_url, in_target, in_parameter);

}





/*********************************

	ウィンドウオープン1

	Ver-1.00(既存)

*********************************/

function makeRemote(jump) {

	remote = window.open((jump),"remotewin", "resizable=yes,width=540,height=520,scrollbars");

}





/*********************************

	ウィンドウオープン2

	Ver-1.00(既存)

*********************************/

function makeRemote2(jump) {

	remote = window.open((jump),"remotewin2", "resizable=yes,width=540,height=520,scrollbars");

}





/*********************************

	ウィンドウクローズ(汎用版)

	Ver-1.00

*********************************/

function winndowClose() {

	window.close();

}





/*********************************

	タイマー

	Ver-1.00(既存)

*********************************/

nereidFadeObjects = new Object();

nereidFadeTimers = new Object();



function nereidFade(object, destOp, rate, delta){

if (!document.all)

return

	if (object != "[object]"){

		setTimeout("nereidFade("+object+","+destOp+","+rate+","+delta+")",0);

		return;

	}



	clearTimeout(nereidFadeTimers[object.sourceIndex]);

	diff = destOp-object.filters.alpha.opacity;

	direction = 1;

	if (object.filters.alpha.opacity > destOp){

		direction = -1;

	}

	delta=Math.min(direction*diff,delta);

	object.filters.alpha.opacity+=direction*delta;



	if (object.filters.alpha.opacity != destOp){

		nereidFadeObjects[object.sourceIndex]=object;

		nereidFadeTimers[object.sourceIndex]=setTimeout("nereidFade(nereidFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);

	}

}







/*********************************

アンカー位置へスクロールバー移動

カスタマイズ可

youmos.com/reference/smooth_scroll.htmlより

*********************************/

<!--//

var eventTimer;	//タイマー変数

var restScroll=0;	//スクロール残量



function Scroll(base,move){



	//移動元(base)要素＆オブジェクトを取得

	var obj_base  = getElemPosition(base);



	//移動先(move)要素＆オブジェクトを取得

	var elem_move = document.getElementById(move);

	var obj_move  = getElemPosition(elem_move);



	restScroll = obj_move.y-obj_base.y;

	eventTimer = setInterval(setScrollPosition,10);

}

//スクロール処理をする

function setScrollPosition() {



	var moveValue=0;



	//スクロール残量が80以上の場合、スクロール量を変える

	//Math.abs()では値の絶対値を取得

	if(Math.abs(restScroll)>80){

		moveValue = (restScroll>0)?40:-40;

	}else{

		moveValue = Math.round(restScroll/5);

	}

	//スクロールを処理

	parent.scrollBy(0,moveValue);



	//スクロール残量を計算して、残りが無ければタイマー解除

	restScroll = (restScroll>0)?restScroll-moveValue:restScroll-moveValue;



	if(moveValue==0){

		clearInterval(eventTimer);

		restScroll=0;

	}

}



//要素の位置を取得し、オブジェクトとして返す

function getElemPosition(elem) {

	var obj = new Object();

	obj.x = elem.offsetLeft;

	obj.y = elem.offsetTop;



	//親要素を取得して位置情報を修正する

	while(elem.offsetParent) {

		elem = elem.offsetParent;

		obj.x += elem.offsetLeft;

		obj.y += elem.offsetTop;

	}

	return obj;

}

//-->









/*********************************

   ページアップ、スクロールバー移動

　長い時ワープ

*********************************/

function pageup(e) {

 UAGENT = navigator.userAgent.toUpperCase();

 if (UAGENT.indexOf("MSIE") >=0) { posi = event.y; }

 else { posi = e.pageY; }

 moveObje(posi);

}

function moveObje(position) {

 move = position / 10;

 point = parseInt(position - move);

 scrollTo(0,point);

 if (point > 0) { setTimeout("moveObje(point)",10); }

} 

 



/*********************************

	印刷処理

	Ver-1.00(既存)

*********************************/

function print_out() {

	/* print() が使えるブラウザかどうかを判断 */

	if (navigator.userAgent.match(/msie (\d)/i))

		v = (eval(RegExp.$1) >= 5) ? 1 : 0;

	else if (self.innerWidth)

		v = (eval(navigator.appVersion.charAt(0)) >= 4) ? 1 : 0;

	else v = 0;



	/* print() が使えるブラウザなら印刷を実行 */

	if (v) self.print();

	else alert("お使いのブラウザではこの機能は利用できません");

}



/*********************************

	スムーススクロール

*********************************/

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});