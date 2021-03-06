/* Copyright 2014 Alexander Oberegger

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */


function index(hooks,context,cb){
	var socket, loc = document.location, port = loc.port == "" ? (loc.protocol == "https:" ? 443
			: 80)
			: loc.port, url = loc.protocol + "//"
			+ loc.hostname + ":" + port + "/", pathComponents = location.pathname
			.split('/'),
	// Strip admin/plugins
	baseURL = pathComponents.slice(0,
			pathComponents.length -1).join('/')
			+ '/', resource = baseURL.substring(1)
			+ "socket.io";			
	socket = io.connect(url, {resource : resource}).of("/pluginfw/user_pad_frontend_unlogged");
	
	
};






exports.documentReady = function(hooks, context, cb){
	    //console.log(context);
	    
		if(context == "/user_pad_frontend/index")
			index(hooks, context,cb);
		else
			return;

        
};


