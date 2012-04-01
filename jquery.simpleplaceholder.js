/*
 * Simple Placeholder by @marcgg under MIT License
 * Report bugs or contribute on Gihub: https://github.com/marcgg/Simple-Placeholder
*/

(function($) {
  $.simplePlaceholder = {
    placeholderClass: null,

    hidePlaceholder: function(){
      var $this = $(this);
      if($this.val() == $this.attr('placeholder')){
        $this.val("").removeClass($.simplePlaceholder.placeholderClass);
      }
    },

    showPlaceholder: function(){
      var $this = $(this);
      if($this.val() == ""){
        $this.val($this.attr('placeholder')).addClass($.simplePlaceholder.placeholderClass);
      }
    },

    preventPlaceholderSubmit: function(){
      $(this).find(".simple-placeholder").each(function(e){
        var $this = $(this);
        if($this.val() == $this.attr('placeholder')){
          $this.val('');
        }
      });
      return true;
    }
  };

  $.fn.simplePlaceholder = function(options) {
    if(document.createElement('input').placeholder == undefined){
      var config = {
        placeholderClass : 'placeholding'
      };

      if(options) $.extend(config, options);
      $.simplePlaceholder.placeholderClass = config.placeholderClass;

      this.each(function() {
        var $this = $(this);
        $this.focus($.simplePlaceholder.hidePlaceholder);
        $this.blur($.simplePlaceholder.showPlaceholder);
        if($this.val() == '') {
          $this.val($this.attr("placeholder"));
          $this.addClass($.simplePlaceholder.placeholderClass);
        }
        $this.addClass("simple-placeholder");
        $(this.form).submit($.simplePlaceholder.preventPlaceholderSubmit);
      });
    }

    return this;
  };

})(jQuery);
