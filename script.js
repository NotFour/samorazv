function getBonusClick(e) {
    e.preventDefault();
    alert('Забрали бонус');
}

var getBonus = document.querySelector('.witcher__btn');
getBonus.addEventListener('click', getBonusClick);

var timer = 721;
timer = 31;
var elem = document.querySelector("#demo");
function countDown() {
    if (--timer) {
        var seconds = timer % 60;
        var minutes = Math.floor(timer/60);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        elem.textContent = 'Бонус сгорит через ' + minutes + ':' + seconds;
        setTimeout(countDown, 1000);
    } else {
        elem.textContent = 'Увы, бонус сгорел';

        getBonus.removeEventListener('click', getBonusClick);
        getBonus.addEventListener('click', function(e) {
            e.preventDefault();
        })
    }
}

var buyButtons = document.querySelectorAll('.free__btn');
buyButtons.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        var price = e.target.parentElement.parentElement.querySelector('span').textContent.match(/\d+\s+\S+/);
        alert('Вы купили курс за ' + price);
    })
})

countDown();

var moduleButtons = document.querySelectorAll('.module__btn:not(.too)');

moduleButtons.forEach((item, index) => {
    item.addEventListener('click', function() {
        toggleModuleBtn(index);
        toggleModuleContent(index);
    })
})

function toggleModuleBtn(index) {
    var buttons = Array.from(moduleButtons);

    if (!buttons[index].classList.contains('active')) {
        buttons.filter(item => item.classList.contains('active'))[0].classList.remove('active');
        buttons[index].classList.add('active');
    }
}

function toggleModuleContent(index) {
    var modulesContent = Array.from(document.querySelectorAll('.modules__text'));

    if (!modulesContent[index].classList.contains('active')) {
        modulesContent.filter(item => item.classList.contains('active'))[0].classList.remove('active');
        modulesContent[index].classList.add('active');
    }
}