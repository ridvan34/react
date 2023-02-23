const App = () => {
    const imgAdresse = "https://st1.myideasoft.com/shop/zr/76/myassets/products/942/1115261-3802.png?revision=1666435310";

    const categories = [
        {
            id: 1,
            title: 'Ceket'
        },
        {
            id: 2,
            title: 'Gömlek'
        },
        {
            id: 3,
            title: 'Ayakkabi'
        },
        {
            id: 4,
            title: 'Pantolon'
        },
        {
            id: 5,
            title: 'Kazak'
        }

    ]

    return (
        <div className='categories-container'>
            { categories.map((category) => (
                <div className='category-container' id={`category_${category.id}`}>
                    <div className='background-image' />
                    <img src={ imgAdresse } height='300px' />
                    <div className='category-body-container'>
                        <h2>{ category.title }</h2>
                        <p>Di haydi</p>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default App;
