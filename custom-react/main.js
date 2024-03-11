const reactElement = {
    type:'a',
    props : {
        href: 'https://google.com/',
        target:'_blank'
    },
    children:'Click me to visit'
}

const mainContainer = document.getElementById("root");

function customRender(reactElement, mainContainer){
    /* 1st version
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainContainer.appendChild(domElement);
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

customRender(reactElement,mainContainer);
