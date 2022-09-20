import BaseController from '../utils/BaseController.js';

export class CarsController extends BaseController {
  constructor() {
    super('api/cars');
    this.router
      .get('/', this.getAll)
      .get('/:id/', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete);
  }

  async getAll(req, res, next) {
     try {
      //  const example = await example;
       //res.send()
     } catch (error) {
       next(error);
     }
   }
 
   async getById(req, res, next) {
     try {
      //  const example = await example;
       //res.send()
     } catch (error) {
       next(error);
     }
   }
 
   async create(req, res, next) {
     try {
      //  const example = await example;
       //res.send()
     } catch (error) {
       next(error);
     }
   }
 
   async edit(req, res, next) {
     try {
      //  const example = await example;
       //res.send()
     } catch (error) {
       next(error);
     }
   }
 
   async delete(req, res, next) {
     try {
      //  const example = await example;
       //res.send()
     } catch (error) {
       next(error);
     }
   }
}
