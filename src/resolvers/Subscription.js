function subscribeToIntegrations (parent, args, context, info) {
  // if (!args.id) throw new Error(`There is no such integration`);
  // TODO: add error handling
  return context.db.subscription.integration({
    where: {
      mutation_in: ['CREATED', 'UPDATED', 'DELETED']
    }
  }, info)
};

// TODO: fix subscription

const newIntegration = {
  subscribe: subscribeToIntegrations
};


module.exports = {
  newIntegration
};