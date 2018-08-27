const projects = (parent, args, context, info) => {

  // Filter on projects here
  const id = args.id ? { id: args.id } : {};

  return context.db.query.projects({ where: id }, info);
};

const integrations = (parent, args, context, info) => {

  // Filter on projects here
  const id = args.id ? { id: args.id } : {};

  return context.db.query.integrations({}, info);
};

module.exports = {
  projects,
  integrations
};