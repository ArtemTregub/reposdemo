
function Cart(props) {
    // console.log(props.obj)
    let summ = 0;

    Object.keys(props.cart).map((item, key) => summ += props.cart[item] * props.elem[item]['cost'], summ)

    return (
        <>

            <tbody className="cart-table">

                <tr><th>Name</th><th>cost</th><th>quant</th><th>summ</th><th>img</th><th colSpan="2">options</th></tr>

                {Object.keys(props.cart).map(item =>
                    <tr key={item + props.elem[item]['title']}>
                        <td>{props.elem[item]['title']}</td>
                        <td>{props.elem[item]['cost']}</td>
                        <td>{props.cart[item]}</td>
                        <td>{props.cart[item] * props.elem[item]['cost']}</td>
                        <td align="center"><img src={props.elem[item]['image']} width="35%" alt={props.elem[item]['title']} /></td>
                        <td><button className="minus" data-key={props.elem[item]['articul']}>-</button></td>
                        <td><button className="delete" data-key={props.elem[item]['articul']}>del</button></td></tr>)}
                <tr><td colSpan="3">Total cost</td><td>{summ}</td></tr>
            </tbody>
        </>

    )
}

export default Cart;