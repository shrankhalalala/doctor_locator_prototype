# 🏥 Hospital Doctor Locator

A web-based system to visually **track doctors** inside a hospital building in real time, with features like **floor-wise views**, **search by specialty**, and **hoverable beacon points** for major hospital locations (e.g., Reception, ICU, Pharmacy).



## 🚀 Features

* 🔍 **Search doctors** by specialty
* 🕹️ **Simulate real-time doctor movement**
* 📍 **Track doctor locations** on multiple floors
* 🗂️ **Floor switching** to filter by level
* 🟥 **Beacons** for hospital departments (Reception, ICU, etc.)
* 💡 **Tooltips on hover** over beacons for quick location info
* 🖥️ **Responsive UI** with a modern design


## 📁 Project Structure

```plaintext
project-root/
├── index.html         # Main frontend UI
├── server.js          # Express backend + Socket.IO server
├── db.json            # Sample data (doctors + beacons)
├── package.json       # Dependencies
```


## 🧪 Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/yourusername/doctor-locator.git
cd doctor-locator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

> ⚡ This starts the Express server with Socket.IO enabled on `http://localhost:5050`


## 📡 API Endpoints

* `GET /api/doctors` → Returns list of doctors
* `GET /api/beacons` → Returns list of named hospital beacons


## ⚙️ Technologies Used

* 🧠 JavaScript (Vanilla)
* 🖼️ HTML5 + CSS3 (Responsive + Styled UI)
* ⚙️ Node.js with Express
* 🔌 Socket.IO for real-time updates


## 📊 Example Use Cases

* A receptionist can **locate** where a doctor is before guiding a patient.
* Visitors can see which **departments are on which floors**.
* Admins can **simulate** doctor flow and position changes for testing IoT/BLE setups.


## 🛠️ Next Steps / TODO

* Add patient tracking module
* Integrate BLE/Beacon scanning
* Doctor availability status (busy/available)
* Export map snapshot as PDF/image


## 🙌 Author

Made with ❤️ by Shrankhala Singh
> Ready to integrate IoT or BLE tracking for hospitals? Start here.
