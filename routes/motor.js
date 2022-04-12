const motorController = require('../controllers/motorController');

const router = require('express').Router();
//ADD MOTOR
router.post("/",motorController.addAMotor);
//GET ALL MOTOR
router.get("/",motorController.getAllMotors);
//GET A MOTOR
router.get("/:id",motorController.getAMotor);
//UPDATE A MOTOR
router.put("/:id",motorController.updateMotor);
//DELETE A MOTOR
router.delete("/:id",motorController.deleteMotor);
module.exports = router;