window.onload = () => {
    const form = document.getElementById('lang_form')
    form.onchange = () => {
        const chboxes = form.querySelectorAll('input[name="lang"]:checked');
        const values = Array.from(chboxes).map(chboxes => chboxes.value)
        const p = form.querySelector('p')
        p.textContent = values.join(', ')
    }
}