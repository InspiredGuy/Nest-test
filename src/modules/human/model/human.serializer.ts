import { Serializer } from '../../../api/serializer';

Serializer.register('human', {
  id: 'id',
  links: {
    self: data => `/human/${data.id}`,
  },
});

export { Serializer };
