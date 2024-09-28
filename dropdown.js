function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(hide) {
    if (!hide.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
            
        }
    }
}
