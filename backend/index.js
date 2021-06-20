const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 3001

// C
// server.post('/api', (req, res,) => {
//   const body = req.body;
//   console.log('body: ', body);
//   fs.readFile(
//     './todos.json',
//     (err, data) => {
//       if(err) throw errconsole.log('sadasd')
//       const db = JSON.parse(data);
//       const id = Date.now();
//       db.todos[id] = { ...req.body };
        
//       fs.writeFile(
//         './todos.json',
//         JSON.stringify(db),
//         (err) => {
//           if (err) {
//             console.log('error', err)
//           } else {
//             res.send(db)
//           }
//         }
//       );      
//     });
//   },
// );

// R
// server.get('/api', (req, res,) => {
//   fs.readFile(
//     './todos.json',
//     'utf-8',
//     (err, data) => {
//       res.json(data);
//       res.end(`<p>hi</p>`)
//     },
//   );
// });

server.get('/api', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'todos.json'), 'utf-8', (err, data) => {
    res.json(JSON.parse(data));
    // res.send(JSON.parse(data));
    },
  );
})

// U
// server.put('/', (req, res,) => {

// });

// D
// server.delete('/', (req, res,) => {

// });



  

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
