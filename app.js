var App = function () {

	var jsonData = [{"id":1},{"id":2},{"id":3}];
	
	var jsonData1 = [{"id":1},{"id":2},{"id":3,"children":[{"id":4},{"id":5},{"id":6}]}];
	
	var jsonData2 = [{"id":1},{"id":2,"children":[{"id":3,"children":[{"id":9, "children":[{"id":10}]}]}]},{"id":4,"children":[{"id":5},{"id":6},{"id":7, "children": [{"id":11}, {"id":12}]}]}];
	
	var tpl1 = Handlebars.compile($("#tpl1").html());
	
	var tpl2 = Handlebars.compile($("#tpl2").html());
	
	var terry = function(data, id){
		for(var i=0; i<data.length; i++){
			if(data[i].children==undefined){
				//compile template tpl1
				ferry(data[i], id);
			}
			else{
				//compile template 1 tpl1
				ferry(data[i], id);
				//compile template 2 tpl2for ul
				merry(data[i], id);
				terry(data[i].children, data[i].id);
			}
		}
	};
	
	var	ferry = function(data, id){
		var html    = tpl1(data);
		if(id==0){
			$("#here").append(html);
		}
		else{
			var selector = "#" +id;
			$(selector).append(html);
		}
	};
	
	var	merry = function(data, id){
		var html    = tpl2(data);
		if(id==0){
			$("#here").append(html);
		}
		else{
			var selector = "#" +id;
			$(selector).append(html);
		}
	};
	
    return {
    	init: function(){
    		terry(jsonData2, 0);
    	}
    };

}();