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
            typeDNum = $(".typeD:checked").length,
            typeENum = $(".typeD:checked").length;
            const max = Math.max(typeANum, typeBNum, typeCNum, typeDNum, typeENum);
            if( typeANum >= max) {
                $(".ResultA").fadeIn();
            } else if( typeBNum >= max) {
                $(".ResultB").fadeIn();
            } else if( typeCNum >= max) {
                $(".ResultC").fadeIn();
            } else if( typeDNum >= max) {
                $(".ResultD").fadeIn();
            } else if( typeENum >= max) {
                $(".ResultE").fadeIn();
            }
    }
  });
});