define(function(require){
	var $ = require("jquery"),
	ViewComponent = require("$UI/system/lib/base/viewComponent");
	
	var Label = ViewComponent.extend({
		init: function(value, bindingContext){
			this.callParent(value, bindingContext);
			this.$domNode = $(this.domNode);
			this.$domNode.text(this.$domNode.attr('bind-text'));
		},
        set: function(values){
        	if('bind-text' in values){
        		this.$domNode.text(values['bind-text']);
        	}else if('text' in values){
        		this.$domNode.text(values['text']);
        	}
        }
		
	});
	
	var Image = ViewComponent.extend({
		init: function(value, bindingContext){
			this.callParent(value, bindingContext);
			this.$domNode = $(this.domNode);
			if(this.$domNode.attr('src')){
				this.$domNode.attr('src',this.buildSrc(this.$domNode.attr('src')));				
			}else{
				var src = this.$domNode.attr('bind-attr-src');
				if(src.indexOf("require.") !=-1){
					var idx1 = src.indexOf("(");
					var idx2 = src.indexOf(")");
					src = src.substring(idx1+2, idx2-1);
					//src = require.toUrl(src);
					this.$domNode.attr('src',src);	
				}
			}
		},
		
		buildSrc:function(src){
			if(src){
				if(src.indexOf("$UI") !=-1){
					src = require.toUrl(src);
				}
			}
			return src||"";
		},
		
        set: function(values){
        	if('src' in values){
    			this.$domNode.attr('src',this.buildSrc(values['src']));
        	}
        }

	});
	
	return {'label(html)':Label,
		'image(html)':Image};
});