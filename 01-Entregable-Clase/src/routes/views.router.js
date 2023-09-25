import {Router} from 'express';
import Student from '../service/db/students.service.js';
import Courses from '../service/db/courses.service.js';

const studentsManager = new Students();
const coursesManager = new Courses();

const router = Router();

router.get('/',async(req,res)=>{
    let students = await studentsManager.getAll();
    console.log(students);
    res.render('students',{students})
})

router.get('/courses',async(req,res)=>{
    let courses = await coursesManager.getAll();
    console.log(courses);
    res.render('courses',{courses})
})


export default router;