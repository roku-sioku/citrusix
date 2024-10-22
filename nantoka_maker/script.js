// ボタンを押してimgのsrcを切り替え、一つのカテゴリで一つだけ表示したいときに
// const pushBtn = (btn,src) => {
//     document.getElementById(btn).onclick = function(){
//       document.getElementById("test").src=src;
//     }
//   }
//   pushBtn("btn_a","img/a.png")
//   pushBtn("btn_b","img/b.png")
//   pushBtn("btn_c","img/c.png")
//   pushBtn("btn_null","")

// 肌のマスクを追加
function AddSkinMask(){
// class"skin base"を持つ要素の配列を取得
let skinMask = document.getElementsByClassName('skin base');
// それぞれのsrcを取ってきて要素の後ろにそのマスクを入れる
for (let i=0; i<skinMask.length;i++){
  let src = skinMask[i].src;
  skinMask[i].insertAdjacentHTML('afterend',
    `<div class="skin-mask mask" style="z-index: ${(i+1)*5}; 
          mask-image:url('${src}');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position:  center;
          -webkit-mask-image:url('${src}');
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position:  top;"></div>`)
}}
AddSkinMask();

// 肌の色を取得
let skin_color = document.getElementById('skin-color');
// 肌マスクのdivを取得
let skinMaskAreas = document.getElementsByClassName('skin-mask'); 
// カラーピッカーの色が変わったときにマスクの背景色を変える
skin_color.addEventListener('change',function(){
    for (let i=0; i<skinMaskAreas.length; i++){
    skinMaskAreas[i].style.background = this.value;
  }
});

  //耳切り替え
  const changeEar = (btn,srcBaseL,srcLineL,srcBaseR,srcLineR) => {
    // btnクリック時に関数が動く
    document.getElementById(btn).onclick = function(){
      // 入れたURLをsrcに入れる
      document.getElementById("earL_base").src=srcBaseL;
      document.getElementById("earL_line").src=srcLineL;
      document.getElementById("earR_base").src=srcBaseR;
      document.getElementById("earR_line").src=srcLineR;
      console.log(`${srcBaseL},${srcBaseR}`);
      // マスクのdivたちを取ってくる
      let skinMask2 = document.getElementsByClassName('skin-mask');
      // マスクのdivのうち0番目と2番目のURLを書き換える
      if(skinMask2[0]){
        skinMask2[0].style.maskImage = `url("${srcBaseL}")`;
        skinMask2[0].style.webkitMaskImage = `url("${srcBaseL}")`;
      }
      if(skinMask2[2]){
        skinMask2[2].style.maskImage = `url("${srcBaseR}")`;
        skinMask2[2].style.webkitMaskImage = `url("${srcBaseR}")`;
      }
    }
  }
  changeEar("ear_human","img/earL_base_human.png","img/earL_line_human.png","img/earR_base_human.png","img/earR_line_human.png")
  changeEar("ear_elf","img/earL_base_elf.png","img/earL_line_elf.png","img/earR_base_elf.png","img/earR_line_elf.png")

//瞳マスク追加
function AddPupilMask(){
  // class"pupil base"を持つ要素の配列を取得
  let pupilMask = document.getElementsByClassName('pupil base');
  // それぞれのsrcを取ってきて要素の後にそのマスクを入れる
  for (let i=0; i<pupilMask.length;i++){
    let src = pupilMask[i].src;
    pupilMask[i].insertAdjacentHTML('afterend',
      `<div class="pupil-mask mask" style=" z-index: 40;
            mask-image:url('${src}');
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position:  center;
            -webkit-mask-image:url('${src}');
            -webkit-mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: top;"></div>`)
  }}
  AddPupilMask();
// 瞳の色を取得
let pupil_color1 = document.getElementById('pupil-color1');
let pupil_color2 = document.getElementById('pupil-color2');
let pupil_pointcolor = document.getElementById('pupil-pointcolor');
// 瞳の色マスクのdivを取得、0番目は瞳の色1、1番目は瞳の色2、2番目は瞳孔の色
let pupilMaskAreas = document.getElementsByClassName('pupil-mask'); 
// カラーピッカーの色が変わったときにマスクの背景色を変える
pupil_color1.addEventListener('change',function(){
    pupilMaskAreas[0].style.background = this.value;
});
pupil_color2.addEventListener('change',function(){
  pupilMaskAreas[1].style.background = this.value;
});
pupil_pointcolor.addEventListener('change',function(){
  pupilMaskAreas[2].style.background = this.value;
});

