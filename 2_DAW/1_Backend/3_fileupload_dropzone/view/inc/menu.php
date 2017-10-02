
<body class="homepage">

    <header id="header">
        <div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xs-4">
                        <div class="top-number"><p><i class="fa fa-phone-square"></i>  +0123 456 70 90</p></div>
                    </div>
                    <div class="col-sm-6 col-xs-8">
                       <div class="social">
                            <ul class="social-share">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                            </ul>
                            <div class="search">
                                <form role="form">
                                    <input type="text" class="search-form" autocomplete="off" placeholder="Search">
                                    <i class="fa fa-search"></i>
                                </form>
                           </div>
                       </div>
                    </div>
                </div>
            </div><!--/.container-->
        </div><!--/.top-bar-->

        <nav class="navbar navbar-inverse" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php?module=homepage"><img src="view/img/logo.png" alt="logo"></a>
                </div>

                <div class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <li class="
                        <?php if($_GET['module'] === 'homepage')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=homepage">Home</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'about-us')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=about-us">About Us</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'services')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=services">Services</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'books')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=books&view=create_books">Books</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'portfolio')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=portfolio">Portfolio</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i class="fa fa-angle-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="
                        <?php if($_GET['module'] === 'blog-item')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=blog-item">Blog Single</a></li>
                                <li class="
                        <?php if($_GET['module'] === 'pricing')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=pricing">Pricing</a></li>
                                <li class="
                        <?php if($_GET['module'] === '404')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=404">404</a></li>
                                <li class="
                        <?php if($_GET['module'] === 'shortcodes')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=shortcodes">Shortcodes</a></li>
                            </ul>
                        </li>
                        <li class="
                        <?php if($_GET['module'] === 'blog')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=blog">Blog</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'contact-us')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="index.php?module=contact-us">Contact</a></li>
                    </ul>
                </div>
                <h1><?php
                    if (!isset($_GET['module'])) {
                        echo "Home";
                    } else if (isset($_GET['module']) && !isset($_GET['view'])) {
                        echo "<a href='index.php?module=" . $_GET['module'] . "'>" . $_GET['module'] . "</a>";
                    }else{
                        echo "<a href='index.php?module=" . $_GET['module'] . "&view=".$_GET['view']."'>" . $_GET['module'] . "</a>";
                    }
                    ?></h1>
            </div><!--/.container-->
        </nav><!--/nav-->

    </header><!--/header-->
