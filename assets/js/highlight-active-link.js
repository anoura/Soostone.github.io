// he

function highLightActiveNavLinks(event) {
  var navLinks = document.querySelectorAll('.nav-list-link');

  function dropBaseUrl(url) {
    return url.replace(new RegExp("http[^/]+[/]+[^/]+/"), "/");
  }

  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');

    var localAttrHref = dropBaseUrl(navLink.getAttribute('href'));

    if (event) {
      if (localAttrHref == dropBaseUrl(event.target.href)) {
        navLink.classList.add('active');
      }
    } else {
      if (localAttrHref == location.pathname + location.hash
          || localAttrHref == dropBaseUrl(location.href)) {
        navLink.classList.add('active');
      }
    }

    if (!event)
      navLink.addEventListener('click', highLightActiveNavLinks);
  });
}

highLightActiveNavLinks(null);
