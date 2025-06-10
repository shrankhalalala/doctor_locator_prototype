const express = require('express');
const SocketIO = require('socket.io');
const { Low, JSONFile } = require('lowdb');
const cors = require('cors');
const fs = require('fs');

// Initialize mock database
const file = 'db.json';

// Create db.json if it doesn't exist
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, JSON.stringify({ 
    doctors: [],
    beacons: [],
    patients: [] 
  }, null, 2));
}

const adapter = new JSONFile(file);
const db = new Low(adapter);

const app = express();
app.use(cors());
app.use(express.static('public')); // Serve static files

const server = app.listen(3000, async () => {
  await db.read(); // Read database before starting
  console.log('Server running on port 3000');
});

const io = SocketIO(server, { cors: { origin: '*' } });

// API Endpoints
app.get('/api/doctors', async (req, res) => {
  await db.read();
  res.json(db.data.doctors);
});

app.get('/api/beacons', async (req, res) => {
  await db.read();
  res.json(db.data.beacons);
});

// Socket.io for real-time updates
io.on('connection', async (socket) => {
  console.log('Client connected');
  
  socket.on('updatePosition', async (data) => {
    await db.read();
    
    if (data.type === 'doctor') {
      const doctor = db.data.doctors.find(d => d.id === data.id);
      if (doctor) {
        doctor.position = data.position;
        await db.write();
      }
    }
    io.emit('positionUpdate', data);
  });
});