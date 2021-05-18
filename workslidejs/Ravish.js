var slider_img = document.querySelector('.slider-image');
var images = ['ravish1.jfif', 'ravish2.jfif', 'ravish3.jfif', 'ravish4.jfif', 'ravish5.jfif','ravish6.jfif', 'ravish7.jfif', 'ravish8.jfif', 'ravish9.jfif', 'ravish10.jfif', 'ravish11.jfif', 'ravish12.jfif'];
var i = 0;

function prev1(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next1(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', 'projects/Ravish/'+images[i]);	
}