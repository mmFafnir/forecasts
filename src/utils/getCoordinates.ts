
interface ICoor {
    top: number,
    right: number,
    bottom: number,
    left: number,
}

export const getCoordinates = (children:HTMLElement, parent:HTMLElement):ICoor => {
    
    const parentPos = parent.getBoundingClientRect();
    const childPos  = children.getBoundingClientRect();

    const relativePos:ICoor = {
        top: childPos.top - parentPos.top,
        right: childPos.right - parentPos.right,
        bottom: childPos.bottom - parentPos.bottom,
        left: childPos.left - parentPos.left
    };

    return relativePos;
}
