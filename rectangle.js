/* global Rectangle: true,$forkMeGH,$bszPageFooter:true */
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btn = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  $forkMeGH.show('https://github.com/chuyaqi6/rectangle');
  $bszPageFooter.show('body'); 
  /**
     * decimalSave
     * 保留小数点后n位
     * @param x 做近似处理的值
     * @param n 小数点后第n位
     * @returns 近似处理后的值
     */
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  /*calc button click event*/
  $btn.click(function (){
    //get value
    var w = Number($width.val()),
        h = Number($height.val());

    //calculate
    var rect = new Rectangle();

    //decimalSave
    var p = decimalSave(rect.per(w,h),2);
    var a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }); 
});
