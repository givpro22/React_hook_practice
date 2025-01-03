import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

// CORS 설정
const corsOptions = {
  origin: 'http://localhost:5173', // 프런트엔드 도메인
  methods: ['GET', 'PUT'], // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type'], // 허용할 요청 헤더
  optionsSuccessStatus: 200, // OPTIONS 요청 성공 상태 코드
};

app.use(cors(corsOptions)); // CORS 미들웨어 사용
app.use(express.static('images'));
app.use(bodyParser.json());

// OPTIONS 요청 처리
app.options('*', cors(corsOptions)); // 모든 경로에서 OPTIONS 요청 처리

// API 엔드포인트
app.get('/places', async (req, res) => {
  const fileContent = await fs.readFile('./data/places.json');
  const placesData = JSON.parse(fileContent);
  res.status(200).json({ places: placesData });
});

app.get('/user-places', async (req, res) => {
  const fileContent = await fs.readFile('./data/user-places.json');
  const places = JSON.parse(fileContent);
  res.status(200).json({ places });
});

app.put('/user-places', async (req, res) => {
  const places = req.body.places;
  await fs.writeFile('./data/user-places.json', JSON.stringify(places));
  res.status(200).json({ message: 'User places updated!' });
});

// 404 핸들러
app.use((req, res) => {
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
