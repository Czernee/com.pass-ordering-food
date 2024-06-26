import Router from 'express'
import dishController from '../controllers/dish.controller.js'
const dishRouter = Router()

dishRouter.get('/', dishController.getDishes)
dishRouter.get('/:id', dishController.getOneDish)
dishRouter.post('/', dishController.createDish)
dishRouter.patch('/:id', dishController.updateDish)
dishRouter.delete('/:id', dishController.deleteDish)

export default dishRouter