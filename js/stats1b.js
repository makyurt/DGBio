/* Year data --------------------------------------------------- */

   /* Manual entry

/* Block data --------------------------------------------------- */

fetch('../docs/blockinfo.php')
.then(response => response.json())
.then(data => {
setTimeout(function(){
document.getElementById('blockh').innerHTML = (data);
}, 250);} );


/* Node data --------------------------------------------------- */

var getReleaseData=()=> {
    return new Promise(function (resolve, reject) {
        $.getJSON('https://api.github.com/repos/digibyte/digibyte/releases')
            .done((data) => {
			
                var output={
                    version:    data[0].tag_name,
                    downloads:  0};
                for (var asset0 of data[0].assets) {
                    output.downloads+=asset0.download_count;}
			
			    var output1={
                    version:    data[1].tag_name,
                    downloads:  0};
                for (var asset1 of data[1].assets) {
                    output.downloads+=asset1.download_count;}
			
			    var output2={
                    version:    data[2].tag_name,
                    downloads:  0};
                for (var asset2 of data[2].assets) {
                    output.downloads+=asset2.download_count;}
			
			    var output3={
                    version:    data[3].tag_name,
                    downloads:  0};
                for (var asset3 of data[3].assets) {
                    output.downloads+=asset3.download_count;}
			
			    var output4={
                    version:    data[4].tag_name,
                    downloads:  0};
                for (var asset4 of data[4].assets) {
                    output.downloads+=asset4.download_count;}
			
			    var output5={
                    version:    data[5].tag_name,
                    downloads:  0};
                for (var asset5 of data[5].assets) {
                    output.downloads+=asset5.download_count;}
			
			    var output6={
                    version:    data[6].tag_name,
                    downloads:  0};
                for (var asset6 of data[6].assets) {
                    output.downloads+=asset6.download_count;}
			
			    var output7={
                    version:    data[7].tag_name,
                    downloads:  0};
                for (var asset7 of data[7].assets) {
                    output.downloads+=asset7.download_count;}
			
			    var output8={
                    version:    data[8].tag_name,
                    downloads:  0};
                for (var asset8 of data[8].assets) {
                    output.downloads+=asset8.download_count;}
			
			    var output9={
                    version:    data[9].tag_name,
                    downloads:  0};
                for (var asset9 of data[9].assets) {
                    output.downloads+=asset9.download_count;}
			
			    var output10={
                    version:    data[10].tag_name,
                    downloads:  0};
                for (var asset10 of data[10].assets) {
                    output.downloads+=asset10.download_count;}
			
                resolve(output);})
});}

setTimeout(function(){
getReleaseData().then((data)=>{
  document.getElementById('nodes').innerHTML = (data.downloads);
});
}, 250);