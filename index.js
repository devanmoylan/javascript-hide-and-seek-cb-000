function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    let starting_value = parseInt(list[i].innerHTML);
    list[i].innerHTML = (starting_value + n);
  }
  return list
}

