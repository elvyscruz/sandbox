const express = require('express')
const router = express.Router()
const {

  getPeople, createPeople, createPostman, updatePeople, deletePeople

} = require('../controllers/people')

router.route('/').get(getPeople).post(createPeople)

router.post('/postman', createPostman)

router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router
