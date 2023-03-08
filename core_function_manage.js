let itemList = [];

function addItem() {
    let item = document.getElementById("inputItem").value;
    if (item === '') {
        alert("Bạn chưa thêm sản phẩm nào")
    } else {
        itemList.push(item);
        alert(`Bạn đã thêm sản phẩm "${item}" vào danh sách`);
    }
    displayItemList();
    document.getElementById("inputItem").value = "";
}

function displayItemList() {
    let display = '';
    for (let i = 0; i < itemList.length; i++) {
        display = display +
            `<tr style="width: 100%"><td  style="width: 3%">${i + 1}</td>
                <td style="width: 100%"> ${itemList[i]} </td>
                <td><input style="position: center" type='button' value='Edit' onclick='editItem(${i})'></td>
                <td> <input  style="position: center" type='button' value='Delete' onclick="deleteItem(${i})"></td>
                </tr>`;
    }
        document.getElementById("listItem").innerHTML = `<table style="margin:0"> ${display} </table>`;
}

function editItem(itemNew) {
    itemList[itemNew] = prompt("Nhập tên sản phẩm mới");
    displayItemList();
}

function deleteItem(itemRemove) {
    itemList.splice(itemRemove, 1);
    displayItemList();
}

function searchItem() {
    let itemName = document.getElementById("searchItem").value;
    let itemIndex, checker;
    checker = true;
    let itemListLower = itemList.toLowerCase();
    for (let i = 0; i < itemListLower.length; i++) {
        if (itemName === itemListLower[i]) {
            itemIndex = i + 1;
            checker = true;
            alert(`Sản phẩm bạn tìm là sản phẩm thứ ${itemIndex}`);
            break;
        } else {
            checker = false
        }
    }
    if (checker === false) {
        alert("Không có sản phẩm này");
    }
    document.getElementById("searchItem").value = ''
}