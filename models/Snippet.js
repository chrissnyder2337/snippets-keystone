var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Snippet = new keystone.List('Snippet', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});

Snippet.add({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  description: { type: Types.Markdown, height: 200 },
  snippet: { type: Types.Code }
});

Snippet.defaultColumns = 'title';
Snippet.register();
