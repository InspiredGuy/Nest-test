import { Serializer } from '../../../api/serializer';

Serializer.register('cat', {
  id: 'id',
  links: {
    self: data => `/cat/${data.id}`,
  },
  relationships: {
    owner: {
      type: 'human',
      links: data => {
        return {
          self: `/human/${data.id}`,
        };
      },
    },
  },
});

export { Serializer };
