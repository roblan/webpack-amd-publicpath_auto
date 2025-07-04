(() => {
    const defined = [];
    window.define = Object.assign((...args) => {
        defined.push(args.reverse());
    }, { amd: true });
    
    window.load = (url) => new Promise((resolve) => {
        document.head.appendChild(Object.assign(document.createElement('script'), {
            type: 'text/javascript',
            src: url + '.js',
            onload: function () {
                this.remove();
                const [fn = () => {}, deps = []] = defined.pop() || [];
                Promise.all(deps.map(load)).then((modules) => {
                    resolve(fn(...modules));
                });
            },
        }));
    });
})();
