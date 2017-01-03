app.controller('homeCtrl', function($scope, $location, $state, $http, $rootScope) {
	
	$scope.backsShow = function () {
		$('.fronts, .new-rght').hide();
		$('.backs').show();
	};
	
	$scope.frontsShow = function () {
		$('.fronts, .new-rght').show();
		$('.backs').hide();	
	};
	

    $scope.openDefault = function () {
      //alert('');
    	//$("#defaultOpen").click();
      $scope.openCity(event, 'London', 1);
      

      $(".adv-search").on("click", function(){

          $("#myTooltip1").popover({
         	  content: $('#theformcontent').html(),
         	  html: true,
               placement : 'bottom'
           }); 
          $("#myTooltip1").popover('show');
          $('.pop-close').on('click', function () {
        	  $("#myTooltip1").popover('hide');
          });
      });
      
      
      $('body').on('click', function (e) {
      $('[data-toggle="popover"],[data-original-title]').each(function () {
          //the 'is' for buttons that trigger popups
          //the 'has' for icons within a button that triggers a popup
          if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
              (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
          }

      });
      });
      
      
      $(".knw-more").off().on("click", function(){
    	  var wid = $('.menu-bg').parent('div').width()+"px";
    	  $("#myTooltip2").popover({
    		  content: "<div style='max-width:"+wid+"; width:"+wid+"' class='filter-contain'><ul><li>Details Going on here...</li></ul></div>", 	
              html: true,
              placement : 'bottom'
          });
    	  $("#myTooltip2").popover('show');
    	  //$("#myTooltip2").width($(".menu-bg").width());
      });
      
      $(".filter-icon").click(function(){
    	  //alert('');
          $("#myTooltip").popover({
        	  content: "<div class='filter-contain' style='width: 180px'><ul><li><input type='checkbox'>&nbsp;<label>Select All</label></li>" +
              		"<li><input type='checkbox'>&nbsp;<label>Bluemix Challenge</label></li>" +
              		"<li><input type='checkbox'>&nbsp;<label>Challenge2</label></li>" +
              		"<li><input type='checkbox'>&nbsp;<label>Challenge3</label></li></ul></div>", 	
              html: true,
              placement : 'bottom'
          }); 
          $("#myTooltip").popover('show');
    	  //$("#myTooltip").tooltip('show');
      });
      
      
      $(".left-arr-menu").off().on("click", function () {
        $(".float-major-menu, .hide-arr-menu").show();
        $(".hide-arr-menu").addClass("midl-menu");
        $(".midl-menu").off().on("click", function () {
            $(".float-major-menu, .hide-arr-menu").hide();
            $(".float-menu").show();
          });
        $(".float-menu").hide();
      });
      $(".ide-det").text(function(index, currentText){return currentText.substr(0, 100);});
      $(".fnt-msg").mouseenter(function () {
        $(this).next(".bck-msg").show();
        $(this).hide();
      });
      $(".bck-msg").mouseenter(function () {
    	  $(this).show();
      });
      $('body').not('.bck-msg').mouseenter(function () {
    	  $(".fnt-msg").show();
    	  $(".bck-msg").hide();
      });
      $(".bck-msg").mouseleave(function () {
        $(this).prev(".fnt-msg").show();
        $(this).hide();
      });
      
      $("ul.tab li a").off().on("click", function () {
    	  $(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
    	  if($(this).text() != 'SUB IDEAS' && $(this).text() != 'POPULAR IDEAS'){
    		  $scope.openCity(event, 'Paris');
    	  }else{
    		  $scope.openCity(event, 'London');
    	  }
    	  
      });
      
      $(".sub-menus1 li").off().on("click", function () {
    	 $(this).addClass('selected');
    	 $(this).siblings('li').removeClass('selected');
        $(".float-major-menu").addClass("rght5");
        $(".hide-arr-menu").addClass("big-menu");
        $(".big-menu").off().on("click", function () {
        	$(".sub-menus1 li").removeClass('selected');
          $(".float-major-menu").removeClass("rght5");
          $(".hide-arr-menu").addClass("midl-menu");
          $(".midl-menu").off().on("click", function () {
            $(".float-major-menu, .hide-arr-menu").hide();
            $(".float-menu").show();
          });
        });
      });
      /*setTimeout(function () {
    	  $("#defaultOpen").click();
      }, 2000);*/
    };

      $scope.openCity =  function(evt, cityName, flag) {
    // Declare all variables
    		$('.add-fav-lnk').on('click', function () {
    		  	  $('.fav-page').hide();
    		  	  $(".add-fav-section").show();
    		    });
    		
    		$('.show-home-fav').on('click', function () {
    		  	  $(".add-fav-section").hide();
  		  	  $('.fav-page').show();
  		    });
    		
    		
    		
    var i, tabcontent, tablinks;
    //$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
       // tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    
    if(flag){
    	$(".tablinks").eq(0).addClass(' active');
    }
    //evt.currentTarget.className += " active";
  };
  
  $scope.iconRaise = function () {
	  $(".rolls span img").hover(function () {
    	  t = $(this).attr('src');
    	 var tt = t.split(".png");
    	 console.log(tt[0]+"1.png");
    	 if(tt[0] != 'images/Details_views-icon'){
    	 $(this).attr('src', tt[0]+"_Hover.png");
    	 }
    	}, function () {
    		$(this).attr('src', t);
    	});
	  
	  $(".ide-det").each(function () {
		   var textt = $(this).text().substring(0, 200);
		   if($(this).text().length>200){
		 	textt = textt+"...";
		    }
		  $(this).text(textt);
		});
  }
});


