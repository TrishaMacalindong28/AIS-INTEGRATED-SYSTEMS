import * as authAdapter from '../adapters/authAdapter.js';

export const registerStudent = async (studentProfile) => {
    if (studentProfile.firstName === ''){
        throw new Error('First name is required');
    }
    return await authAdapter.create(studentProfile);
}
export const getStudentProfile = async (studentId) => {
    if (!studentId) {
        throw new Error('Student ID is required');
    }
    return await authAdapter.findById(studentId);
};