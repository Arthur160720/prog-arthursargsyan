let readNotifications = document.querySelector('.notifications');
readNotifications.children.item(1).addEventListener('click', function () {
    readNotifications.children.item(0).children.item(0).style.display = 'none';

    let notification1 = document.querySelector('.notification1');
    notification1.style.background = 'white';
    notification1.children.item(3).children.item(0).style.display = 'none';
    let notification2 = document.querySelector('.notification2');
    notification2.style.background = 'white';
    notification2.children.item(2).children.item(0).style.display = 'none';
    let notification3 = document.querySelector('.notification3');
    notification3.style.background = 'white';
    notification3.children.item(3).children.item(0).style.display = 'none';

});