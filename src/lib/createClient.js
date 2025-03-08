import {createClient} from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";
 
export const client = createClient({
    apiVersion: '2024-01-01',
    projectId: 'syv5v6la',
    dataset: 'production',
    useCdn: false
});

const builder = imageUrlBuilder(client)

export const urlFor = (source)=>{
    return builder.image(source)
}




