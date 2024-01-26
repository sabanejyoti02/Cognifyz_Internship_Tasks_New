myslide=new Array('nature2.jpg','nature3.jpg','nature5.jpg','nature6.jpg');
i=0;
function display(slideno)
{
	i=i+slideno;

	if(i>myslide.length-1)
    {
	    i=0;
    }
    if(i<0)
    {
	    i=myslide.length-1;
    }
    //document.slide.src=myslide[i];
    document.getElementById('slider').src = myslide[i];
}

setInterval(function () {
    display(1);
}, 2000);
