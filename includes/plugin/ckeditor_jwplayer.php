<?php

/**
 * @Project JWPLAYER PLUGIN FOR CKEDITOR
 * @Author PHAN TAN DUNG (phantandung92@gmail.com)
 * @Copyright (C) 2014 PHAN TAN DUNG. All rights reserved
 * @Createdate 30/11/2014, 00:00:00 GMT
 */

if (! defined('NV_MAINFILE')) {
    die('Stop!!!');
}

global $my_footer;

$my_footer .= "<script type=\"text/javascript\" src=\"" . NV_BASE_SITEURL . NV_ASSETS_DIR . "/images/jwplayer/jwplayer.js\"></script>\n";
$my_footer .= "<script type=\"text/javascript\">jwplayer.key=\"KzcW0VrDegOG/Vl8Wb9X3JLUql+72MdP1coaag==\";</script>\n";
$my_footer .= "<script type=\"text/javascript\" src=\"" . NV_BASE_SITEURL . NV_ASSETS_DIR . "/images/jwplayer/jwplayer.trigger.js\"></script>\n";
