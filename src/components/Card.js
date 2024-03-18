import { FaCartPlus } from "react-icons/fa";

export default function Card({id, imagem, titulo, texto, preco, addCarrinho}){

    return(
        <div className="relative flex flex-row h-[114px] w-[377px] sm:w-[612px] sm:h-[144px] rounded-[4px]">
            <div className="w-[108px] h-[108px] sm:h-full sm:w-[144px]">
                <img className="h-full object-cover rounded-[4px]" src={imagem}></img>
            </div>
            <div className="w-[261px] h-[60px] sm:w-[454px] sm:h-[81px]">
                <div className="px-3 pt-1">
                    <h1 className="roboto-bold text-[14px] sm:text-[18px]">{titulo}</h1>
                    <p className="roboto-regular text-[12px] sm:text-[16px] text-justify">{texto}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-[270px] sm:w-[468px]">
                    <div className="flex flex-row justify-between px-3 pt-2">
                        <h1 className="roboto-medium text-[16px] sm:text-[18px]">{preco}</h1>
                        <button onClick={() => addCarrinho(id)} className="flex w-[45px] h-[25px] items-center justify-center rounded-[4px] bg-[#000000] text-[#FFFFFF]">
                            <FaCartPlus className="w-[19px] h-[17.22px]"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}