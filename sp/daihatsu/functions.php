<?php
/* <meta content="charset=UTF-8"> */

function var_dump2($mix){
	echo "<pre>";
	var_dump($mix);
	echo "</pre>";
}

function blank($value){
	if(isset($value)){
		if(is_array($value)){
			return count($value)==0;
		}else{
			return $value=="";
		}
	}
	return true;
}

function print_error($name){
	global $errors;
	if($errors[$name]):
?>
<p class="error">
	<?php echo $errors[$name]?>
</p>
<?php
	endif;
}

function h($var) {
  if (is_array($var)) {
    return array_map('h', $var);
  } else {
    return htmlspecialchars($var, ENT_QUOTES, 'UTF-8');
  }
}

function display($_template, $data) {
  foreach ($data as $key => $val) {
			$$key = h($val);
  }
  unset($data);
  require dirname(__FILE__) . '/./' . $_template;
}