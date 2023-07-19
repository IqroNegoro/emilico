// document.addEventListener("DOMContentLoaded", () => {
//     const draggableElement = document.querySelectorAll(".floating");
//     let target;
//     let pos = {
//     elX: 0,
//     elY: 0,
//     x: 0,
//     y: 0
// }


// const handleMoveMouse = ({clientX: x, clientY: y}) => {
//     let newX = x - pos.x;
//     let newY = y - pos.y;
//     target.style.left = `${pos.elX + newX}px`;
//     target.style.top = `${pos.elY + newY}px`;
// }

// const handleMouseUp = () => {
//     document.removeEventListener("mousemove", handleMoveMouse);
//     document.removeEventListener("mouseup", handleMouseUp);
//     document.removeEventListener("touchmove", handleMoveMouse);
//     document.removeEventListener("touchend", handleMouseUp);
// }

// const handleClick = ({clientX: x, clientY: y, currentTarget}) => {
//     let {x: elX, y: elY} = currentTarget.getBoundingClientRect();
//     pos = {
//         elX,
//         elY,
//         x,
//         y
//     }

//     document.addEventListener("mousemove", handleMoveMouse);
//     document.addEventListener("mouseup", handleMouseUp);
//     document.addEventListener("touchmove", handleMoveMouse, false);
//     document.addEventListener("touchend", handleMouseUp, false);
// }


// draggableElement.forEach(v => {
//     v.addEventListener("mousedown", e => {
//         target = v;
//         handleClick(e);
//     })
//     v.addEventListener("touchstart", e => {
//         target = v;
//         handleClick(e);
//     }, false)
// })
// })

document.addEventListener("touchstart", e => {
    console.log(e)
})

document.addEventListener("touchmove", e => {
    console.log(e)
})
document.addEventListener("touchend", e => {
    console.log(e)
})