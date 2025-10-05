export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">เกี่ยวกับ PG Phone</h5>
            <p className="text-white">
              PG Phone ร้านมือถือออนไลน์ ทุกรุ่น เช่น PG V9, PG V8 ส่งตรงถึงมือคุณด้วยคุณภาพและบริการมืออาชีพ
              พร้อมโปรโมชั่นพิเศษและบริการหลังการขายที่คุณวางใจได้
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">เมนูลัด</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">หน้าแรก</a></li>
              <li><a href="#products" className="text-white text-decoration-none">สินค้า</a></li>
              <li><a href="#promotions" className="text-white text-decoration-none">โปรโมชั่น</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">ติดต่อเรา</h5>
            <p className="text-white mb-1">
              📍 PG Phone Shop ชั้น3 เดอะมอลล์ โคราช 1242/2 ถ. มิตรภาพ ต.ในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000
            </p>
            <p className="text-white mb-1">
              📍 สาขาเดอะมอลล์โคราช: ชั้น 3, Nakhon Ratchasima 30000
            </p>
            <p className="text-white mb-1">📞 โทร: 098-158-8303</p>
            <p className="text-white mb-3"></p>

            {/* Social Media */}
            <div>
              <a href="https://facebook.com/pgphonestore" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://line.me/ti/p/yourlineid" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-line fs-4"></i>
              </a>
              <a href="https://m.me/pgphonestore" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-messenger fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-3 border-top border-secondary mt-3">
          <small className="text-white">
            &copy; {new Date().getFullYear()} PG Phone. สงวนลิขสิทธิ์. | เว็บไซต์อย่างเป็นทางการ
          </small>
        </div>
      </div>
    </footer>
  );
}
