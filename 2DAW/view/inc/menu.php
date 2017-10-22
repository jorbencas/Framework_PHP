
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
                    <!--index.php?module=main-->
                    <a class="navbar-brand" href="<?php amigable('?module=main'); ?>"><img src="<?php echo SITE_PATH ?>view/img/logo.png" alt="logo"></a>
                </div>	
                <div class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <li class="
                        <?php if($_GET['module'] === 'main')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="<?php amigable('?module=main'); ?>">Home</a></li>
                        
                        <li class="
                        <?php if($_GET['module'] === 'books')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="<?php amigable('?module=books&function=form_books'); ?>">Books</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'listbooks')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="<?php amigable('?module=listbooks&function=form_list_books'); ?>">Listbooks</a></li>
                        <li class="
                        <?php if($_GET['module'] === 'contact')
                                 echo'active';
                              else
                                 echo 'deactivate';
                        ?>"><a href="<?php amigable('?module=contact&function=view_contact'); ?>">Contact</a></li>                        
                    </ul>
                </div>
            </div>
        </nav><!--/nav-->

    </header><!--/header-->
