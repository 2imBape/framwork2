import { Product } from 'src/types/Product'
import "./admin.css"
import Header from 'src/layouts/admin/Header'
import { Link } from 'react-router-dom'

type Props = {
  product: Product[]
  onDel: (id:number) => void
}

const Admin = ({product, onDel} :Props) => {
  
return (
  <>
  <Header />
  <div>
    <h2>Bảng quản lý danh sách sản phẩm</h2>
      <table className="product-table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá sản phẩm</th>
                  <th>Ảnh sản phẩm</th>
                  <th>Loại sản phảm</th>
                  <th>Thao tác</th>
              </tr>
          </thead>
          <tbody>
              {product.map(product => (
                  <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>
                        <img src={product.image} width={80} alt="" />
                      </td>
                      <td>{product.category}</td>
                      <td>
                          <Link  to={`product/${product.id}`}><button>Sửa</button></Link>
                          <button className="btn btn-danger" onClick={() => (onDel(Number(product.id)))}>Xóa</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
  
  </div>
  </>
)
}
export default Admin
