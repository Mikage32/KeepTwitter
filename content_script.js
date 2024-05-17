window.addEventListener("load", main, false);

function main(e) {
    const leftNavTimer = setInterval(leftnav, 1);
    const favTimer     = setInterval(fav, 1);
    setInterval(tweetButton, 100);
    setInterval(title, 100)

    /**
     * Change title
     */
    function title() {
        const title = document.querySelectorAll('title')[0];
        if (!!title) {
            title.innerText = title.innerText.replace('X', 'Twitter');
        }
    }

    /**
     * Change the fav icon
     */
    function fav() {
        const links = document.querySelectorAll('link');

        if (links.length === 0) return;
        for(const link of links) {
            if (link.getAttribute('rel').includes('icon')) {
                link.setAttribute('href', 'https://abs.twimg.com/favicons/twitter.2.ico');
            }
        }
        clearInterval(favTimer);
    }
    
    /**
     * Change the icon on top of left nav
     */
    function leftnav() {
        const landscape = document.querySelectorAll('header > div > div > div > div.css-175oi2r.r-1habvwh > div.css-175oi2r.r-dnmrzs.r-1559e4e > h1 > a > div')[0];
        const portrait  = document.querySelectorAll('header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-dnmrzs.r-1vvnge1 > h1 > a > div')[0];
        const premium   = document.querySelectorAll('header > div > div > div > div.css-175oi2r.r-1habvwh > div.css-175oi2r.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(9) > div > div')[0];

        if (!!landscape && !!premium) {
            clearInterval(leftNavTimer);
            landscape.innerHTML = '<svg class="bird" viewBox="0 0 24 24" style="fill:#1da1f2;height:38px"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';
            premium.innerHTML = '<svg class="bird" viewBox="0 0 24 24" style="fill:#1da1f2;height:38px"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';
        } else if (!!portrait) {
            clearInterval(leftNavTimer);
            portrait.innerHTML = '<svg class="bird" viewBox="0 0 24 24" style="fill:#1da1f2;height:38px"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';
        }
    }

    /**
     * Change the tweet button text
     */
    function tweetButton() {
        const buttonT1 = document.querySelector('main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1c4cdxw.r-1t251xo.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div.css-175oi2r.r-kemksi.r-184en5c > div > div.css-175oi2r.r-kemksi.r-1h8ys4a > div:nth-child(1) > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > button > div > span > span');
        const buttonT2 = document.querySelector('#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1habvwh > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-rsyp9y.r-1pjcn9w.r-1potc6q > div > div > div > div:nth-child(3) > div.css-175oi2r.r-kemksi.r-1h8ys4a.r-dq6lxq.r-hucgq0 > div:nth-child(1) > div > div > div > div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > button > div > span > span');
        const buttonT3 = document.querySelector('header > div > div > div > div.css-175oi2r.r-1habvwh > div.css-175oi2r.r-e7q0ms.r-12kyg2d > a > div > span > div > div > span > span')

        if (!!buttonT1) buttonT1.innerText = 'ツイートする';
        if (!!buttonT2) buttonT2.innerText = 'ツイートする';
        if (!!buttonT3) buttonT3.innerText = 'ツイートする';
    }
}
