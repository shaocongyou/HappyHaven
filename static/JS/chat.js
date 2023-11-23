// function login() {
//     var x = document.getElementById("username").value;
//     var y = document.getElementById("password").value;
//     if (x == "" || y == "") {
//         alert("你是不是什么都没填写呀 (～￣(OO)￣)ブ")
//     } else if (x == "520" && y == "1314") {
//         alert("登录成功")
//         window.location.href = "43.130.62.11:8001";
//     } else {
//         alert("你是不是填写错了呀，再好好想想吧");
//     }
// }

function getPath(event){
    alert("开始获取目标路径");
    let targetElement = event.target; // 获取触发事件的元素
    alert(targetElement);

    targetElement = targetElement.parentElement; // 如果当前元素没有data-path属性，则查找它的父级元素

    alert("父元素是："+targetElement);
    if (targetElement && targetElement.hasAttribute('data-path')) {
        let path = targetElement.getAttribute('data-path');
        alert("路径为：" + path);
        return targetElement;
    }

}

function renameTarget(event) {
    alert("调用了renameTarget");
    alert("renameTarget：启动输入框");

    // 获取用户输入的新名称
    let userInput = prompt("请输入新名称：", "");

    // 如果用户点击取消或输入为空，则不进行后续操作
    if (!userInput) {
        alert("未输入新名称，操作取消。");
        return;
    }

    alert("你输入的新名称是：" + userInput);

    alert("现在要获取离按钮上面最近的一个span");

    // 获取触发事件的按钮元素
    let buttonElement = event.target;

    // 获取离按钮上面最近的一个span元素
    let spanElement = buttonElement.previousElementSibling;

    // 检查是否成功获取到span元素
    if (spanElement && spanElement.tagName === 'SPAN') {
        // 成功获取到span元素
        alert("获取到的span内容是：" + spanElement.innerText);

        // 将新的名称赋值给span元素
        spanElement.innerText = userInput;

        alert("新名称已成功赋值给span元素");
        getPath();
        alert("获取完成");
    } else {
        // 未获取到span元素
        alert("未找到目标span元素");
    }
}


function deleteTarget(event) {
    alert("调用了deleteTarget");
    alert("deleteTarget：启动输入框，用于用户点击“确认”或“取消”");

    // 使用confirm函数显示确认框，用户可以选择“确认”或“取消”
    let userConfirmation = confirm("您确认要删除吗？");

    if (userConfirmation) {
        // 如果用户点击了“确认”，输出“删除完成”
        alert("用户点击了“确认”，删除完成");
        alert("开始获取目标路径");

        // 获取触发事件的元素，即按钮元素
        let deleteButton = event.target;

        alert("触发事件的元素：" + deleteButton)

        // 获取按钮所在的父元素 li
        let listItem = deleteButton.parentElement;

        alert("父元素是：" + listItem);

        // 调用 getPath 函数获取路径
        let path = getPath(event);

        if (path) {
            alert("路径为：" + path);

            // 在这里可以添加删除操作，比如发送 Ajax 请求删除服务器上的对应文件或文件夹
            // 例如：sendDeleteRequest(path);

            // 删除整个 li 元素
            listItem.remove();
        } else {
            alert("无法获取路径");
        }
    } else {
        // 如果用户点击了“取消”，输出“取消删除完成”
        alert("用户点击了“取消”，取消删除完成");
    }
}





// 注意，此代码片段只在每个li元素上有一个data-path属性的假设下工作，
// 它检查向上遍历的每个元素的data-path属性，找到后即停止。
// 这个实现可能需要根据您的实际HTML结构和需求进行一些调整。



// 创建一个新的 li 元素
function createLiElement(className, text) {
    const li = document.createElement('li');
    li.className = className;
    li.textContent = text;
    return li;
}

function addMessage2(className, text) {
    // 添加消息到 ol 元素中
    const olElement = document.querySelector('ol.list-unstyled');
    const li = createLiElement(className, text);
    olElement.appendChild(li);
}

function addMessage() {
    const olElement = document.querySelector('ol.list-unstyled');

    // 获取textarea的内容
    var text = document.getElementById('messageEditorBox').value;
    // 清空输入框
    document.getElementById('messageEditorBox').value = '';
    const li = createLiElement("send", text);
    olElement.appendChild(li);
    addMessage2("receive","收到");
}


