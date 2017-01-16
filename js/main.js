//Author: Indu P Chaube
//Will be use to load common javascript accross the pages.
// Function to load Javascript file dynomically before processing
function loadScript()
{
	var len=arguments.length;
	//alert(len);
	if(len){
		for(var i=0; i<=len-1;i++){
			//Creating Javascript element and appending html head element
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = arguments[i];
			head.appendChild(script);
		}
	}else{
		//Nothing to load
		console.log("Nothing to load, fake call from loadScript user!");
	}
}