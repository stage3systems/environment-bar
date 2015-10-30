// vim: tabstop=2 noexpandtab shiftwidth=2 softtabstop=2
;(function ( $ ) {

	var pluginName = "environmentBar";
	var colours = {
		dev: "#396, #3a6",
		tst: "#900, #800",
		stg: "#fb0, #fa0"
	};
	var envBarHeight = "30px";

	// add aliases
	colours.qa = colours.tst;
	colours.test = colours.tst;
	colours.testing = colours.tst;
	colours.staging = colours.stg;
	colours.development = colours.dev;

	var defaults = {
		colours: colours,
		// environment
		env: "Test", // eg: Staging, Test, Development
		label: "system", // label postfix
		// branch/version/misc. details
		showDetails: true,
		detailsLabel: "",
		detailsValue: ""
	};

	// The actual plugin constructor
	function EnvironmentBar ( element, options ) {
		// insert div at the top of the element tag
		var $bar = $("<div>");
		$(element).prepend($bar);
		this.$element = $bar;
		this.settings = $.extend( {}, defaults, options );
		this._name = pluginName;
		this.init();
	}

	$.extend(EnvironmentBar.prototype, {
		init: function () {
			this.show();
			this.addStyles();
			$("body").css("padding-top", envBarHeight);
		},

		show: function () {
			var label = this.settings.env + " " + this.settings.label;
			var detailsLabel = this.settings.detailsLabel;
			var detailsValue = this.settings.detailsValue;
			var classes = "environment-bar " + this.settings.env.toLowerCase();
			var html = label;
			if ( detailsLabel && detailsValue && this.settings.showDetails ) {
				html += "<span class=\"branch\">" + detailsLabel + ": " + detailsValue + "</span>";
			}

			this.$element.html(html).addClass(classes);
		},

		addStyles: function () {
			this.$element.find( ".branch" ).css({
				"text-transform": "none",
				"letter-spacing": "normal",
				"float": "right"
			});

			var styles = {
				"width": "100%",
				"height": envBarHeight,
				"padding": "0 10px",
				"background-color": "#777",
				"font": "15px 'Helvetica Neue', Arial, Helvetica, sans-serif",
				"color": "#fff",
				"line-height": envBarHeight,
				"text-shadow": "0 -1px 0 rgba(0,0,0,0.2)",
				"text-transform": "uppercase",
				"position": "fixed",
				"top": "0",
				"left": "0",
				"z-index": "9999",
				"-moz-box-sizing": "border-box",
				"-webkit-box-sizing": "border-box",
				"box-sizing": "border-box"
			};

			if ( typeof this.settings.colours[ this.settings.env ] !== "undefined" ) {
				var envColours = this.settings.colours[ this.settings.env ].split(",");
				// add colours to indicate which environment
				styles[ "background-colour" ] = envColours[ 0 ];
				styles.background = "linear-gradient(to left, " + envColours[ 0 ] + " 50%, " + envColours[ 1 ] + " 50%)";
				styles[ "background-size" ] = "60px 30px";
			}

			this.$element.css(styles);
		}
	});

	$.fn[ pluginName ] = function ( options ) {
		this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new EnvironmentBar( this, options ) );
			}
		});

		return this;
	};

})( jQuery );
