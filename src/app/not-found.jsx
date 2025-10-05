// app/not-found.jsx
export default function NotFound() {
  return (
    <main className="container py-5">
      <h1 className="h3 mb-2">ไม่พบหน้าที่คุณต้องการ</h1>
      <p className="text-muted mb-4">ลิงก์อาจถูกย้ายหรือลบไปแล้ว</p>
      <a className="btn btn-primary" href="/">กลับหน้าแรก</a>
    </main>
  );
}
