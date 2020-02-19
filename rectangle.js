$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btn = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*cale button click event*/
  $btn.click(function(){
    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    
    //calculate
    var p = 2 * (w + h),
        a = w * h;
    /**
     * roundFractional
     * 保留小数点后n位
     * @param x 做近似处理的值
     * @param n 小数点后第n位
     * @returns 近似处理后的值
     */
    
    function roundFractional(x,n){
      return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
    }
    p = roundFractional(p,2);
    a = roundFractional(a,2);
    $perimeter.val(p);
    $area.val(a);
  });
});
