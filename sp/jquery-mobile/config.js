//�A�R�[�f�B�I�����j���[
$(document).ready(function(){
  //acordion_tree����U��\����
  $(".acordion_tree").css("display","none");
  //trigger���N���b�N����ƈȉ������s
  $(".trigger").click(function(){
    //�������N���b�N����trigger�̒����.acordion_tree����\���Ȃ�
    if($("+.acordion_tree",this).css("display")=="none"){
         //class��active��ǉ�
         $(this).addClass("active");
         //�����acordion_tree���X���C�h�_�E��
         $("+.acordion_tree",this).slideDown("normal");
  }else{
    //class����active���폜
    $(this).removeClass("active");
    //�N���b�N����trigger�̒����.acordion_tree���\������Ă���΃X���C�h�A�b�v
    $("+.acordion_tree",this).slideUp("normal");
  }
  });
});




//
$(document).bind("mobileinit", function(){
  $.mobile.ajaxLinksEnabled = false;
});
$(function() {
	//�y�[�W�㕔�֖߂�
	$(".btn_top").click(function () {
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		return false;
	});
});