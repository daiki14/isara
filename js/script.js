//アコーディオンをクリックした時の動作
$('.q-a-title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".q-a-box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});

$('.flow-title').on('click', function() {//タイトル要素をクリックしたら
  $('.flow-box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".flow-box");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});

$(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '100px' //下から50pxの位置に
        }, 10); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-100px' //下から-50pxの位置に
        }, 10); //0.3秒かけて隠れる
      }
    }
  });
  // pagetop.click(function () {
  //   $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
  //   return false;
  // });
});