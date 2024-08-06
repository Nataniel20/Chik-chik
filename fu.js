function App(){
    return{
        <header>
        <span>carrinho de compras</span>
    </header>
    
    <main>
        <div class="page">o seu carrinho</div>
        <div class="content">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>produto</th>
                            <th>preco</th>
                            <th>quantidade</th>
                            <th>total</th>
                            <th>---</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <div class="product">
                                <img src="p1.png" alt="" width="70px">
                                <div class="info">
                                    <div class="name">nome do produto</div>
                                    <div class="categori">categoria</div>
                                </div>
                                 </div>
                        </td>
                        <td>128 kz</td>
                        <td>
                            <div class="qty">
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </div>
                        </td>
                        <td>240</td>
                        <td><button class="remove"><i class="bx bx-x"></i></button></td>
                    </tr>
                        
                    </tbody>
                </table>
            </section>
            <aside>
                <div class="box">
                    <div class="he">resumo de conta</div>
                    <div class="infor">
                        <div><span>subtotal</span> <span>800kz</span></div>
                        <div><span>entregas</span> <span>Gratuito</span></div>
                        <div><button>adicionar cupom de desconto</button></div>
                    </div>
                    <footer>
                        <span>Total</span>
                        <span>418 kz</span>
                    </footer>
                </div>
                <button>finalizar compra</button>
            </aside>
        </div>
    </main>
    }
}
export default App;