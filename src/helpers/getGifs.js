

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=QwzoDwchBelsz2xSSxtXjX7YZ0z2x4Q3`;
    const resp = await fetch(url);
    const {data, meta} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }

    })

    return gifs;

}