let windows_width = window.innerWidth;
let image_width;
let count_per_row;

if(windows_width<=532)
{
    image_width = windows_width - 16;
    count_per_row = 1;
}
else if (windows_width > 532)
{
    count_per_row = (windows_width - windows_width % 266) / 266;
    image_width = windows_width/count_per_row - 16;
}

let all = document.querySelectorAll('img');

let y = [];
let row = 0;

console.log(count_per_row)

all.forEach(function (image){

    row++;

    typeof y[row] === 'undefined' ? y[row] = 0 : null;

    image.style.width = image_width+'px';
    image.style.transform = 'translate('+(row-1)*(image_width+8)+'px,'+y[row]+'px)';

    y[row] += image.offsetHeight + 8;

    (row==count_per_row) ? row = 0 : null;
})