const express = require('express');
const router = express.Router();
const st = require('../controller/student');
const te = require('../controller/teacher');
const co = require('../controller/course');
const usr=require('../controller/user');
router.get('/getstudentmarks', (req, res) => {
  const users = [
  { name: "Pooja", age: 22 },
  { name: "Riya", age: 21 },
  { name: "Neha", age: 23 }
];

   res.render('home', { users });
});
 

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students API
 */

/**
 * @swagger
 * /api/getdata:
 *   get:
 *     summary: Get all student data
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Student data fetched successfully
 *       401:
 *         description: Unauthorized (Token missing/invalid)
 */
router.get('/getdata',  st.getstudentdata);

/**
 * @swagger
 * /api/addstudent:
 *   post:
 *     summary: Add new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               course:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student added successfully
 */
router.post('/addstudent', st.insertstudentdata);

/**
 * @swagger
 * /api/updatestudent:
 *   put:
 *     summary: Update student data
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               course:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated successfully
 */
router.put('/updatestudent', st.updatestudentdata);

/**
 * @swagger
 * /api/deletestudent:
 *   delete:
 *     summary: Delete student
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student ID to delete
 *     responses:
 *       200:
 *         description: Student deleted successfully
 */
router.delete('/deletestudent', st.deletestudentdata);

 /**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teachers API
 */

/**
 * @swagger
 * /api/getTeachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: Success
 */


router.get('/getTeachers', te.getteacherdata);
/**
 * @swagger
 * /api/addTeacher:
 *   post:
 *     summary: Add new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       200:
 *         description: Teacher added successfully
 */

router.post('/addTeacher', te.insertteacherdata);
/**
 * @swagger
 * /api/updateTeacher:
 *   put:
 *     summary: Update teacher data
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 */

router.put('/updateTeacher', te.updateteacherdata);
/**
 * @swagger
 * /api/deleteTeacher:
 *   delete:
 *     summary: Delete teacher
 *     tags: [Teachers]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Teacher ID to delete
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 */

router.delete('/deleteTeacher',te.deleteteacherdata);

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Courses API
 */

/**
 * @swagger
 * /api/getCourse:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Success
 */

router.get('/getCourse', co.getcoursedata);

/**
 * @swagger
 * /api/addCourse:
 *   post:
 *     summary: Add new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: string
 *     responses:
 *       200:
 *         description: Course added successfully
 */

router.post('/addCourse', co.insertcoursedata);

/**
 * @swagger
 * /api/updateCourse/{id}:
 *   put:
 *     summary: Update course data
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: string
 *     responses:
 *       200:
 *         description: Course updated successfully
 */


router.put('/updateCourse/:id', co.updatecoursedata);

/**
 * @swagger
 * /api/deleteCourse/{id}:
 *   delete:
 *     summary: Delete course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course deleted successfully
 */

router.delete('/deleteCourse/:id',co.deletecoursedata);

router.get('/getUser', require('../controller/user').getuserdata);
router.post('/login', usr.loginUser);

module.exports=router;