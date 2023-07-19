document.addEventListener("DOMContentLoaded", () => {
    const draggableElement = document.querySelectorAll(".floating");
    let target;
    let pos = {
    elX: 0,
    elY: 0,
    x: 0,
    y: 0
}


const handleMoveMouse = ({clientX: x, clientY: y}) => {
    let newX = x - pos.x;
    let newY = y - pos.y;
    target.style.left = `${pos.elX + newX}px`;
    target.style.top = `${pos.elY + newY}px`;
}

const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMoveMouse);
    document.removeEventListener("mouseup", handleMouseUp);
}

draggableElement.forEach(v => {
    v.addEventListener("mousedown", ({clientX: x, clientY: y, currentTarget}) => {
        target = v;
        let {x: elX, y: elY} = currentTarget.getBoundingClientRect();
        pos = {
            elX,
            elY,
            x,
            y
        }

        document.addEventListener("mousemove", handleMoveMouse);
        document.addEventListener("mouseup", handleMouseUp);
    })

    v.addEventListener("dblclick", () => {
        alert("tesst")
    })
})
})