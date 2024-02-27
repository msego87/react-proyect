// const getImagenPromesa = () => new Promise((resolve) => resolve('https://asdasdadasd.com'))
// getImagenPromesa().then(console.log)

const getImagen = async() => {
    try {
        //return 'https://asdasdpopoop.com';
        const apiKey = '2oGLqKasmj2psyqb3bFT0XD6NjEdpHDA';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // no pasa nada hasta que el await termine, la funcion siempre tiene que tener async
        const {data} = await respuesta.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImagen();
