<?
//管理者へ送信
$data = $_SESSION['contact'];
$car    = $data['car'];
$car_year    = $data['car_year'];
$kyori    = $data['kyori'];
$pref    = $data['pref'];
$name    = $data['name'];
$tel    = $data['tel'];


//担当者へのメール
mb_language('ja');
mb_internal_encoding('UTF-8');

date_default_timezone_set('Asia/Tokyo');
$nowdate.="送信日時：".date( "Y/m/d  H:i:s", time() )."";
$host.="ホスト名：".getHostByAddr(getenv('REMOTE_ADDR'))."";


$body = <<<MESSAGE


車買取館LPより中古車査定申込み

-------------------------------------------------
[デバイス]：スマホ
[車種名]：{$car}
[年式]：{$car_year}
[走行距離]：{$kyori}
[車の所在地]：{$pref}
[お名前]：{$name}
[TEL]：{$tel}

-------------------------------------------------
{$nowdate}
{$host}

MESSAGE;


//担当者へのメール
$header3 = 'From: ' . mb_encode_mimeheader("車買取館ダイハツLP") . ' <' . "car@mic-info.co.jp" . '>';
$subject3 = "車買取館ダイハツLPより中古車査定申込み";
$mailTo3  = "yukinobu.furuta@mic-info.co.jp";
$returnMail3 = "yukinobu.furuta@mic-info.co.jp";

if (ini_get('safe_mode')) {
  $result = mb_send_mail($mailTo3, $subject3, $body, $header3);
} else {
  $result = mb_send_mail($mailTo3, $subject3, $body, $header3, '-f' . $returnMail3);
}

//担当者へのメール
$header4 = 'From: ' . mb_encode_mimeheader("車買取館ダイハツLP") . ' <' . "car@mic-info.co.jp" . '>';
$subject4 = "車買取館ダイハツLPより中古車査定申込み";
$mailTo4  = "car@mic-info.co.jp";
$returnMail4 = "car@mic-info.co.jp";

if (ini_get('safe_mode')) {
  $result = mb_send_mail($mailTo4, $subject4, $body, $header4);
} else {
  $result = mb_send_mail($mailTo4, $subject4, $body, $header4, '-f' . $returnMail4);
}

$data = $_SESSION['contact'];
	
  $_SESSION = array();
	if (isset($_COOKIE[session_name()])){
		setcookie(session_name(), '', time() - 3600);
	}
   session_destroy();
?>
<!doctype html>
<html dir="ltr" lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0,  user-scalable=no, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<meta name="robots" content="noindex , nofollow" />
<title>無料査定のお申込み完了 | 車買取館</title>
<meta name="keywords" content="ダイハツ,買取,専門" />
<meta name="description" content="ダイハツ車の買取専門店だからできる高額買取。中間業者を介さず「直接買取」だから中間マージン無しで査定UP。まずは無料査定をご利用ください。" />
<link rel="stylesheet" href="https://kaitorikan.jp/sp/lib/featherlight.min.css" type="text/css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://kaitorikan.jp/sp/js/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
</script>
<link rel="stylesheet" href="https://kaitorikan.jp/sp/lib/daihatsu.css" type="text/css">
<style>
div#satei-send{
	padding: 40px 20px;
}
div#satei-send h1{
	font-size: 1.8rem;
	font-weight: bold;
	line-height: 30px;
	text-align: center;
}
div#satei-send p{
	font-size: 1.5rem;
	line-height: 25px;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  margin-top: auto;
}
</style>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89185523-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- Global site tag (gtag.js) - Google Ads: 686054964 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-686054964"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-686054964');
</script>
<!-- Event snippet for 無料見積り conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-686054964/4l8pCPTg4bcBELS8kccC'});
</script>
</head>
<body>
<header>
	<div id="top">
        <ul>
            <li><a href="https://kaitorikan.jp/sp/"><img src="https://kaitorikan.jp/sp/images/lp/daihatsu/logo.png" alt="車買取館"></a></li>
            <li>営業時間 10:00～19:00(年中無休)</li>
        </ul>
    </div>
    <div><a href="tel:0120831371" onClick="ga('send', 'event', 'スマホLP電話', 'ダイハツ電話CVページ上');"><img src="https://kaitorikan.jp/sp/images/lp/daihatsu/tel-head.png" alt="0120-831-371" width="100%"></a></div>
</header>
<main>
	<div id="satei-send">
		<h1>無料査定のお申込みありがとうございます</h1>
        <p class="mt40">
            車買取館にお問い合わせ頂き、誠にありがとうございます。<br>
            <br>
            無料査定の金額につきましては担当者より確認後、折り返しご連絡させていただきます。<br>
            <br>
            又、ご不明な点がございましたら、下記までお気軽にご連絡ください。<br>
            <br>
            TEL：<a href="tel:0120831371" onClick="ga('send', 'event', 'スマホLP電話', 'ダイハツ電話CVページ中');">0120-831-371（通話無料）</a>
        </p>
    </div>
</main>
<footer>
    <ul>
    	<li><a href="https://www.mic-info.co.jp/aboutus/" target="_blank">会社概要</a></li>
        <li><a href="http://www.mic-info.co.jp/privacy_policy/privacy_policy.html" target="_blank">プライバシーポリシー</a></li>
    </ul>
    <p id="copyright">&copy;車買取館.</p>
</footer>
</body>
</html>