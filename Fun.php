<?php
header('Content-type: application/json');
$infono = array("Info"=>"No");
if($_POST['i']>10)
{					
	echo json_encode($infono);	
}
elseif ($_POST['i']<1) 
{
	echo json_encode($infono);	
}
elseif($_POST['j']>10)
{					
	echo json_encode($infono);	
}
elseif ($_POST['j']<1) 
{
	echo json_encode($infono);	
}
else
{
	$arr = array();
    for ($i=0; $i<$_POST['i']; $i++){
        for ($j=0; $j<$_POST['j']; $j++){
            $arr[$i][$j] = mt_rand(1, 99);
        }
    }
    echo json_encode($arr);
}
?>