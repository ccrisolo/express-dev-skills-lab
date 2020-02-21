const Skill = require('../models/skill');

function index(req, res){
  res.render('../views/skills/index.ejs', {skills: Skill.getAll()})
}


module.exports = {
  index, 
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}