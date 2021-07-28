const TEMPLATE_NAV = `<nav class="navbar navbar-expand-lg navbar-light transparent neu-nav fixed-top">
<a class="navbar-brand" href="./index"><img src="./assets/img/grace_logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">&nbsp;Grace D. Li</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li id="nav-home" class="nav-item">
      <a class="nav-link" href="./index">Home</a>
    </li>
    <li id="nav-about" class="nav-item">
      <a class="nav-link" href="./about">About</a>
    </li>
    <li id="nav-books" class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Books
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="./portrait">Portrait of a Thief</a>
      </div>
    </li>
    <li id="nav-press" class="nav-item">
      <a class="nav-link" href="./press">Press</a>
    </li>
    <li id="nav-contact" class="nav-item">
      <a class="nav-link" href="./contact">Contact</a>
    </li>
  </ul>
  <a href="https://www.penguinrandomhouse.com/books/679113/portrait-of-a-thief-by-grace-d-li/" target="_blank" class="nav-link btn btn-dark neu neu-btn"><span class="bold">Pre-order now!</span></a>
</div>
</nav>`

function addNav(name) {
    var navBarContainer = document.getElementById('nav-container')
    navBarContainer.innerHTML = ''
    var navBar = TEMPLATE_NAV

    var searchTerm = 'id="nav-' + name + '"'
    var indexOfListElement = TEMPLATE_NAV.indexOf(searchTerm)
    if (indexOfListElement != -1) {
        var indexOfClassInListElement = TEMPLATE_NAV.indexOf('class="', indexOfListElement)
        var indexOfEndOfClassInListElement = TEMPLATE_NAV.indexOf('"', indexOfClassInListElement + 7)

        navBar = TEMPLATE_NAV.substring(0,indexOfEndOfClassInListElement) + ' active' + TEMPLATE_NAV.substring(indexOfEndOfClassInListElement)
        console.log(navBar)

        navBarContainer.innerHTML = navBar
    }
    else {
        navBarContainer.innerHTML = TEMPLATE_NAV
    }
}