/** 
* Project : StaticPage 
* Author : TonyXiao 
* Updated : Fri May 08 2015 11:43:29 
*/ 
require.config({baseUrl:"js/",map:{"*":{css:"css.min"}},paths:{modernizr:"../lib/modernizr.custom",jquery:"../lib/jquery-2.1.3.min"},waitSeconds:30,shim:{}}),require(["modernizr"],function(a){Modernizr.rgba?"":window.location="np.html"}),require(["jquery"],function(a){$(function(){})});