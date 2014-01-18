var Days = ["गुरू", "शुक्र", "शनि","रवि", "सोम", "मंगल", "बुध"];
var indexToMonth = ["चैत्र","वैशाख","ज्येष्ठ", "आषाढ़", "श्रावण", "भाद्रपद्र","आश्विन", "कार्तिक","अगहन", "पौष", "माघ", "फाल्गुन"] ;
var indexToDinank = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५"];
var maindiv = $("#month");   
maindiv.html("<div id='dayTable'></div><div id='side-banner'></div>");


var HinduYear2070 = {};

HinduYear2070["पौष"] = [	
	Date.parse("18-dec-2013"),//कृष्ण पक्ष १
	Date.parse("19-dec-2013"),//कृष्ण पक्ष २
	Date.parse("20-dec-2013"),//कृष्ण पक्ष ३
	Date.parse("21-dec-2013"),//कृष्ण पक्ष ४
	Date.parse("22-dec-2013"),//कृष्ण पक्ष ५
	Date.parse("23-dec-2013"),//कृष्ण पक्ष ६
	Date.parse("24-dec-2013"),//कृष्ण पक्ष ७
	Date.parse("25-dec-2013"),//कृष्ण पक्ष ८
	Date.parse("26-dec-2013"),//कृष्ण पक्ष ९
	Date.parse("27-dec-2013"),//कृष्ण पक्ष १०
	Date.parse("28-dec-2013"),//कृष्ण पक्ष ११
	Date.parse("29-dec-2013"),//कृष्ण पक्ष १२
	Date.parse("30-dec-2013"),//कृष्ण पक्ष १३
	Date.parse("31-dec-2013"),//कृष्ण पक्ष १४
	Date.parse("1-jan-2014"),//अमावस्या
	Date.parse("2-jan-2014"),//शुक्ल पक्ष १
	Date.parse("3-jan-2014"),//शुक्ल पक्ष २
	Date.parse("4-jan-2014"),//शुक्ल पक्ष ३
	Date.parse("5-jan-2014"),//शुक्ल पक्ष ४
	Date.parse("5-jan-2014"),//शुक्ल पक्ष ५
	Date.parse("6-jan-2014"),//शुक्ल पक्ष ६
	Date.parse("7-jan-2014"),//शुक्ल पक्ष ७
	Date.parse("8-jan-2014"),//शुक्ल पक्ष ८
	Date.parse("9-jan-2014"),//शुक्ल पक्ष ९
	Date.parse("10-jan-2014"),//शुक्ल पक्ष १०
	Date.parse("11-jan-2014"),//शुक्ल पक्ष ११
	Date.parse("12-jan-2014"),//शुक्ल पक्ष १२
	Date.parse("13-jan-2014"),//शुक्ल पक्ष १३
	Date.parse("14-jan-2014"),//शुक्ल पक्ष १४
	Date.parse("15-jan-2014")//पूर्णिमा 
];

HinduYear2070["माघ"] = [	
	Date.parse("17-jan-2014"),//कृष्ण पक्ष १
	Date.parse("18-jan-2014"),//कृष्ण पक्ष २
	Date.parse("19-jan-2014"),//कृष्ण पक्ष ३
	Date.parse("20-jan-2014"),//कृष्ण पक्ष ४
	Date.parse("21-jan-2014"),//कृष्ण पक्ष ५
	Date.parse("22-jan-2014"),//कृष्ण पक्ष ६
	Date.parse("23-jan-2014"),//कृष्ण पक्ष ७
	Date.parse("24-jan-2014"),//कृष्ण पक्ष ८
	Date.parse("25-jan-2014"),//कृष्ण पक्ष ९
	Date.parse("26-jan-2014"),//कृष्ण पक्ष १०
	Date.parse("27-jan-2014"),//कृष्ण पक्ष ११
	Date.parse("28-jan-2014"),//कृष्ण पक्ष १२
	Date.parse("29-jan-2014"),//कृष्ण पक्ष १३
	Date.parse("29-jan-2014"),//कृष्ण पक्ष १४
	Date.parse("30-jan-2014"),//अमावस्या
	Date.parse("31-jan-2014"),//शुक्ल पक्ष १
	Date.parse("1-feb-2014"),//शुक्ल पक्ष २
	Date.parse("2-feb-2014"),//शुक्ल पक्ष ३
	Date.parse("3-feb-2014"),//शुक्ल पक्ष ४
	Date.parse("4-feb-2014"),//शुक्ल पक्ष ५
	Date.parse("5-feb-2014"),//शुक्ल पक्ष ६
	Date.parse("6-feb-2014"),//शुक्ल पक्ष ७
	Date.parse("7-feb-2014"),//शुक्ल पक्ष ८
	Date.parse("8-feb-2014"),//शुक्ल पक्ष ९
	Date.parse("9-feb-2014"),//शुक्ल पक्ष १०
	Date.parse("10-feb-2014"),//शुक्ल पक्ष ११
	Date.parse("11-feb-2014"),//शुक्ल पक्ष १२
	Date.parse("12-feb-2014"),//शुक्ल पक्ष १३
	Date.parse("13-feb-2014"),//शुक्ल पक्ष १४
	Date.parse("14-feb-2014")//पूर्णिमा 
];

var CreateTableForMonth = function(month){
	var monthObject = HinduYear2070[indexToMonth[month-1]];
	var str = "<table>";
	for(var i=0; i<7; i++){
	str = str + '<tr><td>'+Days[i]+'</td> <td id="col_'+(i+1)+'"></td> <td id="col_'+(i+8)+'"></td> <td id="col_'+(i+15)+'"></td> <td id="col_'+(i+22)+'"></td> <td id="col_'+(i+29)+'"></td> <td id="col_'+(i+36)+'"></td></tr>'
	}
	str = str + "</table>";

	maindiv.find("#dayTable").html(str);

	var firstDay = monthObject[0];
	var StartId = firstDay.getDay();
	if(StartId <4){
		StartId = StartId + 4;
	}else{
		StartId = StartId - 3;
	}

	for(var x=0; x<30; x++){
		var day = monthObject[x];
		var today = false;
	
		var	dayindex = (day - firstDay)/86400000 + StartId;
		var paksh = "";
		if(x+1 <= 15){
			paksh = "कृष्ण";
		}else{
			paksh = "शुक्ल";
		}
	
		if(x===14){
			$("#col_" + dayindex).html("<div class='dinank'>"+indexToDinank[x] + "</div><div class='pakshtext'>अमावस्या </div></div>");
		}else if(x===29){
			$("#col_" + dayindex).html("<div class='dinank'>"+indexToDinank[x] + "</div><div class='pakshtext'>पूर्णिमा </div></div>");
		}else{
			$("#col_" + dayindex).html("<div class='dinank'>"+indexToDinank[x] + "</div><div class='pakshtext'>"+paksh+" </div></div>");
		}
		
		
		
		if(day.isToday()){
			$("#col_" + dayindex).addClass("today");
			var TodaysHinduDate = 'आज का पंचाग  <br/><b>विक्रम संवत २०७०, '+ indexToMonth[month-1] +' मास ('+indexToDinank[month-1]+') - '+ paksh +' पक्ष ' + indexToDinank[x] + " " + Days[(day.getDay()+ 3)%7]  +'वार</b><br/> ईसाई दिनांक - ' + day.toDateString();
			
		}
		
		
		

	}
	
	$("#side-banner").html(TodaysHinduDate);
}


CreateTableForMonth(11);


