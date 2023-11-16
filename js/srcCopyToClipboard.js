let img = document.getElementsByTagName('img');
for (let i=0; i<img.length;i++){
    img[i].addEventListener('click',function(){
        let src = img[i].getAttribute('src');
        let URL = 'https://roku-sioku.github.io/citrusix/'+src;
        navigator.clipboard.writeText(URL).then(
            () => {
                alert("URLをコピーしました。");
            },
            () => {
                alert("うまくいきませんでした。");
            },
        );
    });
};