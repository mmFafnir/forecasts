interface ICoor {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const getPosFromParent = (
  parentId: string,
  child: HTMLElement
): ICoor => {
  const parentPos = document.querySelector(parentId)?.getBoundingClientRect();
  const childPos = child.getBoundingClientRect();
  if (!parentPos || !childPos) return { top: 0, right: 0, bottom: 0, left: 0 };

  const relativePos = {
    top: childPos.top - parentPos.top,
    right: childPos.right - parentPos.right,
    bottom: childPos.bottom - parentPos.bottom,
    left: childPos.left - parentPos.left,
  };

  return relativePos;
};
