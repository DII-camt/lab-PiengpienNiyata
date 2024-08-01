function addFriend() {
    let input = document.getElementById('friendInput');
    let friendName = input.value;
    if (friendName) {
        let listItem = document.createElement('li');
        listItem.textContent = friendName + ' ';
        
        let removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.onclick = function() {
            listItem.remove();
        };
        
        listItem.appendChild(removeButton);
        document.getElementById('friendList').appendChild(listItem);
        
        input.value = '';
    }
}
