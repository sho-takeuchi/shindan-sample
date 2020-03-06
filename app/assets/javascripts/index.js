$(function(){
 
  //ボタンがクリックされた時
  $("button").cllick(function(){
  //一度結果を非表示にする
    $(".result").hide();   
    //問題数を取得
    var qNum = $("ul li").length;
    
    if( $("ul li input:checked").length < qNum ){
      //全てチェックしていなかったらアラートを出す
      alert("未回答の問題があります");
    } 
    else {
        //チェックされているinputの数を取得
        var typeANum = $(".typeA:checked").length,
        typeBNum = $(".typeB:checked").length;
      if( typeANum > typeBNum ) {
        //もしもAの方が多かったらAタイプを表示
        $(".resultA").fadeIn();
      } else if( typeANum < typeBNum ) {
        //もしもBの方が多かったらBタイプを表示
        $(".resultB").fadeIn();
      }
    }
  });
});