const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；  下面的userInfo是指mock目录下的json目录下的userInfo.json文件
Mock.mock('/get/bar', 'get', require('../../static/bar.json'));
Mock.mock('/get/pie', 'get', require('../../static/pie.json'));
Mock.mock('/get/wordcloud', 'get', require('../../static/wordcloud.json'));