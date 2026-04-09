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

 

router.get('/getTeachers', te.getteacherdata);
router.post('/addTeacher', te.insertteacherdata);
router.put('/updateTeacher', te.updateteacherdata);
router.delete('/deleteTeacher',te.deleteteacherdata);

router.get('/getCourse', co.getcoursedata);
router.post('/addCourse', co.insertcoursedata);
router.put('/updateCourse/:id', co.updatecoursedata);
router.delete('/deleteCourse/:id',co.deletecoursedata);

router.get('/getUser', require('../controller/user').getuserdata);
router.post('/login', usr.loginUser);

module.exports=router;