const draggableElement = document.querySelectorAll(".floating");
let target;
let pos = {
    elX: 0,
    elY: 0,
    x: 0,
    y: 0
}


const handleMoveMouse = (e) => {
    if (target) {
        let {clientX: x, clientY: y} = e.touches ? e.touches[0] : e
        let newX = x - pos.x;
        let newY = y - pos.y;
        target.style.left = `${pos.elX + newX}px`;
        target.style.top = `${pos.elY + newY}px`;
    }
}

const handleMouseUp = () => {
    target = ''
    document.removeEventListener("mousemove", handleMoveMouse);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleMoveMouse, false);
    document.removeEventListener("touchend", handleMouseUp, false);
}

const handleClick = ({clientX: x, clientY: y}) => {
    let {x: elX, y: elY} = target.getBoundingClientRect();
    pos = {
        elX,
        elY,
        x,
        y
    }

    document.addEventListener("mousemove", handleMoveMouse);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMoveMouse, false);
    document.addEventListener("touchend", handleMouseUp, false);
}


draggableElement.forEach(v => {
    v.addEventListener("mousedown", e => {
        e.stopPropagation();
        target = v;
        handleClick(e);
    })
    v.addEventListener("touchstart", e => {
        e.stopPropagation();
        target = v;
        handleClick({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
        });
    }, false)
})