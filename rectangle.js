/* global Rectangle: true,$forkMeGH,$bszPageFooter:true,validate:true */
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btn = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;
  $forkMeGH.show('https://github.com/chuyaqi6/rectangle');
  $bszPageFooter.show('body'); 
  $width.focusout(function() {
    var result = validate($width.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $widthValidate.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidate.html('');
    }
  });
  $height.focusout(function() {
    var result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });
  /*calc button click event*/
  $btn.click(function (){
    if(!isPassValidate) return;
    //get value
    var w = $width.val(),
        h = $height.val();

    //calculate
    var r = new Rectangle(w, h);

    //output
    $per.val(r.perimeter());
    $area.val(r.area());
  }); 
});