//ハイライト切り替え
const changeHighlight = (btn,src) => {
  document.getElementById(btn).onclick = function(){
      document.getElementById("highlight").src=src;
  }
}
changeHighlight("btn_HL1","img/pupil_highlight1.png")
changeHighlight("btn_HL2","img/pupil_highlight2.png")
changeHighlight("btn_HL3","img/pupil_highlight3.png")
changeHighlight("btn_HL4","img/pupil_highlight4.png")

// 睫毛切り替え
const changeEyelashes = (btn,src) => {
  document.getElementById(btn).onclick = function(){
    document.getElementById("eyelashes").src=src;
  }
}
changeEyelashes("btn_EL1_1","img/eyelashes1_1.png")
changeEyelashes("btn_EL1_2","img/eyelashes1_2.png")
changeEyelashes("btn_EL1_3","img/eyelashes1_3.png")
changeEyelashes("btn_EL2_1","img/eyelashes2_1.png")
changeEyelashes("btn_EL2_2","img/eyelashes2_2.png")
changeEyelashes("btn_EL2_3","img/eyelashes2_3.png")
changeEyelashes("btn_EL3_1","img/eyelashes3_1.png")
changeEyelashes("btn_EL3_2","img/eyelashes3_2.png")
changeEyelashes("btn_EL3_3","img/eyelashes3_3.png")

//髪マスク追加
function AddHairMask(){
  // class"hair base"を持つ要素の配列を取得
  let hairMask = document.getElementsByClassName('hair base');
  // それぞれのsrcを取ってきて要素の後にそのマスクを入れる
  for (let i=0; i<hairMask.length;i++){
    let src = hairMask[i].src;
    // 後ろ髪だけz-index:0;
    if(i==0){
      hairMask[i].insertAdjacentHTML('afterend',
        `<div class="hair-mask mask" style=" z-index: 0;
              mask-image:url('${src}');
              mask-size: contain;
              mask-repeat: no-repeat;
              mask-position:  center;
              -webkit-mask-image:url('${src}');
              -webkit-mask-size: contain;
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-position: top;"></div>`)
    }else{
      hairMask[i].insertAdjacentHTML('afterend',
        `<div class="hair-mask mask" style=" z-index: ${i*5+15};
              mask-image:url('${src}');
              mask-size: contain;
              mask-repeat: no-repeat;
              mask-position:  center;
              -webkit-mask-image:url('${src}');
              -webkit-mask-size: contain;
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-position: top;"></div>`)
    }

  }}
  AddHairMask();

// 髪の色を取得
let hair_color = document.getElementById('hair-color');
// 髪マスクのdivを取得
let hairMaskAreas = document.getElementsByClassName('hair-mask'); 
// カラーピッカーの色が変わったときにマスクの背景色を変える
hair_color.addEventListener('change',function(){
    for (let i=0; i<hairMaskAreas.length; i++){
    hairMaskAreas[i].style.background = this.value;
  }
});

