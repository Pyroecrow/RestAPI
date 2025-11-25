const { getAllObjects, addObject, getObjectById, deleteObjectById, updateObjectById } = require('../Data/studentData');

// GET /
const getAllStudents = async (req, res) => {
    try {
        const students = await getAllObjects();
        res.status(200).json({sucsess: true, data: students});
    } catch (error) {
        res.status(500).json({sucsess: false, message: 'Server Error'});
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await getObjectById(id);
        res.status(200).json({sucsess: true, data: student});
    } catch (error) {
        if (!student) {
        return res.status(404).json({sucsess: false, message: 'Student not found'});
    }
        res.status(500).json({sucsess: false, message: 'Server Error'});
    }
}

const createStudent = async (req, res) => {
    try {
        const {name, age} = req.body;
        const newStudent = await addObject({name, age});
        res.status(200).json({sucsess: true, data: addObject({name, age})});
    } catch (error) {
        res.status(500).json({sucsess: false, message: 'Server Error'});
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const updatedStudent = await updateObjectById(id, { name, age });
        res.status(200).json({sucsess: true, data: updatedStudent});
    } catch (error) {
        res.status(500).json({sucsess: false, message: 'Server Error'});
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteObjectById(id);
        res.status(200).json({sucsess: true, message: 'Student deleted successfully'});
    } catch (error) {
        res.status(500).json({sucsess: false, message: 'Server Error'});
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};