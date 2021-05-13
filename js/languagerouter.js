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

    var langvalue = location.search.substring(1);
    var browserlang = navigator.language || navigator.userLanguage;
	var langcode5 = browserlang.substr(0,5);
	var langcode3 = browserlang.substr(0,3);
	var langcode2 = browserlang.substr(0,2);
		
	if (langvalue == "lang=en") null

	else if (langcode3 == "fil")
	window.location.replace('fil/'+target)
		
    else if (['nb', 'no', 'nn'].indexOf(langcode2) >= 0)
	window.location.replace('nb/'+target)
		
	else if (['hr', 'sr', 'bs'].indexOf(langcode2) >= 0)
	window.location.replace('hr/'+target)
		
	else if (['cs', 'sk'].indexOf(langcode2) >= 0)
	window.location.replace('cs/'+target)
		
	else if (['af', 'da', 'de', 'es', 'fr', 'id', 'it', 'sw', 'hu', 'ms', 'nl', 'pl', 'pt', 'ro', 'sq', 'sl', 'fi', 'sv', 'vi', 'tr', 'ru', 'bg', 'el', 'hi', 'th', 'ja', 'ko', 'zh', 'ar', 'fa'].indexOf(langcode2) >= 0)
			
	window.location.replace(langcode2+'/'+target)
		
	else {
	fetch('https://ipinfo.io/json?token=d0930e5241b7f2')
    .then((response) => {
    return response.json()
    })
		
	  .then((data) => {
        if (data.country == "US")
	    window.location.replace('en-us/'+target)
		
	    else if (data.country == "GB")
	    window.location.replace('en-gb/'+target)
		
	    else if (data.country == "CA")
	    window.location.replace('en-ca/'+target)
		
	    else if (data.country == "AU")
	    window.location.replace('en-au/'+target)
		
	    else if (data.country == "NZ")
	    window.location.replace('en-nz/'+target)
		
	    else if (data.country == "BR")
	    window.location.replace('pt-br/'+target)
		
		else if (data.country == "IN")
	    window.location.replace('en-in/'+target)
		
		else if (data.country == "NG")
	    window.location.replace('en-ng/'+target)
		
		else if (['KE', 'TZ', 'CD', 'RW', 'UG'].indexOf(data.country) >= 0)
	    window.location.replace('sw/'+target)
		
		else if (data.country == "VN")
	    window.location.replace('vi/'+target)
		
		else if (data.country == "MY")
	    window.location.replace('ms/'+target)
		
		else if (data.country == "ID")
	    window.location.replace('id/'+target)
      })
		
      .catch((err) => {
	    if (langcode5 == "en-US")
	    window.location.replace('en-us/'+target)
		
	    else if (langcode5 == "en-GB")
	    window.location.replace('en-gb/'+target)
		
        else if (langcode5 == "en-CA")
	    window.location.replace('en-ca/'+target)
		
	    else if (langcode5 == "en-AU")
	    window.location.replace('en-au/'+target)
		
	    else if (langcode5 == "en-NZ")
	    window.location.replace('en-nz/'+target)
		
	    else if (langcode5 == "pt-BR")
	    window.location.replace('pt-br/'+target)
		
		else if (langcode5 == "en-IN")
	    window.location.replace('en-in/'+target)
		
		else if (langcode5 == "en-NG")
	    window.location.replace('en-ng/'+target)
	  })
	}