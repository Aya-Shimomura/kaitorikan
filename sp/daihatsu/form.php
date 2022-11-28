<?php
require_once('functions.php');

// セッションを開始
session_start();

mb_language('ja');
mb_internal_encoding('UTF-8');

// セッションIDを変更
session_regenerate_id(TRUE);

$data = array();

if($_GET['action']=='edit'){
	$data = $_SESSION['contact'];
}
$maker = $_POST['maker'];
$childS = $_POST['childS'];

if($_POST["confirm"]){

	//var_dump2($_POST);
	$data['car'] = $_POST['car'];
	$data['car_year'] = $_POST['car_year'];
	$data['kyori'] = $_POST['kyori'];
	$data['pref'] = $_POST['pref'];
	$data['name'] = $_POST['name'];
	$data['tel'] = $_POST['tel'];
	
	$errors["name"] = '';

		
	if(count($errors)==0){
		
		$_SESSION["contact"] = $data;
		header("Location:form2.php?ticket=".$_SESSION["ticket"]);
		exit();
	}
}

if (!isset($_SESSION['ticket'])) {
  $_SESSION['ticket'] = sha1(uniqid(mt_rand(), TRUE));
}

// テンプレートの表示
display('form_view.php', $data);