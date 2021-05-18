// rahul selector
var slider_img = document.querySelector('.slider-image');
// ravish selector
var slider_img1 = document.querySelector('.slider-image-ravish')
// kishore selector
var slider_img2 = document.querySelector('.slider-image-kishore')
// kush selector
var slider_img3 = document.querySelector('.slider-image-kush')
// other selector
var slider_img4 = document.querySelector('.slider-image-others')

var rahulimg = ['rahul1.jfif', 'rahul2.jfif', 'rahul3.jfif', 'rahul4.jfif', 'rahul5.jfif', 'rahul6.jfif', 'rahul7.jfif', 'rahul8.jfif', 'rahul9.jfif', 'rahul10.jfif'];

var ravishimg = ['ravish1.jfif', 'ravish2.jfif', 'ravish3.jfif', 'ravish4.jfif', 'ravish5.jfif', 'ravish6.jfif', 'ravish7.jfif', 'ravish8.jfif', 'ravish9.jfif', 'ravish10.jfif'];

var kishoreimg = ['kishore2.jfif', 'kishore3.jfif', 'kishore4.jfif', 'kishore5.jfif', 'kishore6.jfif', 'kishore7.jfif', 'kishore8.jfif', 'kishore9.jfif', 'kishore10.jfif', 'kishore11.jfif'];

var kushimg = ['Kush1.jfif', 'Kush2.jfif', 'Kush3.jfif', 'Kush4.jfif', 'Kush5.jfif', 'Kush6.jfif', 'Kush7.jfif'];

var othersimg = ['others1.jfif', 'others2.jfif', 'others3.jfif', 'others4.jfif', 'others5.jfif', 'others6.jfif', 'others7.jfif', 'others8.jfif', 'others9.jfif', 'others10.jfif'];


var i = 0;
// rahul
function prev(){
	if(i <= 0) i = rahulimg.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= rahulimg.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', 'projects/Rahul/'+rahulimg[i]);	
}
// ravish
function prev1(){
	if(i <= 0) i = ravishimg.length;	
	i--;
	return setImg1();			 
}

function next1(){
	if(i >= ravishimg.length-1) i = -1;
	i++;
	return setImg1();			 
}

function setImg1(){
	return slider_img1.setAttribute('src', 'projects/Ravish/'+ravishimg[i]);	
}

// kishore
function prev2(){
	if(i <= 0) i = kishoreimg.length;	
	i--;
	return setImg2();			 
}

function next2(){
	if(i >= kishoreimg.length-1) i = -1;
	i++;
	return setImg2();			 
}

function setImg2(){
	return slider_img2.setAttribute('src', 'projects/Kishore/'+kishoreimg[i]);	
}

// kush
function prev3(){
	if(i <= 0) i = kushimg.length;	
	i--;
	return setImg3();			 
}

function next3(){
	if(i >= kushimg.length-1) i = -1;
	i++;
	return setImg3();			 
}

function setImg3(){
	return slider_img3.setAttribute('src', 'projects/Kush/'+kushimg[i]);	
}

// kush
function prev4(){
	if(i <= 0) i = othersimg.length;	
	i--;
	return setImg4();			 
}

function next4(){
	if(i >= othersimg.length-1) i = -1;
	i++;
	return setImg4();			 
}

function setImg4(){
	return slider_img4.setAttribute('src', 'projects/others/'+othersimg[i]);	
}