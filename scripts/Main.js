'use strict';

var url = '';

function replace() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if (images[i].title.includes('Mike')) {
      images[i].src =
        'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753';
    }
  }
}

chrome.storage.sync.get(
  {
    enabled: false,
    url: '',
  },
  function (items) {
    if (items.enabled) {
      //url = items.url;
      var css = document.createElement('style');

      var images = document.getElementsByTagName('img');
      for (var i = 0; i < images.length; i++) {
        if (images[i].title.includes('Mike')) {
          url =
            'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753';
          css.innerHTML = 'img { content: url("' + url + '") !important; }';
        }
      }

      document.body.appendChild(css);
      window.setInterval(replace, 500);
      replace();
    }
  }
);
