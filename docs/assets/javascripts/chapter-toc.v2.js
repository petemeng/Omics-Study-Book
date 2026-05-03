(function () {
  function buildChapterToc() {
    const tocNav = document.querySelector('nav.md-nav--secondary');
    const headings = Array.from(document.querySelectorAll('.page-wrapper h2'));

    if (!tocNav || headings.length === 0) {
      return;
    }

    headings.forEach((h, i) => {
      if (!h.id) {
        h.id = `chapter-sec-${i + 1}`;
      }
    });

    const title = document.createElement('label');
    title.className = 'md-nav__title';
    title.textContent = '本章目录';

    const list = document.createElement('ul');
    list.className = 'md-nav__list';
    list.setAttribute('data-md-scrollfix', '');

    headings.forEach((h) => {
      const li = document.createElement('li');
      li.className = 'md-nav__item';

      const a = document.createElement('a');
      a.className = 'md-nav__link';
      a.href = `#${h.id}`;
      a.textContent = h.textContent.replace(/\s+/g, ' ').trim();

      li.appendChild(a);
      list.appendChild(li);
    });

    tocNav.innerHTML = '';
    tocNav.appendChild(title);
    tocNav.appendChild(list);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildChapterToc);
  } else {
    buildChapterToc();
  }
})();
