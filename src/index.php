<?php
header('Content-Type: application/json');

$directory = '.';
$fileTypes = ['jpg', 'jpeg', 'png', 'gif','webp'];
$files = [];

if (is_dir($directory)) {
    if ($dh = opendir($directory)) {
        while (($file = readdir($dh)) !== false) {
            $filePath = $directory . $file;
            $fileExtension = pathinfo($filePath, PATHINFO_EXTENSION);
            if ($file != "." && $file != ".." && in_array($fileExtension, $fileTypes)) {
                $files[] = $file;
            }
        }
        closedir($dh);
    }
}

echo json_encode($files);
?>
