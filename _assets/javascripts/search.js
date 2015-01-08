//= require jekyll-lunr-search.js

(function() {
  "use strict"
  function template(entry) {
    var M = Markup
    return M.article(
      M.h3(
        M.a({href: entry.url}, entry.title),
        ' ',
        entry.date ? 
          M.small(M.em(
            M.time({datetime: entry.date.pubdate}, entry.date.displaydate))) :
          null
        )
      )
    }

  addOnLoad(function() {
    JekyllLunrJsSearch({
      formSelector: 'input.search',
        jsonUrl:      '/search.json',
        containerId:  'search-results',
        template:     template,
      })
  })
})()
