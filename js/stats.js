/* Year data --------------------------------------------------- */



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
                    downloads:  0
                };
                for (var asset of data[0].assets) {
                    output.downloads+=asset.download_count;
                }
                resolve(output);
            })
            .fail(reject);
    });
}
setTimeout(function(){
getReleaseData().then((data)=>{
  document.getElementById('nodes').innerHTML = (270673 + data.downloads);
});
}, 250);