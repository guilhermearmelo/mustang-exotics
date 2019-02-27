jQuery.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();
elemtHeight = Math.round(elemtHeight);

var bounds = this.offset();
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//END
}

function loadAnimations(){
  setTimeout(function() {
        $("#clearBlur").addClass('minimizeBlur');
  }, 1000);
}

loadAnimations();
