import Directory from "./components/directory/directory.component";

const App = () => {
    const categories = [
        {
            id: 1,
            title: 'Ceket',
            imageUrl: 'https://cms.brnstc.de/product_images/1122x1536_retina/cpro/media/images/product/22/11/100137485917000_0_1669820647831.jpg'
        },
        {
            id: 2,
            title: 'Gömlek',
            imageUrl: 'https://image-resizing.booztcdn.com/tommy-jeans/tjsdm0dm15129_ctwilightnavy_vc87.webp?has_grey=1&has_webp=1&size=source'
        },
        {
            id: 3,
            title: 'Ayakkabi',
            imageUrl: 'https://ayb.akinoncdn.com/products/2022/06/10/148076/ad40bc33-298f-4dbd-b85f-c06b5afa983a_size780x780_quality60_cropCenter.jpg'
        },
        {
            id: 4,
            title: 'Pantolon',
            imageUrl: 'https://productimages.hepsiburada.net/s/300/600-800/110000291428998.jpg'
        },
        {
            id: 5,
            title: 'Kazak',
            imageUrl: 'https://s3.gsxtr.com/i/p/tommy-hilfiger-tommy-logo-crew-neck-sweater-desert-sky-373334-2500-1.jpg'
        }
    ]

    return (
        <Directory categories={ categories } />
    );
}

export default App;
