google.load("feeds", "1");
function initialize() {
  //RSSフィードのURL設定
  //Googleキャッシュ対策
  var d = new Date();
  var dq = d.getMonth()+""+d.getDate()+""+d.getHours();
  
  var feed = new google.feeds.Feed("http://rssblog.ameba.jp/kaitorikan/rss20.xml"+"?"+dq);

  //フィード表示数初期設定
  feed.setNumEntries(14);	//とりあえず走査は10フィードまでとする
  var traceNum = 5;			//TOPページに表示する数
  
  feed.load(function(result) {
    if (!result.error) {
	  
	  //PRつきフィードを外した配列tmpArray生成
	  var titleArray = new Array();
	  var linkArray = new Array();
	  var dateArray = new Array();
	  
	  for(var i=0; i<result.feed.entries.length; i++){
		  var entry = result.feed.entries[i];

		  if(!entry.title.match(/^PR:/)){
			titleArray.push(entry.title);
		  	linkArray.push(entry.link);
		  	dateArray.push(entry.publishedDate);	
		  }
	  }	//endfor(var i=0; i<10; i++)
	
	
	  //PRを外した配列からフィードを表示
	  var container = document.getElementById("newsmenu");

	  for(var j=0; j<traceNum; j++){
		  //window.alert(titleArray[j]);

		  	var div = document.createElement("li");
        	var a = document.createElement("a");
       		a.href = linkArray[j];
			a.target = "_blank";
			
			// 日付フォーマットの変換＆タイトル取得
			var dateStr = new Date(dateArray[j]);
			var year = dateStr.getFullYear();
			var month = dateStr.getMonth() + 1;
			var date = dateStr.getDate();
 			var postDate = '(' + month + '/' + date + ') ';
			var titleTxt = titleArray[j];
			
       		//日付タイトル間改行なしパターン
			//var list = titleArray[j] + "(" + dateArray[j].substring(5, 11) + ")" ;			
			//var list = postDate + " " + titleArray[j] ;
       		//a.appendChild(document.createTextNode(list));
			
			//日付タイトル間改行パターン
			a.appendChild(document.createTextNode(titleTxt));
			a.appendChild(document.createTextNode(postDate));
			//a.appendChild( document.createElement( 'br' ));
	div.appendChild(a);
        	container.appendChild(div);
			
	  }	//end_for(var j=0; j<traceNum; j++)

    }	//end_if(!result.error)
	
  });	//end_function(result)
}		//ned_initialize
google.setOnLoadCallback(initialize);