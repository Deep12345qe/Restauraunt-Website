const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8383;

app.use(express.static('public'));
app.use(express.json());

// app.get('/:dynamic', (req, res) => {
//     const { dynamic } = req.params;
//     const { itemsOrdered} = req.query;
//     console.log(dynamic);
//     res.status(200).send();
// })

// app.post('/', (reg, res) => {
//     const { parcel } = req.body;
//     console.log(parcel)
//     if (!parcel) {
//         return res.status(400).send({ status: 'failed'})
//     }
//     res.status(200).send({ status: 'received '})
// })

app.listen(port, () => console.log(`Server has started on port: ${port}`));
