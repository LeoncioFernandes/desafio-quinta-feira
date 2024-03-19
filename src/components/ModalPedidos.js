export default function ModalPedidos(){

    return(
        <div className="flex flex-row justify-between items-center mt-2">
            <div className="flex flex-col text-left text-[#000000]">
                <h1 className="roboto-medium text-[18px]">Cheese</h1>
                <p className="text-[16px] roboto-regular">(Quantidade: 2)</p>
                <p className="text-[16px] roboto-regular">R$ 32,90</p>
            </div>
            <div>
                <button className="text-[16px] roboto-regular">
                    Remover
                </button>
            </div>
        </div>
    )
}