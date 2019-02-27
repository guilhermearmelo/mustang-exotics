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
     $("#imageMove").addClass('bgClear');
      setTimeout(function() {
        $("#moveUpAppear").addClass('appear fadeInUp');
      }, 1500);
  }, 500);
}

loadAnimations();

function changePic1(){
  $("#selectorLeft1").addClass('d-none');
  $("#selectorLeft2").removeClass('d-none');

  $("#selectorRight1").addClass('d-none');
  $("#selectorRight2").removeClass('d-none');


  $("#img1").addClass('d-none');
  $("#img2").removeClass('d-none');
}


function changePic2(){
  $("#selectorLeft1").removeClass('d-none');
  $("#selectorLeft2").addClass('d-none');

  $("#selectorRight1").removeClass('d-none');
  $("#selectorRight2").addClass('d-none');


  $("#img1").removeClass('d-none');
  $("#img2").addClass('d-none');
}

function changeVid1(){
  $("#selectorLeftVid1").addClass('d-none');
  $("#selectorLeftVid2").removeClass('d-none');

  $("#selectorRightVid1").addClass('d-none');
  $("#selectorRightVid2").removeClass('d-none');


  $("#vid1").addClass('d-none');
  $("#vid2").removeClass('d-none');
}


function changeVid2(){
  $("#selectorLeftVid1").removeClass('d-none');
  $("#selectorLeftVid2").addClass('d-none');

  $("#selectorRightVid1").removeClass('d-none');
  $("#selectorRightVid2").addClass('d-none');


  $("#vid1").removeClass('d-none');
  $("#vid2").addClass('d-none');
}

function changeToVid(){
  $("#picSection").addClass('d-none');
  $("#vidSection").removeClass('d-none');
}

function changeToPic(){
  $("#picSection").removeClass('d-none');
  $("#vidSection").addClass('d-none');
}
