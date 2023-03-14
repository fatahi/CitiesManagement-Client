export class CreateCity{
    constructor(
        public cityName:string,
        public countryId:number,
        public Comment:string,
        public AttractionFactor:number,
        public ImageUrl:string
        ){}
}