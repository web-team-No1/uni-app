
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/takeType/takeType","pages/typeQuery/typeQuery","pages/receptionEnd/receptionEnd","pages/acceptance/acceptance","pages/approved/approved","pages/statistics/statistics","pages/typeQuery/typeQueryReception/typeQueryReception","pages/typeQuery/typeMeasure/typeMeasure","pages/receptionEnd/typeDetails/typeDetails","pages/receptionEnd/fiftration/fiftration","pages/receptionEnd/detailsAmend/detailsAmend","pages/approved/approvedParticulars/approvedParticulars","pages/statistics/statisticFilter/statisticFilter","pages/trywaitcheck/trywaitcheck","pages/trywaitcheck/trywaitdetial/trywaitdetial","pages/trywaited/trywaited","pages/serviced/serviced","pages/serviced/serviceddetails/serviceddetails","pages/serviced/serviceddetails/servicepic/servicepic","pages/acceptance/acceptancecheck"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"业务端","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":""}},{"path":"/pages/takeType/takeType","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/typeQuery/typeQuery","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/receptionEnd/receptionEnd","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/acceptance/acceptance","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/approved/approved","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/statistics/statistics","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/typeQuery/typeQueryReception/typeQueryReception","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/typeQuery/typeMeasure/typeMeasure","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/receptionEnd/typeDetails/typeDetails","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/receptionEnd/fiftration/fiftration","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/receptionEnd/detailsAmend/detailsAmend","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/approved/approvedParticulars/approvedParticulars","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/statistics/statisticFilter/statisticFilter","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/trywaitcheck/trywaitcheck","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/trywaitcheck/trywaitdetial/trywaitdetial","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/trywaited/trywaited","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/serviced/serviced","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/serviced/serviceddetails/serviceddetails","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/serviced/serviceddetails/servicepic/servicepic","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/acceptance/acceptancecheck","meta":{},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