//髪切り替え
const changeHair = (btn,hair,srcBase,srcLine) => {
  // btnクリック時に関数が動く
  document.getElementById(btn).onclick = function(){
    // 入れたURLをsrcに入れる
    document.getElementById(`${hair}_base`).src=srcBase;
    document.getElementById(`${hair}_line`).src=srcLine;
    // マスクのdivたちを取ってくる
    let hairMask2 = document.getElementsByClassName('hair-mask');
    // マスクのdivのurlをsrcBaseに書き換える
    //hairがbackなら0番目、frontなら1番目、leftなら2番目、rightなら3番目のdivのurlを書き換え
    if(hair == 'back'){
      hairMask2[0].style.maskImage = `url('${srcBase}')`;
      hairMask2[0].style.webkitMaskImage = `url('${srcBase}')`;
    }else if(hair == 'front'){
      hairMask2[1].style.maskImage = `url('${srcBase}')`;
      hairMask2[1].style.webkitMaskImage = `url('${srcBase}')`;
    }else if(hair == 'left'){
      hairMask2[2].style.maskImage = `url('${srcBase}')`;
      hairMask2[2].style.webkitMaskImage = `url('${srcBase}')`;
    }else if(hair == 'right'){
      hairMask2[3].style.maskImage = `url('${srcBase}')`;
      hairMask2[3].style.webkitMaskImage = `url('${srcBase}')`;
    }
  }
}
changeHair('btn_front1','front','img/hair_front1_base.png','img/hair_front1_line.png');
changeHair('btn_front2','front','img/hair_front2_base.png','img/hair_front2_line.png');
changeHair('btn_front3','front','img/hair_front3_base.png','img/hair_front3_line.png');
changeHair('btn_front4','front','img/hair_front4_base.png','img/hair_front4_line.png');
changeHair('btn_front5','front','img/hair_front5_base.png','img/hair_front5_line.png');
changeHair('btn_left1','left','img/hair_left1_base.png','img/hair_left1_line.png');
changeHair('btn_left2','left','img/hair_left2_base.png','img/hair_left2_line.png');
changeHair('btn_left3','left','img/hair_left3_base.png','img/hair_left3_line.png');
changeHair('btn_left4','left','img/hair_left4_base.png','img/hair_left4_line.png');
changeHair('btn_right1','right','img/hair_right1_base.png','img/hair_right1_line.png');
changeHair('btn_right2','right','img/hair_right2_base.png','img/hair_right2_line.png');
changeHair('btn_right3','right','img/hair_right3_base.png','img/hair_right3_line.png');
changeHair('btn_right4','right','img/hair_right4_base.png','img/hair_right4_line.png');
changeHair('btn_back1','back','img/hair_back1_base.png','img/hair_back1_line.png');
changeHair('btn_back2','back','img/hair_back2_base.png','img/hair_back2_line.png');
changeHair('btn_back3','back','img/hair_back3_base.png','img/hair_back3_line.png');
changeHair('btn_back4','back','img/hair_back4_base.png','img/hair_back4_line.png');
changeHair('btn_back5','back','img/hair_back5_base.png','img/hair_back5_line.png');
changeHair('btn_back6','back','img/hair_back6_base.png','img/hair_back6_line.png');
changeHair('btn_back7','back','img/hair_back7_base.png','img/hair_back7_line.png');

// 眉毛切り替え
const changeEyebrows = (btn,src) => {
    document.getElementById(btn).onclick = function(){
      document.getElementById("eyebrows").src=src;
    }
  }
  changeEyebrows("btn_EB1","img/eyebrows1.png");
  changeEyebrows("btn_EB2","img/eyebrows2.png");
  changeEyebrows("btn_EB3","img/eyebrows3.png");
  changeEyebrows("btn_EB4","img/eyebrows4.png");
  changeEyebrows("btn_EB5","img/eyebrows5.png");


// elem2img.jsのための準備
let elem = document.getElementById("resultImage");
let scale = 1;

function showResult(){
  let e2i = new Elem2Img();
  e2i.get_png(function (img_data) {
      let img_elem = document.createElement("img");
      img_elem.src = img_data;
      img_elem.id = "result-png";
      if(document.getElementById("result-png")){
        document.getElementById("result-png").src = img_data;
      }else{
        document.getElementsByClassName(".bg_pattern")[0].appendChild(img_elem);
      }

          //表示と同時にダウンロードもさせる場合
    // Elem2Img.save_png(img_data, "Sample.png");
  }, elem);
}

// タブメニューの実装
'use strict';
{
  const tabMenus = document.querySelectorAll('.tab-list__item');
  console.log(tabMenus);
// イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
  })
// イベントの処理
  function tabSwitch(e){
    // クリックされた要素のデータ属性を取得 データ属性ってdata-○○=""のやつのことか……
    const tabTargetData = e.currentTarget.dataset.list;
    console.log(e.currentTarget); 
    console.log(e.currentTarget.dataset.list);
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest('.tab-list');
    console.log(tabList);
    const tabItems = tabList.querySelectorAll('.tab-list__item');
    console.log(tabItems);

    // クリックされた要素の親要素の兄弟要素の子要素を取得！？！？！？！？！？！？
    // つまりタブメニューに対してタブコンテンツを全部取得してるってわけか
    const tabContentsItems = tabList.nextElementSibling.querySelectorAll('.tab-contents__item');
    console.log(tabContentsItems);
    // クリックされたtabの同海藻のlistとcontentsのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove('active');
    })
    tabContentsItems.forEach((tabContentsItem) => {
      tabContentsItem.classList.remove('show');
    })
    //クリックされたlist要素にactiveクラスを付加
    e.currentTarget.classList.add('active');
    // クリックしたlistのデータ属性と等しい値を持つパネルにshowクラスを付加
    tabContentsItems.forEach((tabContentsItem) => {
      if(tabContentsItem.dataset.contents === tabTargetData){
        tabContentsItem.classList.add('show');
      }
    })
  }
}