// function clearStyles() {
//     // 移除所有的样式类
//     let elements = document.querySelectorAll('.recently-clicked, .selected-folder, .selected-file');
//     elements.forEach(element => {
//         element.classList.remove('recently-clicked', 'selected-folder', 'selected-file');
//     });
// }
//
// function setRecentlyClicked(element) {
//     // 清除之前添加的样式
//     clearStyles();
//
//     // 设置新的最近点击元素
//     element.classList.add('recently-clicked');
//
//     // 根据点击的元素类型设置不同的样式
//     let hasSubFolder = element.querySelector('ul') !== null;
//     if (hasSubFolder) {
//         element.classList.add('selected-folder');
//     } else {
//         element.classList.add('selected-file');
//     }
// }
//
// function liClickHandler(event) {
//     let clickedElement = event.currentTarget;
//
//     // 阻止事件冒泡，不触发父元素的事件处理程序
//     event.stopPropagation();
//
//     // 只有点击文件夹（包含子文件夹的li）时才执行相关逻辑
//     if (clickedElement.querySelector('ul')) {
//         setRecentlyClicked(clickedElement);
//
//         // 输出点击目标的一些信息
//         console.log("Clicked Element:", clickedElement);
//         console.log("Tag Name:", clickedElement.tagName);
//         console.log("Class Name:", clickedElement.className);
//         console.log("Data Path:", clickedElement.dataset.path);
//     } else {
//         setRecentlyClicked(clickedElement);
//
//         // 输出点击目标的一些信息
//         console.log("Clicked Element:", clickedElement);
//         console.log("Tag Name:", clickedElement.tagName);
//         console.log("Class Name:", clickedElement.className);
//         console.log("Data Path:", clickedElement.dataset.path);
//     }
// }

function clearStyles() {
    // 移除所有的样式类
    let elements = document.querySelectorAll('.recently-clicked, .selected-folder, .selected-file');
    elements.forEach(element => {
        element.classList.remove('recently-clicked', 'selected-folder', 'selected-file');
    });
}

function setRecentlyClicked(element) {
    // 清除之前添加的样式
    clearStyles();

    // 设置新的最近点击元素
    element.classList.add('recently-clicked');

    // 根据点击的元素类型设置不同的样式
    let hasSubFolder = element.querySelector('ul') !== null;
    if (hasSubFolder) {
        element.classList.add('selected-folder');

        // 如果点击的是文件夹，启用新建文件夹和新建文件按钮
        document.getElementById('newFolderBtn').disabled = false;
        document.getElementById('newFileBtn').disabled = false;
    } else {
        element.classList.add('selected-file');

        // 如果点击的是文件，禁用新建文件夹和新建文件按钮
        document.getElementById('newFolderBtn').disabled = true;
        document.getElementById('newFileBtn').disabled = true;
    }
}


function liClickHandler(event) {
    let clickedElement = event.currentTarget;

    // 阻止事件冒泡，不触发父元素的事件处理程序
    event.stopPropagation();

    // 只有点击文件夹（包含子文件夹的li）时才执行相关逻辑
    if (clickedElement.querySelector('ul')) {
        setRecentlyClicked(clickedElement);

        // 输出点击目标的一些信息
        console.log("Clicked Element:", clickedElement);
        console.log("Tag Name:", clickedElement.tagName);
        console.log("Class Name:", clickedElement.className);
        console.log("Data Path:", clickedElement.dataset.path);
    } else {
        setRecentlyClicked(clickedElement);

        // 输出点击目标的一些信息
        console.log("Clicked Element:", clickedElement);
        console.log("Tag Name:", clickedElement.tagName);
        console.log("Class Name:", clickedElement.className);
        console.log("Data Path:", clickedElement.dataset.path);
    }
}

function newFolder() {
    // 处理新建文件夹的逻辑
    console.log("New Folder Clicked");
}

function newFile() {
    // 处理新建文件的逻辑
    console.log("New File Clicked");
}


