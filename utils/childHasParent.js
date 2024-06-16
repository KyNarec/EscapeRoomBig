/**
 * @param {HTMLElement} child 
 * @param {HTMLElement} parent 
 */
export default function childHasParent(child, parent) {
    return parent.contains(child);
}