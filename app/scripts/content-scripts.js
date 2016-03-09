'use strict';

init();
function init() {
  const linkCollection = document.querySelectorAll('a[href]');
  const actionCollection = document.querySelectorAll('.actions');

  toArr(linkCollection).forEach((item) => {
    item.addEventListener('click', handleLinkClick);
  });

  toArr(actionCollection).forEach((item) => {
    item.addEventListener('click', handleActionsClick);
  });
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
