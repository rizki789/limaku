<?php

function rupiah($number)
{

    $result = "Rp " . number_format($number, 2, ',', '.');
    return $result;
}
