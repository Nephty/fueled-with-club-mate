(function(d){var b=window.AmazonUIPageJS||window.P,f=b._namespace||b.attributeErrors,a=f?f("WebFlowIngressJs",""):b;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})})(function(d,b,f){d.register("webflow-fetch-experience",function(){return{fetchExperience:function(a){return fetch(a,{headers:{Accept:"application/vnd.com.amazon.xa+html"}}).then(function(a){if(a.ok)return a.text();throw Error("Network response: "+a.status+", "+a.error);}).then(function(a){return{html:a}}).catch(function(a){return{error:a}})}}});
d.when("A","a-modal-framework","a-modal-framework-constants").register("webflow-modal",function(a,d,c){return{presentModal:function(e,b){e={type:"ajax",source:e};b='\x3cdiv class\x3d"'+c.CONTENT_WRAPPER_CLASS+'"\x3e\x3c/div\x3e';b=a.$('\x3cdiv style\x3d"background-color:white" class\x3d"overlay-container"\x3e\x3c/div\x3e').append("",'\x3cbutton class\x3d"overlay-close"\x3e\x3cspan class\x3d"a-icon a-icon-close-white"\x3e\x3c/span\x3e\x3c/button\x3e').append(b);e=new d(b,e,{dismissStrategy:"transient",
scrimType:"translucent"});e.present();e=e._frameworkWrapper.find(".overlay-close");a.declarative.create(e,"a-modal-framework-dismiss");a.declarative("a-modal-framework-dismiss",["click","keydown"],function(c){var b=a.$(c.$currentTarget).closest("."+constants.FRAMEWORK_WRAPPER_CLASS);if(0!==b.length&&(b=b.data("overlayInstance"))){var d="keydown"===c.type&&c.$event.which===a.constants.keycodes.ESCAPE;("click"===c.type||"persistent"!==b._dismissStrategy&&d)&&b.dismiss()}})}}});d.when("A","webflow-fetch-experience").register("webflow-bottomsheet",
function(a,b){return{}});d.when("webflow-modal","webflow-bottomsheet").register("webflow-routing",function(a,f){return{show:function(c){"bottom-sheet"==c.presentationConfig.presentationType&&f.presentBottomSheet(c.route.url,c);"modal"==c.presentationConfig.presentationType&&a.presentModal(c.route.url,c);"push"==c.presentationConfig.presentationType&&(c.route.url?b.location.href=c.route.url:(d.logError(null,"fullUrl not available:"+c.route.url+", navigating to fallbackUrl","WARN"),b.location.href=
c.route.flow.fallbackUrl))}}})});