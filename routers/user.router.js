const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const allowRoles = require('../middleware/permission.middleware');


router.post('/signup', (req, res) => controller.signup(req, res));


router.post('/login', (req, res) => controller.login(req, res));



router.get(
  '/students',
  auth,
  allowRoles('Student', 'Teacher'),
  (req, res) => controller.getStudents(req, res)
);


router.get(
  '/students/:id',
  auth,
  allowRoles('Student', 'Teacher'),
  (req, res) => controller.getStudentById(req, res)
);



router.get(
  '/teachers',
  auth,
  allowRoles('Teacher'),
  (req, res) => controller.getTeachers(req, res)
);


router.get(
  '/teachers/:id',
  auth,
  allowRoles('Teacher'),
  (req, res) => controller.getTeacherById(req, res)
);


router.patch(
  '/students/:id',
  auth,
  allowRoles('Teacher'),
  (req, res) => controller.updateStudent(req, res)
);



router.patch(
  '/profile',
  auth,
  allowRoles('Student', 'Teacher'),
  (req, res) => controller.updateProfile(req, res)
);

module.exports = router;