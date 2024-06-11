export default function showImg(img) {
    alert('a');
    const container = document.createElement('div');
    const imgage    = document.createElement('img');
    img.src         = '/assets/images/whatsapp_chat.png';
    container.appendChild(imgage);
    document.querySelector('main').appendChild(container);
}