```javascript
// Alternative approach using $convert operator
const query = { "$expr": { "$gt": [ { "$toDouble": { "$convert": { "input": "$price", "to": "double" } } }, 100 ] } };
db.collection('products').find(query);

//Another approach to handle potential errors
const query2 = {
  $expr: {
    $and: [
      {$type: ['$price', 'string']},
      {$gt: [{ $toDouble: '$price' }, 100]}
    ]
  }
};
db.collection('products').find(query2); 
```