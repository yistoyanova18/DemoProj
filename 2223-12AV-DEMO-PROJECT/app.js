const accorian = document.querySelectorAll('.content-container');

for(i = 0; i < accorian.length; i++)
{
    accorian[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}