// Project operations
// Todo: move to a separate resolver file

const addProject = function (parent, args, context, info) {
  if (!args.name) throw new Error(`There is no name given for a project`);

  return context.db.mutation.createProject({data: { name: args.name }}, info)
};

const updateProject = function (parent, args, context, info) {
  if (!args.name) throw new Error(`There is no name in the input, so there's no such project`);

  return context.db.mutation.updateProject({ data: { name: args. name }, where: { id: args.id } }, info); //{where:{ id: args.id }}, {data: { name: args.name }}, info)
};

const deleteProject = function (parent, args, context, info) {
  console.log('arguments!!!!!', args)
  if (!args.id) throw new Error(`There is no such project`);

  return context.db.mutation.deleteProject({ where: { id: args.id } }, info); //{where:{ id: args.id }}, {data: { name: args.name }}, info)
};

module.exports = {
  addProject,
  updateProject,
  deleteProject
};