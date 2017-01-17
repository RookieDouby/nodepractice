/**
 * Created by zhanghongdou on 2017/1/17.
 */
var http = require('http'); //parse HTML
var fs = require('fs');
var cheerio = require('cheerio');

var queryString = "http://www.haha.mx/topic/1/new/";
var querySearch = 1;//set paging index
var urls = [];

var sumCount = 0;
var repeatCount = 0;// repeated pics
var downloadCount = 0;


//href: String  search:int
function getHtml(href, search) {
    console.log("Getting the pictures of " + search + "paging");
    var pageData = "";
    var req = http.get(href + search, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            pageData += chunk;
        });

        res.on('end', function () {
            $ = cheerio.load(pageData);
            var html = $(".joke-list-item .joke-main-content a img");

            for(var i = 0; i < html.length; i ++) {
                var src = html[i].attribs.src;
                //delete Ads
                if(src.indexOf("http://www.haha.mx") > -1) {
                    urls.push(html[i].attribs.srd);
                }
            }
        });
    });
}

function start() {
    console.log("Start getting pictures connecting...");
    getHtml(queryHref, startIndex);
}

start();