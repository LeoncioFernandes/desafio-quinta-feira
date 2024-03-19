export default function ModalPedidos({idItem, titulo, quantidade, total, removerCarrinho}){

    return(
        <div className="flex flex-row justify-between items-center mt-2">
            <div className="flex flex-col text-left text-[#000000]">
                <h1 className="roboto-medium text-[18px]">{titulo}</h1>
                <p className="text-[16px] roboto-regular">(Quantidade: {quantidade})</p>
                <p className="text-[16px] roboto-regular">R$ {total}</p>
            </div>
            <div>
                <button onClick={() => removerCarrinho(idItem)} type="button" className="text-[16px] roboto-regular">
                    Remover
                </button>
            </div>
        </div>
    )
}