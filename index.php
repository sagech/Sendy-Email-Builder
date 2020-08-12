<?php
require_once '_init.php';

App::setPage('theme');
require_once '_security.php';

// Do routing
// header('location: theme.php');
header('location: builder.php?theme=default');
