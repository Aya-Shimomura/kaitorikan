/*********************************

�@���[���I�[�o�[etc�cJavascript�ݒ�

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

	�E�B���h�E�I�[�v��(�ėp��)

	Ver-1.00

*********************************/

function windowOpen(in_url, in_target, in_parameter) {

	window.open(in_url, in_target, in_parameter);

}





/*********************************

	�E�B���h�E�I�[�v��1

	Ver-1.00(����)

*********************************/

function makeRemote(jump) {

	remote = window.open((jump),"remotewin", "resizable=yes,width=540,height=520,scrollbars");

}





/*********************************

	�E�B���h�E�I�[�v��2

	Ver-1.00(����)

*********************************/

function makeRemote2(jump) {

	remote = window.open((jump),"remotewin2", "resizable=yes,width=540,height=520,scrollbars");

}





/*********************************

	�E�B���h�E�N���[�Y(�ėp��)

	Ver-1.00

*********************************/

function winndowClose() {

	window.close();

}





/*********************************

	�^�C�}�[

	Ver-1.00(����)

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

�A���J�[�ʒu�փX�N���[���o�[�ړ�

�J�X�^�}�C�Y��

youmos.com/reference/smooth_scroll.html���

*********************************/

<!--//

var eventTimer;	//�^�C�}�[�ϐ�

var restScroll=0;	//�X�N���[���c��



function Scroll(base,move){



	//�ړ���(base)�v�f���I�u�W�F�N�g���擾

	var obj_base  = getElemPosition(base);



	//�ړ���(move)�v�f���I�u�W�F�N�g���擾

	var elem_move = document.getElementById(move);

	var obj_move  = getElemPosition(elem_move);



	restScroll = obj_move.y-obj_base.y;

	eventTimer = setInterval(setScrollPosition,10);

}

//�X�N���[������������

function setScrollPosition() {



	var moveValue=0;



	//�X�N���[���c�ʂ�80�ȏ�̏ꍇ�A�X�N���[���ʂ�ς���

	//Math.abs()�ł͒l�̐�Βl���擾

	if(Math.abs(restScroll)>80){

		moveValue = (restScroll>0)?40:-40;

	}else{

		moveValue = Math.round(restScroll/5);

	}

	//�X�N���[��������

	parent.scrollBy(0,moveValue);



	//�X�N���[���c�ʂ��v�Z���āA�c�肪������΃^�C�}�[����

	restScroll = (restScroll>0)?restScroll-moveValue:restScroll-moveValue;



	if(moveValue==0){

		clearInterval(eventTimer);

		restScroll=0;

	}

}



//�v�f�̈ʒu���擾���A�I�u�W�F�N�g�Ƃ��ĕԂ�

function getElemPosition(elem) {

	var obj = new Object();

	obj.x = elem.offsetLeft;

	obj.y = elem.offsetTop;



	//�e�v�f���擾���Ĉʒu�����C������

	while(elem.offsetParent) {

		elem = elem.offsetParent;

		obj.x += elem.offsetLeft;

		obj.y += elem.offsetTop;

	}

	return obj;

}

//-->









/*********************************

   �y�[�W�A�b�v�A�X�N���[���o�[�ړ�

�@���������[�v

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

	�������

	Ver-1.00(����)

*********************************/

function print_out() {

	/* print() ���g����u���E�U���ǂ����𔻒f */

	if (navigator.userAgent.match(/msie (\d)/i))

		v = (eval(RegExp.$1) >= 5) ? 1 : 0;

	else if (self.innerWidth)

		v = (eval(navigator.appVersion.charAt(0)) >= 4) ? 1 : 0;

	else v = 0;



	/* print() ���g����u���E�U�Ȃ��������s */

	if (v) self.print();

	else alert("���g���̃u���E�U�ł͂��̋@�\�͗��p�ł��܂���");

}



/*********************************

	�X���[�X�X�N���[��

*********************************/

$(function(){
   // #�Ŏn�܂�A���J�[���N���b�N�����ꍇ�ɏ���
   $('a[href^=#]').click(function() {
      // �X�N���[���̑��x
      var speed = 400;// �~���b
      // �A���J�[�̒l�擾
      var href= $(this).attr("href");
      // �ړ�����擾
      var target = $(href == "#" || href == "" ? 'html' : href);
      // �ړ���𐔒l�Ŏ擾
      var position = target.offset().top;
      // �X���[�X�X�N���[��
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});