function newFolder() {
    // Simulate creating a new file
    let FolderName = prompt("Enter the name for the new Folder:");
    // alert(FolderName);
    if (FolderName) {
        let clickedElement = document.querySelector('.recently-clicked'); // Get the recently clicked element

        if (clickedElement && clickedElement.classList.contains('selected-folder')) {
            let ulElement = clickedElement.querySelector('ul'); // Get the ul element inside the selected folder
            // alert(ulElement.innerHTML);
            let newFolderElement = document.createElement('li');
            let parentDataPath = clickedElement.getAttribute('data-path');
            // Check if parentDataPath ends with "/", if not, add "/"
            if (!parentDataPath.endsWith('/')) {
                parentDataPath += '/';
            }

            let FolderDataPath = parentDataPath + FolderName;

            newFolderElement.setAttribute('data-path', FolderDataPath);

            let FolderSpan = document.createElement('span');
            FolderSpan.textContent = FolderName;

            let renameButton = document.createElement('button');
            renameButton.textContent = 'R';
            renameButton.classList.add('rename');
            renameButton.addEventListener('click', renameTarget);

            // Add a space between buttons
            let space = document.createTextNode(' ');
            let space2 = document.createTextNode(' ');

            // Create a ul element for sub items (subfolders or files)
            let subUlElement = document.createElement('ul');
            subUlElement.setAttribute('data-path', FolderDataPath);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'D';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', deleteTarget);

            // Add the click event handler to the newFileElement
            newFolderElement.addEventListener('click', liClickHandler);

            newFolderElement.appendChild(FolderSpan);
            newFolderElement.appendChild(space);
            newFolderElement.appendChild(renameButton);
            newFolderElement.appendChild(space2);
            newFolderElement.appendChild(deleteButton);
            newFolderElement.appendChild(subUlElement); // Add the ul element to represent sub items


            clickedElement.appendChild(newFolderElement);
            // Set the new file as recently clicked and selected file
            setRecentlyClicked(newFolderElement);
        } else {
            alert("Please select a folder to create a folder.");
        }
    }
}



function newFile() {
    // Simulate creating a new file
    let fileName = prompt("Enter the name for the new file:");
    if (fileName) {
        let clickedElement = document.querySelector('.recently-clicked'); // Get the recently clicked element

        if (clickedElement && clickedElement.classList.contains('selected-folder')) {
            let ulElement = clickedElement.querySelector('ul'); // Get the ul element inside the selected folder

            let newFileElement = document.createElement('li');
            let parentDataPath = ulElement.getAttribute('data-path');
            // Check if parentDataPath ends with "/", if not, add "/"
            if (!parentDataPath.endsWith('/')) {
                parentDataPath += '/';
            }

            let FileDataPath = parentDataPath + fileName;

            newFileElement.setAttribute('data-path', FileDataPath);

            let fileSpan = document.createElement('span');
            fileSpan.textContent = fileName;

            let renameButton = document.createElement('button');
            renameButton.textContent = 'R';
            renameButton.classList.add('rename');
            renameButton.addEventListener('click', renameTarget);

            // Add a space between buttons
            let space = document.createTextNode(' ');
            let space2 = document.createTextNode(' ');

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'D';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', deleteTarget);

            // Add the click event handler to the newFileElement
            newFileElement.addEventListener('click', liClickHandler);

            newFileElement.appendChild(fileSpan);
            newFileElement.appendChild(space);
            newFileElement.appendChild(renameButton);
            newFileElement.appendChild(space2);
            newFileElement.appendChild(deleteButton);

            ulElement.appendChild(newFileElement);
            // Set the new file as recently clicked and selected file
            setRecentlyClicked(newFileElement);
        } else {
            alert("Please select a folder to create a file.");
        }
    }
}





// 添加页面加载事件
window.addEventListener('load', () => {
// 获取 ol 元素

    //获取打开按钮
    const open = document.querySelector(".open");
    const open_makeHH = document.querySelector(".makeHH");
    //获取关闭按钮
    const close = document.querySelector(".close2");
    const closeHH = document.querySelector(".closeHH");

    //获取整个大的模态框
    const modal = document.querySelector(".modal-box");
    const modalHH = document.querySelector(".makeHH-modal-box");
    //获取模态框可移动的头部区域
    const header = document.querySelector(".title");
    // 获取模态框主区域
    const modalBox = document.querySelector(".content");


    //做打开模态框
    open.addEventListener('click', () => {
        // 点击打开按钮 改变display属性值
        modal.style.display = "block";

    });

    open_makeHH.addEventListener('click', () => {
        // 点击打开按钮 改变display属性值
        modalHH.style.display = "block";

    });
    // 关闭模态框
    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    closeHH.addEventListener("click", () => {
        modalHH.style.display = "none";
    });
    //鼠标按下点击顶部框
    header.addEventListener("mousedown", (event) => {
        //event 获取事件对象
        //event.pageX可以获取鼠标光标距离浏览器边缘位置的大小
        //modalBox.offsetLeft可以获取到模态框区里浏览器左边框的距离
        const x = event.pageX - modalBox.offsetLeft;
        const y = event.pageY - modalBox.offsetTop;
        console.log(x, y);
        //
        document.addEventListener("mousemove", move);
        //编写move函数
        function move(event) {
            //算出移动时的模态框的位置距离并赋值
            modalBox.style.left = event.pageX - x + "px";
            modalBox.style.top = event.pageY - y + "px";
        }
        //鼠标弹起删除事件
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", move);
        });
    });


    let recentlyClickedElement = null;






});