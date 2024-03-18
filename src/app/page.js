'use client'

import { useState } from "react";
import Card from "@/components/Card";
import ModalCarrinho from "@/components/ModalCarrinho";
import { FaShoppingCart } from "react-icons/fa"

export default function Home() {

  //ADD ITENS NO CARRINHO
  const [cartItems, setCartItems] = useState([]);
  const addCarrinho = (itemId) => {
    setCartItems([...cartItems, itemId]);
  };

  //ABRIR MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
  }
    
  //ARRAY DE ITENS
  const cards = [
    {
      id: 1, 
      imagem: "../imgs/imgsCards/img01.png",
      titulo: "Cheese Burger Duplo",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 2,
      imagem: "../imgs/imgsCards/img02.png",
      titulo: "Cheese Burger",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 3,
      imagem: "../imgs/imgsCards/img03.png",
      titulo: "Smash Burger",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 4,
      imagem: "../imgs/imgsCards/img04.png",
      titulo: "Cheese Bacon",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 5, 
      imagem: "../imgs/imgsCards/img05.png",
      titulo: "Cheese Burger",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 6, 
      imagem: "../imgs/imgsCards/img06.png",
      titulo: "Cheese Burger",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 7, 
      imagem: "../imgs/imgsCards/img07.png",
      titulo: "Cheese Burger Duplo",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
    {
      id: 8, 
      imagem: "../imgs/imgsCards/img08.png",
      titulo: "Pastel De Queijo",
      texto: "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
      preco: "R$ 35,00"
    },
  ]
  

  return (
    <>
      {/* FIXAR O RODAPÉ */}
      <div className="relative">

        {/* CABEÇALHO */}
        <div>
          <div className=" relative flex flex-col items-center ">
            <img className="object-cover w-full h-[456px]" src="../imgs/bg.png" />
            <div className="absolute mt-[51px]">
              <div className="flex flex-col gap-4 items-center text-[#FFFFFF]">
                <img className="object-cover h-[185px] w-[185px] rounded-full" src="../imgs/bg-pop.png"></img>
                <h1 className="inter-bold text-[28px]">Red Burguer</h1>
                <p className="roboto-regular text-[16px]">Rua dev sucesso, 12, Campo Grande, MS</p>
                <button className="roboto-bold w-[256px] h-[43px] rounded-[4px] text-[18px] bg-[#54CC0A]">Seg á Dom - 18:00 as 22:00</button>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTO CENTRAL */}
        <div className="flex flex-col items-center py-10">
          <h1 className="text-[24px] roboto-bold text-[#000000] sm:text-[34px]">Conheça nosso menu</h1>
        </div>

        {/* CARDS */}
        <div className="flex flex-col items-center pb-20 gap-5 xl:flex-row flex-wrap justify-center">
          {cards.map((item) => (
            <Card 
              key={item.id}
              imagem={item.imagem}
              titulo={item.titulo}
              texto={item.texto}
              preco={item.preco}
              addCarrinho={addCarrinho}
            /> 
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-[60px] bg-[#FF3131] text-[#FFFFFF]">
          <button onClick={handleOpenModal} className="flex flex-row items-center gap-[8px]">
            <p className="roboto-bold text-[14px]">( {cartItems.length} ) Veja seu carrinho</p>
            <FaShoppingCart className="w-[25px] h-[25px]" />
          </button>
        </div>

        {/* Renderização do modal */}
        {isModalOpen && <ModalCarrinho closeModal={() => setIsModalOpen(false)} />}
        
      </div>
    </> 
  );
}
