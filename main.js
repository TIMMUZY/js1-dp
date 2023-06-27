const count = prompt('сколько блоков?')

function doc(){
    for(let i = 0;i<count;i++){
        let color = "";
        if(i % 3 == 0){
            color = "red";
        } else if(i % 3 === 1){
            color = "yellow"
        }else {
            color = "green"
        }


document.write(`<div style = "background-color: ${color}" class="doc"></div>`)

    }
}
doc()