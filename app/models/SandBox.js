export class Sandbox {
    constructor(data) {
        this.name = data.name;
        this.img = data.img;
        this.weight = data.weight;
        this.height = data.height;
        this.types = data.types;
    }
}



// //{
// "name": {
//     "type": "String",
//         "required": true,
//             "maxLength": 100
// },
// "nickName": {
//     "type": "String",
//         "maxLength": 100
// },
// "img": {
//     "type": "String",
//         "required": true,
//             "maxLength": 500
// },
// "weight": {
//     "type": "String",
//         "maxLength": 100
// },
// "height": {
//     "type": "String",
//         "maxLength": 100
// },
// "types": [
//     {}
// ],
//     "creatorId": {
//     "type": "SchemaObjectId",
//         "required": true,
//             "ref": "Account"
// }
// }