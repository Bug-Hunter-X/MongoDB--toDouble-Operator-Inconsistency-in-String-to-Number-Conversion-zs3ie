```javascript
const query = { "$expr": { "$gt": [ {"$toDouble": "$price" }, 100 ] } };
db.collection('products').find(query);
```