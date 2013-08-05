var App = function () {

	var jsonData1 = [{"id":1},{"id":2},{"id":3}];
	
	var jsonData2 = [{"id":1},{"id":2},{"id":3,"children":[{"id":4},{"id":5},{"id":6}]}];
	
	var jsonData3 = [{"id":1},{"id":2,"children":[{"id":3,"children":[{"id":9, "children":[{"id":10}]}]}]},{"id":4,"children":[{"id":5},{"id":6},{"id":7, "children": [{"id":11}, {"id":12}]}]}];
	
	var tpl1 = Handlebars.compile($("#tpl1").html());
	
	var tpl2 = Handlebars.compile($("#tpl2").html());
	
	/**
	 * Render calls specific template functions based on
	 * whether an object has children or not. 
	 */
	var render = function(data, id){
		for(var i=0; i<data.length; i++){
			if(data[i].children==undefined){
				//compile template tpl1 for li element
				createLiEl(data[i], id);
			}
			else{
				//compile template tpl1 for li element
				createLiEl(data[i], id);
				//compile template tpl2 for ul element
				createUlEl(data[i], id);
				render(data[i].children, data[i].id);
			}
		}
	};
	
	/**
	 * Creates LI element to be added to list.
	 * id specifies whether this element goes to root or inside another element. 
	 */
	var	createLiEl = function(data, id){
		var html    = tpl1(data);
		if(id==0){
			$("#here").append(html);
		}
		else{
			var selector = "#" +id;
			$(selector).append(html);
		}
	};
	
	/**
	 * Create UL element to be added to list.
	 * id specifies whether this element goes to root or inside another element.
	 */
	var	createUlEl = function(data, id){
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
    		render(jsonData2, 0);
    	}
    };

}();