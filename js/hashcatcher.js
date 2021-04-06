// JavaScript Document

    var target = location.hash
	
    if (['#ecosystem', '#jared', '#developers', '#foundation', '#dgbat', '#wiki', '#telegram', '#socialmedia', '#digiassetservices', '#dgbcore', '#dgbmobile', '#dgbgo', '#docs', '#contribute', '#history', '#digidservices'].indexOf(target) >= 0)
    
       window.addEventListener("load", function(){
		 setTimeout(function(){
           window.scrollTo(0, $(target).offset().top -100);
		 }, 1000);
       });
		
	else if (target.length > 0)
    
       window.addEventListener("load", function(){
		 setTimeout(function(){
           window.scrollTo(0, $(target).offset().top);
		 }, 1000);
       });
		
    else
    null