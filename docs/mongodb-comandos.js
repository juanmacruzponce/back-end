//
// use heroclash4geeks

//insert data
db.medicos.insertOne({
    apellido: 'Sordo',
    nombre: 'Ramiro',
    dni: '12345',
    matricula: '26',
    especialidad: 'traumatologia'
  })
  
  db.medicos.insertOne({
    apellido: 'Castro',
    nombre: 'Nicolas',
    dni: '54321',
    matricula: '10',
    especialidad: 'radiologia'
  })
  
  // query
  db.medicos.find()
  db.medicos.find({ matricula: '10' })
  
  //update
  db.medicos.updateOne({ matricula: '26' }, { $set: { apellido: 'Aguirre', nombre: 'Brian' } })
  
  //delete
  db.medicos.deleteOne({ matricula: '26' })