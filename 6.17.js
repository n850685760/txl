$(function () {
    let arr= [
        {
            'name':'张三', 'phone':'123456','py':'zhangsan'
        },
        {
            'name':'李四', 'phone':'123456','py':'lisi'
        },
        {
            'name':'王五', 'phone':'123456','py':'wangwu'
        },
        {
            'name':'赵六', 'phone':'123456','py':'zhaoliu'
        },
        {
            'name':'李华', 'phone':'123456','py':'lihua'
        },
        {
            'name':'小明', 'phone':'123456','py':'xiaoming'
        },
        {
            'name':'小明2', 'phone':'123456','py':'xiaoming2'
        },
        {
            'name':'老王', 'phone':'123456','py':'laowang'
        },
        {
            'name':'老张', 'phone':'123456','py':'laozhang'
        },
        {
            'name':'老刘', 'phone':'123456','py':'laoliu'
        },
    ]
    let main = $('main')
    let aside = $('.aside > div')
    let input = $('input')
    input.on('input',function () {
        let val =$(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val));
        render(newarr)
    })
    render(arr);
    let value,newarr2;
    aside.on('click',function () {
        value = $(this).attr('id').toLowerCase().toString()
        console.log(value == '1');
        if (value == '1'){
            render(arr)
        }else{
            newarr2 = arr.filter(ele=>ele.py.charAt(0).includes(value))
            render(newarr2);
        }
    })

    function render(arr) {
        let person ={

        }
        //分类
        arr.forEach(ele=>{
            let fristchar = ele.py.charAt(0).toUpperCase();
            if(!person[fristchar]){
                person[fristchar] = [];
            }
            person[fristchar].push(ele)
        })
        //排序
        let keysarr = Object.keys(person).sort()
        //添加
        let html=``;
        for (let i=0;i<keysarr.length;i++){
            let ele = keysarr[i]
            html += `
            <section><h2>${ele}</h2>   
            `;
            for (let j=0;j<person[ele].length;j++){
                let info = person[ele][j];
                html +=`
                <div>${info.name}</div>
                `
            }
            html +=`
            </section>
            `
        }
        main.html(html)
    }
})