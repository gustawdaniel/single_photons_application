<?php
    if($_SERVER["REMOTE_ADDR"]!=="127.0.0.1") {
        file_put_contents("../../spa-lab-access-log.txt",
            $_SERVER["REMOTE_ADDR"]
            ." - - ["
            .date("c")
            .'] "'.$_SERVER["REQUEST_METHOD"]." "
            .$_SERVER["REQUEST_URI"].'" '
            .$_SERVER["HTTP_USER_AGENT"], FILE_APPEND);
    }
    if($_SERVER["REQUEST_URI"]==="/wiki") {
        header("Location: http://famolab3-3.fizyka.umk.pl/");
    }
    echo file_get_contents("index.html");
