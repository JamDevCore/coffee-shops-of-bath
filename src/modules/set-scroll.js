const setScroll = () => {
    const html = document.querySelector('html');
    html.style['scroll-behavior'] = 'smooth';
}

module.exports = setScroll;