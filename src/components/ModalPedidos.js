export default function ModalPedidos({id, titulo, quantidade, total, removerCarrinho}){

    return(
        <div className="flex flex-row justify-between items-center mt-[11px] font-roboto font-medium">
            <div className="flex flex-col text-left text-[#000000]">
                <h1 className="text-[18px]">{titulo}</h1>
                <p className="text-[16px]">(Quantidade: {quantidade})</p>
                <p className="text-[16px]">R$ {total}</p>
            </div>
            <div>
                <button onClick={() => removerCarrinho(id)} type="button" className="text-[16px]">
                    Remover
                </button>
            </div>
        </div>
    )
}