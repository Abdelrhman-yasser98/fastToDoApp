// catching 
let form = document.querySelector('form');
let text = document.querySelector('input');
let mark = document.querySelector('.mark');
let list = document.querySelector('.list');
let detail = document.querySelector('.details');
let buton = document.querySelector('button');
let s1 = document.querySelector('.s1');
let s2 = document.querySelector('.s2');

//main event
form.onsubmit = function (event) {
    event.preventDefault();
    if (text.value.length > 0) {
        let item = document.createElement('div');
        item.classList.add('parent');
        let content = document.createElement('div');
        content.classList.add('son')
        let chk = document.createElement('span');
        chk.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
        let txt = document.createElement('p');
        txt.innerText = `${text.value}`;
        let cls = document.createElement('span');
        cls.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
        cls.classList.add('cls')
        content.append(chk);
        content.append(txt);
        item.append(content);
        item.append(cls);
        list.append(item);
        text.value = '';
        let arr = list.children;
        let k = 0;
        // check loop 
        for (i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('clicked')) {
                k++
                if (k == arr.length) {
                    mark.classList.add('flchkd')
                } else {
                    mark.classList.remove('flchkd')
                }
            }
            s1.textContent = `${arr.length - k}`;
            s2.textContent = `${k}`;
        }
        if (k > 0) {
            buton.style.visibility = 'visible';
        } else {
            buton.style.visibility = 'hidden';
        }
        if (list.children.length > 0) {
            mark.style.display = 'flex';
            detail.style.display = 'flex';
        } else {
            mark.style.display = 'none';
            detail.style.display = 'none';
        }
        // remove event 
        cls.onclick = function () {
            cls.parentElement.remove();
            if (list.children.length == 0) {
                mark.style.display = 'none';
                detail.style.display = 'none';
                mark.classList.remove('flchkd')
            }
            let k = 0;
            for (i = 0; i < arr.length; i++) {
                for (i = 0; i < arr.length; i++) {
                    if (arr[i].classList.contains('clicked')) {
                        k++
                        if (k == arr.length) {
                            mark.classList.add('flchkd')
                        } else {
                            mark.classList.remove('flchkd')
                        }
                    }
                }
            }
            if (k > 0) {
                buton.style.visibility = 'visible';
            } else {
                buton.style.visibility = 'hidden';
            }
            s1.textContent = `${arr.length - k}`;
            s2.textContent = `${k}`;
        };
        // clicked event 
        content.onclick = function () {
            let k = 0;
            content.parentElement.classList.toggle('clicked');
            for (i = 0; i < arr.length; i++) {
                if (arr[i].classList.contains('clicked')) {
                    k++;
                    if (k == arr.length) {
                        mark.classList.add('flchkd')
                    } else {
                        mark.classList.remove('flchkd')
                    }
                }
            }
            if (k > 0) {
                buton.style.visibility = 'visible';
            } else {
                buton.style.visibility = 'hidden';
            }
            s1.textContent = `${arr.length - k}`;
            s2.textContent = `${k}`;
        }
        // mark all 
        mark.onclick = function () {
            let k = 0;
            for (i = 0; i < arr.length; i++) {
                if (arr[i].classList.contains('clicked')) {
                    k++
                    if (k == arr.length) {
                        mark.classList.remove('flchkd');
                        for (j = 0; j < arr.length; j++) {
                            if (arr[j].classList.contains('clicked')) {
                                arr[j].classList.remove('clicked')
                            };

                        }
                        s1.textContent = `${k}`;
                        s2.textContent = `${arr.length - k}`;
                    }
                } else {
                    for (j = 0; j < arr.length; j++) {
                        if (!arr[j].classList.contains('clicked')) {
                            arr[j].classList.add('clicked');
                            k++;
                            if (k == arr.length) {
                                mark.classList.add('flchkd');
                            }
                        }
                        s1.textContent = `${arr.length - k}`;
                        s2.textContent = `${k}`;
                    }
                }
            }
            if (+s2.textContent > 0) {
                buton.style.visibility = 'visible';

            } else {
                buton.style.visibility = 'hidden';

            }
        }
        // clear completed 
        buton.onclick = function () {
            [...arr].forEach(itm => itm.classList.contains('clicked') ? itm.remove() : '');
            if (list.children.length == 0) {
                mark.style.display = 'none';
                detail.style.display = 'none';
                mark.classList.remove('flchkd');
            }
            if (+s1.textContent != arr.length) {
                buton.style.visibility = 'visible';
            } else {
                buton.style.visibility = 'hidden';
            }
        };
        // edit content 
        item.ondblclick = function () {
            let inp = document.createElement('input');
            let frm = document.createElement('form');
            frm.append(inp)
            inp.classList.add('input');
            inp.value = item.textContent;
            item.innerHTML = ''
            item.append(frm);
            frm.onsubmit = function () {
                txt.textContent = inp.value;
                frm.remove();
                content.append(chk);
                content.append(txt);
                item.append(content);
                item.append(cls);


            }
        }
    };
};



