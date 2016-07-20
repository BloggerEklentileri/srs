function check_secure() {
var secssl = /^https/i;
var blog = document.location.hostname;
var slug = document.location.pathname;
var subs = window.location.search;
if (!window.location.origin.match(secssl)) {
window.location = "https://" + blog + slug + subs;
}
}
check_secure();
//https://bloggereklentileri.blogspot.com.tr/
//https://bloggereklentileri.blogspot.com/
//http://cizgifilmhikayeleri.blogspot.com.tr/
//http://cizgifilmhikayeleri.blogspot.com/