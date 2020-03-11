$(function(){
  //ボタンがクリックされた時
  $("button").on("click", function(){
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
        typeBNum = $(".typeB:checked").length,
        typeCNum = $(".typeC:checked").length,
        typeDNum = $(".typeD:checked").length;
      if( typeANum > (typeBNum + typeCNum + typeDNum - 3)) {
        //もしもAの方が多かったらAタイプを表示
        $(".ResultA").fadeIn();
      } else if( typeBNum > (typeANum + typeCNum + typeDNum - 3)) {
        //もしもBの方が多かったらBタイプを表示
        $(".ResultB").fadeIn();
      }
      else if( typeCNum >(typeANum + typeBNum + typeDNum - 3) ) {
        //もしもBの方が多かったらBタイプを表示
        $(".ResultC").fadeIn();
      }
      else if( typeDNum > (typeANum + typeBNum + typeCNum - 3) ) {
        //もしもBの方が多かったらBタイプを表示
        $(".ResultD").fadeIn();
      }
    }
  });
});