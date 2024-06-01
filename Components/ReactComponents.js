class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 className="class-highlight">Hello from my first component!</h2>
            </div>
        );
    }
}

class MyFruitList extends React.Component {
    render() {
        const orange_str = "Orange";
        const apple_str = "Apple";
        const banana_str = "Banana";

        const fruit_img = "img/fruits.jpg";
        const image_el = (<img src={fruit_img}/>);
        const items = ["Jackfruit", "Mango", "Raspberry", "Grape", "Peach"];

        const fruit_list = (    // all React elements are immutable (have to be re-created with each change)
            <div>
                <div key="el-key">Some of my favourite fruits</div>
                <ul>
                    <li key="O-key">{orange_str}</li>
                    <li key="A-key">{apple_str}</li>
                    <li key="B-key">{banana_str}</li>
                    {/* although the entire element is added here, only the updated (changed) elements will get updated int the actual DOM */}
                    <li key="N-key" className="my-fruit">{items[Math.floor(Math.random() * items.length)]}</li>
                </ul>
                {image_el}
            </div>
        );

        return fruit_list;
    }
}

ReactDOM.render(<MyFirstComponent/>,    // using the </> tag will execute the render() function
document.getElementById("my-first-component"));

setInterval(
    () => ReactDOM.render(<MyFruitList/>, document.getElementById("my-fruit-list")),
    2000
);