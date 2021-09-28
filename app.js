const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

function bodyBG() {
    document.body.style.background = "url('https://4.bp.blogspot.com/-W0_HZx9NWfI/XD45qcBbaII/AAAAAAAAAn4/paWYCWR06l092c0vcBV2G9HAChXB3nhRwCKgBGAs/w3840-h2400-c/astronaut-space-13-4k.jpg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover"
}
bodyBG();


// I would like get a shake effect for columns, where we drop ".item"
// With jQuery is a eazyway to do it, but I newbie in programming, and haven`t skill yet.

$(function() {
    $(".placeholder").hover(function(){
       $(this).effect( "shake", {times:2}, 1000 );
    });
});