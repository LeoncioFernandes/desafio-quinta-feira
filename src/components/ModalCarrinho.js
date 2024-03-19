import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ModalPedidos from './ModalPedidos'
import Itens from './Itens'


export default function ModalCarrinho({closeModal, itensCarrinho, remover}){
  
  const [carrinho, setCarrinho] = useState([...itensCarrinho]); // Estado do carrinho atualizado
  
  const countMap = {}

  carrinho.forEach(idRep => {
      const matchingItem = Itens().find(item => item.id === idRep);
      if(matchingItem){
        countMap[idRep] = (countMap[idRep] || 0) + 1
      }
    })

    const removerCarrinho = (itemId) => {
      const novoCarrinho = carrinho.filter(item => item !== itemId);
      setCarrinho([...novoCarrinho]);
      remover(itemId)
  };

    return(
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col w-[653px] h-[500px] justify-between transform overflow-hidden rounded-[8px] bg-[#FFFFFF] p-6 text-center align-middle shadow-xl transition-all">
                  
                  <div>
                    <Dialog.Title as="h3" className="w-full h-[38px] roboto-bold text-[24px] text-[#000000]">
                      Seu carrinho
                    </Dialog.Title>
                    <div className='w-full h-[250px] overflow-auto pr-[10px]'>
                      {Itens()
                      .filter(item => carrinho.includes(item.id))
                      .map((item) => (
                        <ModalPedidos
                        key={item.id}
                        id={item.id}
                        titulo={item.titulo}
                        quantidade={countMap[item.id]}
                        total={(parseFloat(item.preco) * (countMap[item.id])).toLocaleString(undefined, {minimumFractionDigits: 2})}
                        removerCarrinho={() => removerCarrinho(item.id)}
                      />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className='w-full mt-4 roboto-medium text-[18px] text-[#000000]'>
                      <p className='text-left'>Endereço de entrega:</p>
                      <input className='w-full h-[45px] rounded-[4px] px-[8px] border-[1.5px] border-[#C9C9C9] placeholder:text-[#C1C1C1]' type='text' placeholder='Digite seu endereço completo...'></input>
                    </div>

                    <div className="flex flex-row justify-between mt-8">
                      <button type='button' className='roboto-regular text-[16px] text-[#000000]' onClick={closeModal}>Fechar</button>
                      <button
                        type="button"
                        className="roboto-bold w-[191px] h-[34px] rounded-[4px] text-[16px] text-[#FFFFFF] bg-[#54CC0A]"
                        onClick={closeModal}
                      >
                        Finalizar pedido
                      </button>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
}