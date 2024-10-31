function generateRadius(){
    let rtl = document.getElementById('rtl').value
    let rtr = document.getElementById('rtr').value
    let rbr = document.getElementById('rbr').value
    let rbl = document.getElementById('rbl').value

    let ttl = document.getElementById('ttl')
    let ttr = document.getElementById('ttr')
    let tbr = document.getElementById('tbr')
    let tbl = document.getElementById('tbl')

    let block = document.getElementById('result-1')

    let coderesult = document.getElementById('code-1')

    ttl.value = rtl
    ttr.value = rtr
    tbr.value = rbr
    tbl.value = rbl

    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px "
    coderesult.value = `border-radius: ${block.style.borderRadius};`
}

function generateListPosition(){
    let position = document.getElementById('select-2').value

    let result = document.getElementById('result-2')
    let coderesult = document.getElementById('code-2')

    result.style.listStylePosition = position
    coderesult.value = `list-style-position: ${result.style.listStylePosition};`
}

function generateListType(){
    let type = document.getElementById('select-3').value

    let result = document.getElementById('result-3')
    let coderesult = document.getElementById('code-3')

    result.style.listStyleType = type
    coderesult.value = `list-style-type: ${result.style.listStyleType};`
}