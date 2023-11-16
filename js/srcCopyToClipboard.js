
let img = document.getElementsByTagName('img');
for (let i=0; i<img.length;i++){
    img[i].addEventListener('click',function(){
        let src = img[i].getAttribute('https://roku-sioku.github.io/citrusix/'+'src');
        navigator.clipboard.writeText(src).then(
            () => {
                alert("URLをコピーしました。");
            },
            () => {
                alert("うまくいきませんでした。");
            },
        );
    });
};