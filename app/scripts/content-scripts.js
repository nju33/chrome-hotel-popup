'use strict';

wait((linkCollection) => {
  const actionCollection = document.querySelectorAll('.actions');

  toArr(linkCollection).forEach((item) => {
    item.addEventListener('click', handleLinkClick);
  });

  toArr(actionCollection).forEach((item) => {
    item.addEventListener('click', handleActionsClick);
  });
});

function wait(cb) {
  let id = null;
  function _wait() {
    id = setTimeout(() => {
      const linkCollection = document.querySelectorAll('a[href^="/"]');
      if (linkCollection.length > 0) {
        return cb(linkCollection);
      }

      _wait();
    }, 100);
  }
  _wait();
}

function handleLinkClick(e) {
  e.preventDefault();
  chrome.runtime.sendMessage({url: e.target.href}, () => {});
}

function handleActionsClick() {
  location.reload();
}

function toArr(collection) {
  return Array.prototype.slice.call(collection);
}
