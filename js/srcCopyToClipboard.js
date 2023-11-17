let img = document.getElementsByTagName('img');
const toast = document.getElementById('toast');
for (let i=0; i<img.length;i++){
    img[i].addEventListener('click',function(){
        let src = img[i].getAttribute('src');
        let URL = 'https://roku-sioku.github.io/citrusix/'+src;
        navigator.clipboard.writeText(URL).then(
            () => {
                toast.style.visibility = "visible";
                toast.style.transition = "all 0.3s";
                setTimeout(function(){
                    toast.style.visibility = "hidden";
                }, 2000);
            },
            () => {
                alert("うまくいきませんでした。");
            },
        );
    });
};