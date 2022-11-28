<?php
require_once('functions.php');

session_start();

mb_language('ja');
mb_internal_encoding('UTF-8');

if($_POST["confirm"]){

	// セッションIDを変更
	session_regenerate_id(TRUE);
	
	$data = array();

	if (!isset($_SESSION['ticket'])) {
	  $_SESSION['ticket'] = sha1(uniqid(mt_rand(), TRUE));
	}

	//var_dump2($_POST);
	$data['car'] = $_POST['car'];
	$data['car_year'] = $_POST['car_year'];
	$data['kyori'] = $_POST['kyori'];
	$data['pref'] = $_POST['pref'];
	$data['name'] = $_POST['name'];
	$data['tel'] = $_POST['tel'];
	
	$_SESSION["contact"] = $data;
	header("Location:form_next.php?ticket=".$_SESSION["ticket"]);
}

if(!isset($_GET['ticket']) || !isset($_SESSION['ticket']) || $_GET['ticket'] != $_SESSION['ticket']){
	header('Content-Type: text/html; charset=UTF-8');
	echo 'こちらのページに直接アクセスすることはできません。';
}
else{
	$data = $_SESSION['contact'];
	$data['ticket'] = $_SESSION['ticket'];
	display('form_next_view.php', $data);
}