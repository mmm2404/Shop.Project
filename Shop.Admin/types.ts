export interface IProductEditData {
    title: string;
    description: string;
    price: string;
    mainImage: string;
    newImages?: string;
    commentsToRemove: string | string[];
    imagesToRemove: string | string[];
}

// declare namespace Express {
//     export interface Request {
//         username: { [key: string]: any }
//     }
//   }

  // import "express-session";
// declare module "express-session" {
//   interface SessionData {
// 
//   }
// }



