declare module '*.png'
declare module '*.svg'
interface Currency {
    name:string,
    value:number,
    flag:string,
    symbol:string
}

interface PlayerData {
    id:number,
    markAs:string
}
//project ten TS configuration
interface Product {
    id: string;
    name: string;
    imageUrl: string;
    originalPrice: number;
    discountPrice: number;
    offerPercentage: number;
    rating: number;
    ratingCount: number;
    tags: string[]
}