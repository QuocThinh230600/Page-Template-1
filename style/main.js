document.querySelectorAll('.list-item').forEach(item => {
    const h1CheckWidth = item.querySelector('h1');
    const spanAddWidth = item.querySelector('.line span');

    if (h1CheckWidth && spanAddWidth) {
        const h1Width = h1CheckWidth.offsetWidth;
        spanAddWidth.style.width = (h1Width) + 'px';
    }
});

function addIconToListItem() {
    const listItem = document.querySelector('.top-header .list-item .item');

    if (!document.querySelector('#responsive-icon')) {
        const iconContainer = document.createElement('div');
        iconContainer.className = 'item list-item';
        iconContainer.id = 'responsive-icon';

        const icon = document.createElement('img');
        icon.src = './asset/bars-solid.svg';
        icon.alt = 'Icon';

        iconContainer.appendChild(icon);
        listItem.parentNode.insertBefore(iconContainer, listItem);
    }

}

function addIdLeftNavi() {
    let leftNavi = document.querySelector('.left-navi');

    leftNavi.id = 'mobile-left-navi';
}

function removeIdLeftNavi() {
    let leftNavi = document.querySelector('.left-navi');

    leftNavi.removeAttribute('id');
}

function removeIconFromListItem() {
    let iconContainer = document.querySelector('#responsive-icon');

    iconContainer.remove();
}

function checkDeviceAndToggleIcon() {
    if (window.innerWidth <= 768) {
        addIconToListItem();
        addIdLeftNavi();
    } else {
        removeIconFromListItem();
        removeIdLeftNavi();
    }
}

checkDeviceAndToggleIcon();

window.addEventListener('resize', checkDeviceAndToggleIcon);

const showLeftNavi = document.getElementById('responsive-icon');
