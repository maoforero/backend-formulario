const normalizr =  require("normalizr");
const normalize = normalizr.normalize;
const denormalize = normalizr.denormalize;
const schema = normalizr.schema;

const originalData = {
  id:,

}

const user =  new schema.Entity('user');

const article =  new schema.Entity('articles', {
  author: user,
  comments: [comment]
})
