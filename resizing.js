const tl = document.querySelectorAll(".tl-btn");
const tr = document.querySelectorAll(".tr-btn");
const br = document.querySelectorAll(".br-btn");
const bl = document.querySelectorAll(".bl-btn");
let targetResizing;
let isTopLeft = false;
let isTopRight = false;
let isBottomLeft = false;
let isBottomRight = false;
let posEl = {
    elW: 0,
    elH: 0,
    elX: 0,
    elY: 0,
    x: 0,
    y: 0
}

const handleResizingMove = (e) => {
    if (targetResizing) {
        let {clientX: x, clientY: y} = e.touches ? e.touches[0] : e
        
        if (isTopLeft) {
            let newX = x - posEl.x;
            let newY = y - posEl.y;
            let newW = x - posEl.x;
            let newH = y - posEl.y;
            targetResizing.style.top = `${posEl.elY + newY}px`;
            targetResizing.style.left = `${posEl.elX + newX}px`;
            targetResizing.style.width = `${posEl.elW - newW}px`;
            targetResizing.style.height = `${posEl.elH - newH}px`;
        }
        
        if (isTopRight) {
            let newY = y - posEl.y;
            let newW = x - posEl.x;
            let newH = y - posEl.y;
            targetResizing.style.top = `${posEl.elY + newY}px`;
            targetResizing.style.width = `${posEl.elW + newW}px`;
            targetResizing.style.height = `${posEl.elH - newH}px`;
        }
        
        if (isBottomRight) {
            let newW = x - posEl.x;
            let newH = y - posEl.y;
            targetResizing.style.width = `${posEl.elW + newW}px`;
            targetResizing.style.height = `${posEl.elH + newH}px`;
        }
        
        if (isBottomLeft) {
            let newX = x - posEl.x;
            let newW = x - posEl.x;
            let newH = y - posEl.y;
            targetResizing.style.left = `${posEl.elX + newX}px`;
            targetResizing.style.width = `${posEl.elW - newW}px`;
            targetResizing.style.height = `${posEl.elH + newH}px`;
        }
    }
}

const handleResizingUp = () => {
    targetResizing = ''
    isTopLeft = false;
    isTopRight = false;
    isBottomLeft = false;
    isBottomRight = false;
    posEl = {
        elW: 0,
        elH: 0,
        elX: 0,
        elY: 0,
        x: 0,
        y: 0
    }

    document.removeEventListener("mousemove", handleResizingMove);
    document.removeEventListener("mouseup", handleResizingUp);
    document.removeEventListener("touchmove", handleResizingMove, false);
    document.removeEventListener("touchend", handleResizingUp, false);
}

const handleResizing = ({clientX: x, clientY: y}) => {
    let {top: elY, left: elX, width: elW, height: elH} = targetResizing.getBoundingClientRect();
    posEl = {
        elW,
        elH,
        elX,
        elY,
        x,
        y
    }

    document.addEventListener("mousemove", handleResizingMove);
    document.addEventListener("mouseup", handleResizingUp);
    document.addEventListener("touchmove", handleResizingMove, false);
    document.addEventListener("touchend", handleResizingUp, false);
}

tl.forEach(v => {
    v.addEventListener("mousedown", e => {
        isTopLeft = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing(e)
    })
    v.addEventListener("touchstart", e => {
        isTopLeft = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
        });
    }, false)
})
tr.forEach(v => {
    v.addEventListener("mousedown", e => {
        isTopRight = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing(e)
    })
    v.addEventListener("touchstart", e => {
        isTopRight = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
        });
    }, false)
})
br.forEach(v => {
    v.addEventListener("mousedown", e => {
        isBottomRight = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing(e)
    })
    v.addEventListener("touchstart", e => {
        isBottomRight = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
        });
    }, false)
})
bl.forEach(v => {
    v.addEventListener("mousedown", e => {
        isBottomLeft = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing(e)
    })
    v.addEventListener("touchstart", e => {
        isBottomLeft = true;
        e.stopPropagation();
        targetResizing = e.currentTarget.parentElement;
        handleResizing({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
        });
    }, false)
})